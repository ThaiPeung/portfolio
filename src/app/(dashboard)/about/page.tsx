"use client";

import React, { Suspense, useEffect, useState } from "react";
import { CameraProps, Canvas } from "@react-three/fiber";
import ThreeLoader from "@/components/ThreeLoader";
import {
  Environment,
  Float,
  OrbitControls,
  Stage,
  Stars,
} from "@react-three/drei";
import Skills from "@/components/about/Skills";
import { CameraRig } from "@/components/crud/share/CameraRig";
import { Leva } from "leva";
import { Vector3 } from "three";
import Contact from "@/components/about/Contact";
import Education from "@/components/about/Education";
import CameraControl from "@/components/about/CameraControl";
import Experience from "@/components/about/Experience";
import Language from "@/components/about/Language";
import Summary from "@/components/about/Summary";
import { targetNameType } from "@/components/about/types";

const AboutPage = () => {
  const [focusOn, setFocusOn] = useState<boolean>(false);
  const [targetObj, setTargetObj] = useState<Vector3>(new Vector3());
  const [targetName, setTargetName] = useState<targetNameType>("");

  const originalCameraPos = {
    number: [0, 0, 50],
    vector: new Vector3(0, 0, 50),
  };

  useEffect(() => {
    console.log(focusOn);
    console.log(targetName);
  }, [focusOn, targetName]);

  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 200,
    position: originalCameraPos.vector,
    rotation: [0, 0, 0],
  };

  return (
    <Canvas
      className="r3f"
      camera={cameraSetting}
      flat
      shadows
      style={{
        outline: "none",
        position: "fixed",
        top: 64,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* <OrbitControls /> */}

      <Environment preset="city" />

      <Suspense fallback={<ThreeLoader />}>
        <CameraControl
          focusOn={focusOn}
          originalCameraPos={originalCameraPos}
          targetObj={targetObj}
          setTargetName={setTargetName}
        />
        {/* <Summary
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
                    setTargetName={targetNamesetT

        /> */}
        <Skills
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
        />
        <Contact
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
        />
        <Education
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
        />
        {/* <Experience
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
                    setTargetName={targetNamesetT

        /> */}
        <Language
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
        />

        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Suspense>
    </Canvas>
  );
};

export default AboutPage;
