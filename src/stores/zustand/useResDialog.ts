import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type useResDialogType = {
  open: boolean;
  title: string;
  msg: string;
  type: string;
  setOpenDialog: (val: boolean) => void;
  setTitle: (val: string) => void;
  setMsg: (val: string) => void;
  setType: (val: string) => void;
};

export default create(
  subscribeWithSelector<useResDialogType>((set) => {
    return {
      open: false,
      title: "",
      msg: "",
      type: "",
      setOpenDialog: (val: boolean) => {
        set(() => {
          return { open: val };
        });
      },
      setTitle: (val: string) => {
        set(() => {
          return { title: val };
        });
      },
      setMsg: (val: string) => {
        set(() => {
          return { msg: val };
        });
      },
      setType: (val: string) => {
        set(() => {
          return { type: val };
        });
      },
    };
  })
);
