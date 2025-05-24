import useGame from "@/stores/useGame";
import { Box, styled } from "@mui/material";
import { useKeyboardControls } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

// -| MUI custom style
const Controls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "10%",
  left: 0,
  width: "100%",
  "& .raw": {
    display: "flex",
    justifyContent: "center",
  },
  "& .key": {
    width: "40px",
    height: "40px",
    margin: "4px",
    border: "2px solid #ffffff",
    background: "#ffffff44",
  },
  "& .key.large": {
    width: "144px",
  },
  "& .key.active": {
    background: "#ffffff99",
  },
}));

const Interface = () => {
  // -| useGame
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  // -| useRef
  const time = useRef<any>(null);

  // -| useKeyboardControls
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      // -| remove milisecond
      elapsedTime /= 1000;
      let elapsedTimeStr = elapsedTime.toFixed(2);

      if (time.current) {
        time.current.textContent = elapsedTimeStr;
      }
    });

    return () => {
      unsubscribeEffect;
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Box
        // -| We want to update "time" ourself (directly into HTML DOM) not with reactive data to prevent having too many re-render
        ref={time}
        sx={{
          position: "absolute",
          top: "15%",
          left: 0,
          width: "100%",
          color: "#fff",
          fontSize: "6vh",
          background: "#00000033",
          paddingTop: "5px",
          textAlign: "center",
        }}
      >
        0.00
      </Box>

      {phase === "ended" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "40%",
            left: 0,
            width: "100%",
            color: "#fff",
            fontSize: "80px",
            background: "#00000033",
            paddingTop: "10px",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
          onClick={restart}
        >
          Restart
        </Box>
      )}

      <Controls>
        <Box className={"raw"}>
          <Box className={`key ${forward ? "active" : ""}`}></Box>
        </Box>
        <Box className={"raw"}>
          <Box className={`key ${leftward ? "active" : ""}`}></Box>
          <Box className={`key ${backward ? "active" : ""}`}></Box>
          <Box className={`key ${rightward ? "active" : ""}`}></Box>
        </Box>
        <Box className={"raw"}>
          <Box className={`key large ${jump ? "active" : ""}`}></Box>
        </Box>
      </Controls>
    </Box>
  );
};

export default Interface;
