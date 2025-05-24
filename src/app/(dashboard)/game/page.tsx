"use client";

import React from "react";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { CameraProps, Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

// -| Project
import Lights from "@/components/ballgame/Lights";
import { Level } from "@/components/ballgame/Level";
import Player from "@/components/ballgame/Player";
import Interface from "@/components/ballgame/Interface";
import useGame from "@/stores/useGame";

const GamePage = () => {
  const blocksCount = useGame((state) => {
    return state.blocksCount;
  });
  const blocksSeed = useGame((state) => {
    return state.blocksSeed;
  });

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas
        flat
        shadows
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block", // - removes canvas inline-block whitespace
        }}
      >
        <Perf position="top-right" />
        <color args={["#bdedfc"]} attach={"background"} />

        {/* <Suspense fallback={<Loader />}> */}
        <Physics>
          <Lights />
          <Level count={blocksCount} seed={blocksSeed} />
          <Player />
        </Physics>
        {/* </Suspense> */}
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
};

export default GamePage;
