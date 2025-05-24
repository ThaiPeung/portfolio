import React from "react";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type useGameType = {
  blocksCount: number;
  blocksSeed: number;
  startTime: number;
  endTime: number;
  phase: "playing" | "ready" | "ended";
  start: () => void;
  restart: () => void;
  end: () => void;
};

export default create(
  subscribeWithSelector<useGameType>((set) => {
    return {
      blocksCount: 10,
      blocksSeed: 0,
      startTime: 0,
      endTime: 0,
      phase: "ready",
      start: () => {
        set((state) => {
          return state.phase === "ready"
            ? { phase: "playing", startTime: Date.now() }
            : {};
        });
      },
      restart: () => {
        set((state) => {
          return state.phase === "playing" || state.phase === "ended"
            ? { phase: "ready", blocksSeed: Math.random() }
            : {};
        });
      },
      end: () => {
        set((state) => {
          return state.phase === "playing"
            ? { phase: "ended", endTime: Date.now() }
            : {};
        });
      },
    };
  })
);
