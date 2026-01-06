import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { originalCameraPosType } from "./page";
import * as THREE from "three";
import { Vector3 } from "three";

const CameraControl: React.FC<{
  focusOn: boolean;
  originalCameraPos: originalCameraPosType;
  targetObj: Vector3;
}> = (props) => {
  //-| Smoothed cameras setup
  const [smoothedCameraPosition] = useState(props.originalCameraPos.vector);
  const [smoothedCameraTarget] = useState(() => new Vector3());

  useFrame((state, delta) => {
    //-| Camera.
    if (props.focusOn) {
      const cameraPosition = new Vector3();
      cameraPosition.copy(props.targetObj);
      cameraPosition.z += 15;

      const cameraTarget = new Vector3();
      cameraTarget.copy(props.targetObj);
      cameraTarget.y += 1.5;
      cameraTarget.x += 2;

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 3 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 3 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    } else {
      const cameraPosition = new Vector3();
      cameraPosition.copy(props.originalCameraPos.vector);

      const cameraTarget = new Vector3();
      cameraTarget.copy(new Vector3());

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 4 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 4 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    }
  });

  return <></>;
};

export default CameraControl;
