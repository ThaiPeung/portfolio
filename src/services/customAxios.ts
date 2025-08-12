import { apiURL } from "@/env";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import Router from "next/router";

// -| Create an Axios instance preconfigured to send cookies
const customAxios: AxiosInstance = axios.create({
  baseURL: apiURL,
  withCredentials: true, // -| sends HttpOnly cookies (refreshToken)
});

// -| Store the access token in memory (or localStorage)
let accessToken: string | null = null;

// -| Helper to set the Authorization header
function setAuthHeader(token: string) {
  accessToken = token;
  customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// -| Login function
export const login = async (username: string, password: string) => {
  const response = await customAxios.post("/login", { username, password });

  let accessToken: string = response.data.accessToken;
  // -| { accessToken: 'new‑token' }
  setAuthHeader(accessToken);
  return accessToken;
};

// -| Refresh token function
const refreshToken = async () => {
  // -| Do not send Header Authorization to refresh or else jwtFilter will intecept expired token
  const response = await axios.get(apiURL + "/refresh", {
    withCredentials: true,
  });
  // -| { accessToken: 'new‑token' }
  setAuthHeader(response.data.accessToken);
  return response.data.accessToken;
};

// -| Request interceptor to add CSRF token
customAxios.interceptors.request.use((config) => {
  const xsrf = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];

  if (xsrf && config.method !== "get") {
    config.headers!["X-XSRF-TOKEN"] = xsrf;
  }
  return config;
});

// -| Response interceptor to catch 401
customAxios.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const originalReq = err.config as AxiosRequestConfig & { _retry?: boolean };

    // -| Stop refresh if this is refresh or login endpoint
    if (
      ["/refresh", "/login", "/register"].some((item) =>
        originalReq.url?.includes(item)
      )
    ) {
      return Promise.reject(err);
    }

    // -| If 401 haven't retried yet
    if (
      err.response?.status === 401 &&
      !originalReq._retry &&
      (customAxios.defaults.headers.common["Authorization"]
        ?.toString()
        .split(" ")[1].length || 0) > 0
    ) {
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
        // -| e.g. window.location.href = '/login';

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(err);
  }
);

export function logout() {
  // -| Clear our in‑memory/accessToken
  // -|    (you might also clear localStorage if you stored it there)
  // -| @ts-ignore
  customAxios.defaults.headers.common["Authorization"] = "";

  // -| Optionally tell the server to clear the refresh cookie
  // -|    (you could implement a /api/auth/logout endpoint for that)
  const response = customAxios
    .post("/logout", null, { withCredentials: true })
    .catch(() => {
      /* we still redirect even if this fails */
    });

  // -| 3) Redirect to login
  Router.replace("/crud/login");
}

export default customAxios;
