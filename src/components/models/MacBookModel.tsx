import { Html, useGLTF } from "@react-three/drei";
import React from "react";

const MacBookModel = () => {
  const { scene } = useGLTF("./models/MacBook.gltf");
  return (
    <>
      <primitive object={scene} position-y={-1.2}>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
        ></Html>
      </primitive>
    </>
  );
};

export default MacBookModel;
