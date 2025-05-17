import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Lights = () => {
  const light = useRef<any>(null);

  useFrame((state, delta) => {
    if (light.current) {
      // -| Update light position and target based on camera position and target to render shadow based on where player is, 
      // -| if shadow is too far from light the shadow not rendered and if the light isn't move following camera, the shadow will be missing
      // -| when move away from starting point.
      // -| "- 4" to adjust light to move ahead of player current position because there is shadow rendered behide the camera and 
      // -| it's a bit waste.
      light.current.position.z = state.camera.position.z + 1 - 4;
      light.current.target.position.z = state.camera.position.z - 4;
      light.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={[4, 4, 1]}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      ></directionalLight>
      <ambientLight intensity={1} />
    </>
  );
};

export default Lights;
