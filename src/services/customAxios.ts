import { apiURL } from "@/env";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import Router from "next/router";

// -| 1) Create an Axios instance preconfigured to send cookies
const customAxios: AxiosInstance = axios.create({
  baseURL: apiURL,
  withCredentials: true, // -| sends HttpOnly cookies (refreshToken)
});

// -| 2) Store the access token in memory (or localStorage)
let accessToken: string | null = null;

// -| 3) Helper to set the Authorization header
function setAuthHeader(token: string) {
  accessToken = token;
  customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// -| 4) Login function
export const login = async (username: string, password: string) => {
  const response = await customAxios.post("/login",
    { username, password },
    { withCredentials: true } // -| ensure cookie is set
  );

  console.log("response", response);
  let token: string = response.data.accessToken;
  // -| { accessToken: 'eyJ…' }
  setAuthHeader(token);
  return token;
};

// -| 5) Refresh token function
async function refreshToken() {
  const response = await customAxios.post("/refresh", null, {
    withCredentials: true,
  });
  // -| { accessToken: 'new‑token' }
  setAuthHeader(response.data.accessToken);
  return response.data.accessToken;
}

// -| 6) Response interceptor to catch 401s
customAxios.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const originalReq = err.config as AxiosRequestConfig & { _retry?: boolean };

    // -| If 401 and we haven't retried yet
    if (err.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      try {
        const newToken = await refreshToken();
        // -| Update the failed request with new token and retry
        if (originalReq.headers) {
          originalReq.headers["Authorization"] = `Bearer ${newToken}`;
        }
        return customAxios(originalReq);
      } catch (refreshError) {
        // -| Refresh also failed -> force logout or redirect to login
        accessToken = null;
        // -| e.g. window.location.href = '/auth/login';
        logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(err);
  }
);

export function logout() {
  // -| 1) Clear our in‑memory/accessToken
  // -|    (you might also clear localStorage if you stored it there)
  // -| @ts-ignore
  customAxios.defaults.headers.common["Authorization"] = "";

  // -| 2) Optionally tell the server to clear the refresh cookie
  // -|    (you could implement a /api/auth/logout endpoint for that)
  const response = customAxios
    .post(apiURL + "/logout", null, { withCredentials: true })
    .catch(() => {
      /* we still redirect even if this fails */
    });

  // -| 3) Redirect to login
  Router.replace("/crud/login");
}

export default customAxios;
