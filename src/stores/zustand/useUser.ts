import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type useUserType = {
  username: string;
  roles: string[];
  setUser: (val: { username: string; roles: string[] }) => void;
};

export default create(
  subscribeWithSelector<useUserType>((set) => {
    return {
      username: "",
      roles: [],
      setUser: (val: { username: string; roles: string[] }) => {
        set(() => {
          return { username: val.username, roles: val.roles };
        });
      },
    };
  })
);
