"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { CameraProps, Canvas, useThree } from "@react-three/fiber";
import ThreeLoader from "@/components/ThreeLoader";
import { Environment } from "@react-three/drei";
import Skills from "@/components/about/Skills";
import { Group, Object3D, Object3DEventMap, Vector3 } from "three";
import Contact from "@/components/about/Contact";
import Education from "@/components/about/Education";
import CameraControl from "@/components/about/CameraControl";
import Language from "@/components/about/Language";
import { targetNameType } from "@/components/about/types";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
  SMAA,
} from "@react-three/postprocessing";

const AboutPage = () => {
  const [focusOn, setFocusOn] = useState<boolean>(false);
  const [targetObj, setTargetObj] = useState<Vector3>(new Vector3());
  const [targetName, setTargetName] = useState<targetNameType>(""); //-| Prevent other objs from interactable when focusing
  const [hoveredObj, setHoveredObj] = useState<Group<Object3DEventMap> | null>(null); //-| Show outline

  //-| collect all renderable meshes inside the GLTF once
  const meshes = useMemo<Object3D[]>(() => {
    const arr: Object3D[] = [];
    if (hoveredObj) {
      hoveredObj.traverse((o) => {
        const anyO = o as any;
        if (anyO.isMesh || anyO.isSkinnedMesh) arr.push(o);
      });
    }
    return arr;
  }, [hoveredObj]);

  const originalCameraPos = {
    number: [0, 0, 50],
    vector: new Vector3(0, 0, 50),
  };

  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 200,
    position: originalCameraPos.vector,
    rotation: [0, 0, 0],
  };

  return (
    <Canvas
      dpr={[2, 4]}
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

        <EffectComposer autoClear={false} multisampling={16}>
          <Outline
            selection={meshes}
            edgeStrength={3} // the edge strength
            pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
            visibleEdgeColor={0xffffff} // the color of visible edges
            hiddenEdgeColor={0x22090a} // the color of hidden edges
            blur={true} // whether the outline should be blurred
          />
          <SMAA />
        </EffectComposer>

        {/* <Summary
            focusOn={focusOn}
            setFocusOn={setFocusOn}
            originalCameraPos={originalCameraPos}
            setTargetObj={setTargetObj}
            targetName={targetName}
            setTargetName={setTargetName}
          /> */}

        <Skills
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
          setHoveredObj={setHoveredObj}
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
            setTargetName={setTargetName}
          /> */}

        <Language
          focusOn={focusOn}
          setFocusOn={setFocusOn}
          originalCameraPos={originalCameraPos}
          setTargetObj={setTargetObj}
          targetName={targetName}
          setTargetName={setTargetName}
        />
      </Suspense>
    </Canvas>
  );
};

export default AboutPage;
