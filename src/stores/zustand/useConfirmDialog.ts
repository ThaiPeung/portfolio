import customAxios from "@/services/customAxios";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import axios from "axios";
import useResDialog from "./useResDialog";

type TaskType = "deleteBook" | "";

export type useResDialogType = {
  open: boolean;
  title: string;
  msg: string;
  task: TaskType;
  pressConfirm: boolean;
  setDefault: () => void;
  setOpenDialog: (val: boolean) => void;
  setTitle: (val: string) => void;
  setMsg: (val: string) => void;
  setTask: (val: TaskType) => void;
  setPressConfirm: (val: boolean) => void;
};

export default create(
  subscribeWithSelector<useResDialogType>((set, get) => {
    return {
      open: false,
      title: "",
      msg: "",
      task: "",
      pressConfirm: false,
      setDefault: () => {
        set(() => {
          return {
            open: false,
            title: "",
            msg: "",
            task: "",
            pressConfirm: false,
          };
        });
      },
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
      setTask: (val: TaskType) => {
        set(() => {
          return { task: val };
        });
      },
      setPressConfirm: (val: boolean) => {
        set(() => {
          return { pressConfirm: val };
        });
      },
    };
  })
);
