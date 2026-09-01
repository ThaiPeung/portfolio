"use client";

import {
  EffectComposer,
  Outline,
  Select,
  SMAA,
  ToneMapping,
} from "@react-three/postprocessing";
import React, {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {
  CameraProps,
  Canvas,
  ThreeElements,
  ThreeEvent,
} from "@react-three/fiber";
import { Group, Mesh, Object3D, Object3DEventMap, Vector3 } from "three";
import {
  checkCurrentTargetName,
  onClickHandler,
  onEnterHandler,
  onLeaveHandler,
} from "@/components/about/shared/handler";
import CameraControl from "@/components/about/CameraControl";
import CityPart from "@/components/models/city/CityPart";
import ThreeLoader from "@/components/ThreeLoader";
import { ToneMappingMode } from "postprocessing";
import { Perf } from "r3f-perf";

type BuildingKey = "" | "BBL";

const City = (props: ThreeElements["group"]) => {
  const position = new Vector3(0, 0, 0);
  const HTMLPosition = new Vector3(6, 2, 0);

  const { nodes, materials } = useGLTF("./models/Low-poly-city.glb");

  const BBLRef = useRef<Group>(null);

  const [hoveredBuilding, setHoveredBuilding] = useState<BuildingKey>("");

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const [focusOn, setFocusOn] = useState<boolean>(false);
  const [targetObj, setTargetObj] = useState<Vector3>(new Vector3());

  const [focusedBuilding, setFocusedBuilding] = useState<BuildingKey>("");

  const [targetName, setTargetName] = useState<BuildingKey>(""); //-| Prevent other objs from interactable when focusing

  const [hoveredObj, setHoveredObj] = useState<
    Group<Object3DEventMap> | Object3D | null
  >(null); //-| Show outline

  const onClick = (event: any) => {
    if (!focusOn) {
      setFocusOn(true);
      setTargetObj(position);
      setOpen(true);
      setTargetName(focusedBuilding);
      setHoveredObj(null);
    } else if (focusOn && checkCurrentTargetName(focusedBuilding, targetName)) {
      setFocusOn(false);
      setOpen(false);
      setTargetName("");
    }

    //-| prevent the event from going futhere to object(s) behide the target object
    event.stopPropagation();
  };

  const onEnter = (e: ThreeEvent<PointerEvent>, group: Group) => {
    e.stopPropagation();
    if (!focusOn || checkCurrentTargetName(focusedBuilding, targetName)) {
      document.body.style.cursor = "pointer";
      setHover(true);
      if (!open) {
        setHoveredObj(group);
      }
    }
  };

  const onLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = "default";
    setHover(false);
    setHoveredObj(null);
  };

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

  useEffect(() => {
    console.log(meshes);
  }, [meshes]);

  const originalCameraPos = {
    number: [0, 0, 50],
    vector: new Vector3(0, 0, 50),
  };

  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 1000,
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
      <Perf position="bottom-right" />
      <Environment preset="city" />
      {/* <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} /> */}

      <Suspense fallback={<ThreeLoader />}>
        <OrbitControls />
        {/* <CameraControl
          focusOn={focusOn}
          originalCameraPos={originalCameraPos}
          targetObj={targetObj}
        /> */}

        <EffectComposer autoClear={false} multisampling={16}>
          <Outline
            selection={meshes}
            edgeStrength={300} // the edge strength
            pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
            visibleEdgeColor={0xffffff} // the color of visible edges
            hiddenEdgeColor={0x22090a} // the color of hidden edges
            blur={true} // whether the outline should be blurred
          />
          <SMAA />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>

        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="BBL_HQ_Obj" position={[-8.553, 8.301, -1.403]}>
              <group
                ref={BBLRef}
                name="BBL_HQ"
                position={[-1.341, -0.805, -0.823]}
              >
                <mesh
                  name="Cube005"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Cube005 as Mesh).geometry}
                  material={materials.Gray}
                />
                <mesh
                  name="Cube005_1"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Cube005_1 as Mesh).geometry}
                  material={materials.Water_Dark}
                />
                <mesh
                  name="Cube005_2"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Cube005_2 as Mesh).geometry}
                  material={materials.Metal}
                />
              </group>
              <group
                name="BBL_Hit_Box"
                onPointerEnter={(e) => {
                  onEnter(e, BBLRef.current!);
                }}
                onPointerLeave={(e) => onLeave(e)}
              >
                <mesh
                  name="HIT_A"
                  castShadow
                  receiveShadow
                  geometry={(nodes.HIT_A as Mesh).geometry}
                  position={[0, -6.75, -1.011]}
                  scale={[1.032, 1.032, 9.773]}
                >
                  <meshBasicMaterial
                    transparent
                    opacity={0}
                    depthWrite={false}
                  />
                </mesh>
                <mesh
                  name="HIT_B"
                  castShadow
                  receiveShadow
                  geometry={(nodes.HIT_B as Mesh).geometry}
                  position={[-1.888, -0.797, -0.881]}
                  scale={[0.48, 1.032, 6.138]}
                >
                  <meshBasicMaterial
                    transparent
                    opacity={0}
                    depthWrite={false}
                  />
                </mesh>
              </group>
            </group>
            <CityPart />
          </group>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default City;

useGLTF.preload("/Low-poly-city.glb");
