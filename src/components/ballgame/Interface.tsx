import { Box, styled } from "@mui/material";
import { useKeyboardControls } from "@react-three/drei";
import React from "react";

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
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

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
        }}
      >
        Restart
      </Box>

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
