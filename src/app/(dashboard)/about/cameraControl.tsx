import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { originalCameraPosType } from "./page";
import * as THREE from "three";

const CameraControl: React.FC<{ originalCameraPos: originalCameraPosType }> = (
  props
) => {
  const meshRef = useRef<THREE.Object3D>(null!);

  const [open, setOpen] = useState(false);

  //-| Smoothed cameras setup
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 0, 50));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  useFrame((state, delta) => {
    //-| Camera.
    if (meshRef.current && open) {
      const bodyPosition = meshRef.current.position;

      const cameraPosition = new THREE.Vector3(
        props.originalCameraPos.number[0],
        props.originalCameraPos.number[1],
        props.originalCameraPos.number[2]
      );
      cameraPosition.copy(bodyPosition);
      cameraPosition.z += 15;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 3 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 3 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    } else {
      const cameraPosition = new THREE.Vector3(
        props.originalCameraPos.number[0],
        props.originalCameraPos.number[1],
        props.originalCameraPos.number[2]
      );
      cameraPosition.copy(props.originalCameraPos.vector);
      cameraPosition.z += 2;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(props.originalCameraPos.vector);

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 4 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 4 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    }
  });

  return <div></div>;
};

export default CameraControl;
