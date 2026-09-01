"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

const CityPart = (props: ThreeElements["group"]) => {
  const { nodes, materials } = useGLTF("./models/Low-poly-city.glb");

  return (
    <>
      <group name="Bin" position={[4.743, 0.341, -8.928]} scale={0.038}>
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder004 as THREE.Mesh).geometry}
          material={materials["Wood.001"]}
        />
        <mesh
          name="Cylinder004_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder004_1 as THREE.Mesh).geometry}
          material={materials.Metal}
        />
      </group>
      <group
        name="Bin001"
        position={[4.527, 0.341, -6.406]}
        rotation={[Math.PI, -0.084, Math.PI]}
        scale={0.038}
      >
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder009 as THREE.Mesh).geometry}
          material={materials["Wood.001"]}
        />
        <mesh
          name="Cylinder009_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder009_1 as THREE.Mesh).geometry}
          material={materials.Metal}
        />
      </group>
      <group
        name="Bush"
        position={[5.817, 0.316, -6.578]}
        rotation={[0, -0.133, 0]}
        scale={[0.076, 0.075, 0.082]}
      >
        <mesh
          name="Icosphere020"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere020 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere020_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere020_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush001"
        position={[4.214, 0.316, -6.937]}
        rotation={[0, -0.677, 0]}
        scale={[0.076, 0.075, 0.082]}
      >
        <mesh
          name="Icosphere022"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere022 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere022_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere022_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush002"
        position={[6.413, 0.316, -7.563]}
        rotation={[0, -0.677, 0]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere027"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere027 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere027_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush003"
        position={[8.124, 0.316, -7.936]}
        rotation={[0, 1.317, 0]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere028"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere028 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere028_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere028_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush004"
        position={[7.863, 0.316, -8.299]}
        rotation={[0, -1.372, 0]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere029"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere029 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere029_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere029_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush005"
        position={[8.903, 0.316, -8.237]}
        rotation={[0, 1.317, 0]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere030"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere030 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere030_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere030_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush006"
        position={[8.519, 0.316, -8.614]}
        rotation={[0, 1.317, 0]}
        scale={[0.103, 0.101, 0.111]}
      >
        <mesh
          name="Icosphere031"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere031 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere031_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere031_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush007"
        position={[8.076, 0.316, -6.871]}
        rotation={[0, -0.677, 0]}
        scale={[0.045, 0.044, 0.049]}
      >
        <mesh
          name="Icosphere034"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere034 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere034_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush008"
        position={[8.35, 0.316, -7.46]}
        rotation={[0, -0.677, 0]}
        scale={[0.045, 0.044, 0.049]}
      >
        <mesh
          name="Icosphere035"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere035 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere035_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere035_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush009"
        position={[8.177, 0.316, -5.512]}
        rotation={[-Math.PI, 0.706, -Math.PI]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere038"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere038 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere038_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere038_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush010"
        position={[8.66, 0.316, -4.78]}
        rotation={[-Math.PI, 0.706, -Math.PI]}
        scale={[0.101, 0.099, 0.109]}
      >
        <mesh
          name="Icosphere041"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere041 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere041_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere041_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush011"
        position={[4.847, 0.316, -4.661]}
        rotation={[-Math.PI, 0.706, -Math.PI]}
        scale={[0.055, 0.054, 0.06]}
      >
        <mesh
          name="Icosphere048"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere048 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere048_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere048_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush012"
        position={[3.848, 0.316, -5.579]}
        rotation={[-Math.PI, 0.061, -Math.PI]}
        scale={[0.055, 0.054, 0.06]}
      >
        <mesh
          name="Icosphere052"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere052 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere052_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere052_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush013"
        position={[4.317, 0.316, -5.13]}
        rotation={[-Math.PI, 0.061, -Math.PI]}
        scale={[0.055, 0.054, 0.06]}
      >
        <mesh
          name="Icosphere053"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere053 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere053_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere053_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush014"
        position={[3.609, 0.316, -6.615]}
        rotation={[-Math.PI, 0.061, -Math.PI]}
        scale={[0.101, 0.099, 0.109]}
      >
        <mesh
          name="Icosphere054"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere054 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere054_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere054_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush015"
        position={[5.38, 0.316, -8.977]}
        rotation={[0, -0.677, 0]}
        scale={[0.085, 0.083, 0.091]}
      >
        <mesh
          name="Icosphere055"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere055 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere055_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere055_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush016"
        position={[4.619, 0.316, -10.529]}
        rotation={[Math.PI, -1.52, Math.PI]}
        scale={[0.114, 0.111, 0.123]}
      >
        <mesh
          name="Icosphere060"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere060 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere060_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere060_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Bush017"
        position={[2.181, 0.302, -11.495]}
        rotation={[Math.PI, -1.52, Math.PI]}
        scale={[0.114, 0.111, 0.123]}
      >
        <mesh
          name="Icosphere061"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere061 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere061_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere061_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group name="Cago_Ship" position={[5.576, 0.598, 1.954]}>
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cylinder002_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002_1 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cylinder002_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002_2 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
        <mesh
          name="Cylinder002_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002_3 as THREE.Mesh).geometry}
          material={materials["Wood Dark"]}
        />
        <mesh
          name="Cylinder002_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002_4 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder002_5"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder002_5 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
      </group>
      <group name="Car001" position={[-1.9, 0.366, 4.479]}>
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cube040_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_1 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_2 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_3 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_4 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_5"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_5 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_6 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_7 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group name="Car002" position={[-2.564, 0.366, -3.198]}>
        <mesh
          name="Cube040_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_8 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_9 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_10 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_11 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_12"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_12 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_13"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_13 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_14"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_14 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_15"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_15 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car003"
        position={[-4.29, 0.52, -7.222]}
        rotation={[-Math.PI / 2, -1.249, -Math.PI / 2]}
      >
        <mesh
          name="Cube040_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_16 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube040_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_17 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_19 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_20 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_21 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_22 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_23 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car004"
        position={[5.252, 0.366, -2.656]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube040_24"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_24 as THREE.Mesh).geometry}
          material={materials["Wood Light"]}
        />
        <mesh
          name="Cube040_25"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_25 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_26"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_26 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_27"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_27 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_28"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_28 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_29"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_29 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_30"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_30 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_31"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_31 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group name="Car005" position={[-2.521, 0.366, -8.248]}>
        <mesh
          name="Cube040_32"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_32 as THREE.Mesh).geometry}
          material={materials.Grass}
        />
        <mesh
          name="Cube040_33"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_33 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_34"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_34 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_35"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_35 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_36"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_36 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_37"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_37 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_38"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_38 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_39"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_39 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car006"
        position={[-1.004, 0.366, -6.846]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube040_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_16 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube040_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_17 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_19 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_20 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_21 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_22 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_23 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car007"
        position={[-0.249, 0.366, -9.421]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube040_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_16 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube040_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_17 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_19 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_20 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_21 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_22 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_23 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car008"
        position={[-1.011, 0.366, 1.641]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube040_40"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_40 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube040_41"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_41 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_42"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_42 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_43"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_43 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_44"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_44 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_45"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_45 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_46"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_46 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_47"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_47 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car009"
        position={[-0.253, 0.366, 6.691]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube040_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_16 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube040_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_17 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_19 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_20 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_21 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_22 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_23 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Car010"
        position={[1.778, 0.366, -2.647]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube040_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_16 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube040_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_17 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube040_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube040_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_19 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube040_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_20 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube040_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_21 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube040_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_22 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube040_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube040_23 as THREE.Mesh).geometry}
          material={materials["Silver Light"]}
        />
      </group>
      <group
        name="Chair"
        position={[4.443, 0.36, -6.616]}
        rotation={[-Math.PI, 1.215, -Math.PI]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={(nodes.Cube010 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube010_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube010_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair001"
        position={[4.809, 0.36, -8.712]}
        rotation={[0, -1.299, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={(nodes.Cube004 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube004_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube004_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair002"
        position={[4.617, 0.36, -9.122]}
        rotation={[0, -0.99, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={(nodes.Cube003 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube003_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair003"
        position={[5.46, 0.36, -6.869]}
        rotation={[0, -1.017, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={(nodes.Cube006 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube006_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube006_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair004"
        position={[4.669, 0.36, -6.223]}
        rotation={[-Math.PI, 0.907, -Math.PI]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={(nodes.Cube009 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube009_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube009_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair005"
        position={[7.805, 0.36, -6.222]}
        rotation={[0, -1.017, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={(nodes.Cube013 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube013_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube013_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair006"
        position={[7.465, 0.36, -6.298]}
        rotation={[0, 0.517, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={(nodes.Cube014 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube014_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube014_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair007"
        position={[7.733, 0.36, -5.891]}
        rotation={[Math.PI, -0.623, Math.PI]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={(nodes.Cube015 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube015_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube015_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair008"
        position={[5.458, 0.36, -8.48]}
        rotation={[0, 1.407, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={(nodes.Cube017 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube017_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube017_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair009"
        position={[5.664, 0.36, -8.2]}
        rotation={[-Math.PI, 0.201, -Math.PI]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={(nodes.Cube018 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube018_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube018_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair010"
        position={[4.058, 0.36, -7.608]}
        rotation={[0, -1.411, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={(nodes.Cube021 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube021_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube021_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair011"
        position={[3.782, 0.36, -7.81]}
        rotation={[0, 0.229, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={(nodes.Cube023 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube023_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair012"
        position={[3.874, 0.36, -7.332]}
        rotation={[Math.PI, -0.123, Math.PI]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair013"
        position={[5.202, 0.36, -1.211]}
        rotation={[0, -0.016, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair014"
        position={[4.749, 0.36, -1.199]}
        rotation={[0, 0.175, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        name="Chair015"
        position={[6.199, 0.36, -1.196]}
        rotation={[0, 0.175, 0]}
        scale={[0.097, 0.065, 0.065]}
      >
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022 as THREE.Mesh).geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          name="Cube022_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube022_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group name="Crane" position={[7.596, 1.63, 4.753]} scale={0.851}>
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder006 as THREE.Mesh).geometry}
          material={materials["Contruction Steel"]}
        />
        <mesh
          name="Cylinder006_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder006_1 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cylinder006_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder006_2 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
      </group>
      <group
        name="Crate001"
        position={[2.513, 0.393, -0.161]}
        rotation={[0, 0.672, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate002"
        position={[2.664, 0.631, -0.219]}
        rotation={[0, 0.672, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate003"
        position={[2.781, 0.393, -0.374]}
        rotation={[0, 1.282, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate004"
        position={[1.976, 0.393, -0.116]}
        rotation={[0, -0.429, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate005"
        position={[2.107, 0.393, -0.364]}
        rotation={[0, 0.624, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate006"
        position={[1.776, 0.393, -0.326]}
        rotation={[0, -0.828, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate007"
        position={[2.012, 0.631, -0.215]}
        rotation={[0, -0.018, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate008"
        position={[1.631, 0.393, -0.056]}
        rotation={[0, -0.828, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate009"
        position={[1.925, 0.393, 4.94]}
        rotation={[0, -0.828, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group
        name="Crate010"
        position={[2.044, 0.393, 4.66]}
        rotation={[0, -0.444, 0]}
        scale={0.119}
      >
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027 as THREE.Mesh).geometry}
          material={materials["Wooden Box Detailed"]}
        />
        <mesh
          name="Cube027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube027_1 as THREE.Mesh).geometry}
          material={materials["Wooden Box"]}
        />
      </group>
      <group name="Cube" position={[-2.047, 0.201, -2.181]} scale={1.584}>
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_1 as THREE.Mesh).geometry}
          material={materials.Material}
        />
        <mesh
          name="Cube_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_2 as THREE.Mesh).geometry}
          material={materials.Grass}
        />
        <mesh
          name="Cube_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_3 as THREE.Mesh).geometry}
          material={materials.Pathway}
        />
        <mesh
          name="Cube_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_4 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
        <mesh
          name="Cube_5"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_5 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_6 as THREE.Mesh).geometry}
          material={materials.Road_Yellow}
        />
        <mesh
          name="Cube_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_7 as THREE.Mesh).geometry}
          material={materials.Street_Gray}
        />
        <mesh
          name="Cube_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube_8 as THREE.Mesh).geometry}
          material={materials.Street_Dark_Shiny}
        />
      </group>
      <group name="Cube019" position={[3.335, 0.397, -4.665]} scale={1.548}>
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube030_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_1 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
        <mesh
          name="Cube030_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube030_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_3 as THREE.Mesh).geometry}
          material={materials.Tires}
        />
      </group>
      <group
        name="Cube020"
        position={[2.074, 0.406, -7.48]}
        rotation={[-Math.PI, 1.005, -Math.PI]}
        scale={1.548}
      >
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube030_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_1 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
        <mesh
          name="Cube030_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube030_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_3 as THREE.Mesh).geometry}
          material={materials.Tires}
        />
      </group>
      <group
        name="Deep_Tree"
        position={[5.92, 1.22, -10.959]}
        rotation={[0, 1.526, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree001"
        position={[5.466, 1.22, -10.586]}
        rotation={[0, 1.021, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree002"
        position={[5.344, 1.22, -11.11]}
        rotation={[Math.PI, -0.81, Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree003"
        position={[6.406, 1.243, -11.375]}
        rotation={[0, 0.449, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree004"
        position={[5.862, 1.243, -11.599]}
        rotation={[0, -0.056, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree005"
        position={[6.265, 1.243, -11.954]}
        rotation={[-Math.PI, 0.266, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree006"
        position={[5.294, 1.243, -11.7]}
        rotation={[0, 0.449, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree007"
        position={[4.75, 1.243, -11.924]}
        rotation={[0, -0.056, 0]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree008"
        position={[6.954, 1.243, -11.849]}
        rotation={[-Math.PI, 0.266, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree009"
        position={[7.481, 1.243, -11.438]}
        rotation={[Math.PI, -0.284, Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree010"
        position={[7.859, 1.243, -11.888]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree011"
        position={[7.481, 1.243, -11.438]}
        rotation={[Math.PI, -0.284, Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder017"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder017 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder017_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder017_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree012"
        position={[8.073, 1.243, -8.593]}
        rotation={[-Math.PI, 0.266, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree013"
        position={[8.601, 1.243, -8.182]}
        rotation={[Math.PI, -0.284, Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree014"
        position={[8.978, 1.243, -8.632]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree015"
        position={[8.773, 1.243, -11.937]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree016"
        position={[9.031, 1.243, -11.336]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree017"
        position={[8.785, 1.243, -9.188]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Deep_Tree018"
        position={[9.073, 1.243, -7.872]}
        rotation={[Math.PI, -0.284, Math.PI]}
        scale={[0.129, 0.25, 0.129]}
      >
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cylinder023_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder023_1 as THREE.Mesh).geometry}
          material={materials["Wood.003"]}
        />
      </group>
      <group
        name="Foutain"
        position={[2.447, 0.398, -5.722]}
        scale={[0.615, 0.123, 0.615]}
      >
        <mesh
          name="Cylinder036"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder036 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cylinder036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder036_1 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cylinder036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder036_2 as THREE.Mesh).geometry}
          material={materials["Material.011"]}
        />
      </group>
      <group name="Light_Pole" position={[6.468, 0.294, -5.712]} scale={0.018}>
        <mesh
          name="Cylinder024"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder024 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder024_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder024_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole001"
        position={[7.693, 0.294, -4.842]}
        scale={0.018}
      >
        <mesh
          name="Cylinder025"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder025 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder025_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder025_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole002"
        position={[5.542, 0.294, -6.695]}
        scale={0.018}
      >
        <mesh
          name="Cylinder026"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder026 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder026_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder026_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole003"
        position={[4.108, 0.294, -7.407]}
        scale={0.018}
      >
        <mesh
          name="Cylinder027"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder027 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder027_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder027_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole004"
        position={[3.866, 0.294, -8.682]}
        scale={0.018}
      >
        <mesh
          name="Cylinder028"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder028 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder028_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder028_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole005"
        position={[3.997, 0.294, -10.033]}
        scale={0.018}
      >
        <mesh
          name="Cylinder029"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder029 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder029_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder029_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole006"
        position={[2.554, 0.294, -9.672]}
        scale={0.018}
      >
        <mesh
          name="Cylinder030"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder030 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder030_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder030_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole007"
        position={[2.087, 0.294, -11.169]}
        scale={0.018}
      >
        <mesh
          name="Cylinder031"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder031 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder031_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder031_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole008"
        position={[2.087, 0.294, -11.169]}
        scale={0.018}
      >
        <mesh
          name="Cylinder032"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder032 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder032_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder032_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole009"
        position={[5.312, 0.294, -5.584]}
        scale={0.018}
      >
        <mesh
          name="Cylinder033"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder033 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder033_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder033_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole010"
        position={[6.51, 0.294, -8.165]}
        scale={0.018}
      >
        <mesh
          name="Cylinder034"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole011"
        position={[6.51, 0.294, -8.165]}
        scale={0.018}
      >
        <mesh
          name="Cylinder035"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder035 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder035_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder035_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole012"
        position={[3.052, 0.293, 4.786]}
        scale={0.018}
      >
        <mesh
          name="Cylinder034"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole013"
        position={[4.999, 0.293, 4.786]}
        scale={0.018}
      >
        <mesh
          name="Cylinder034"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Light_Pole014"
        position={[6.956, 0.293, 4.786]}
        scale={0.018}
      >
        <mesh
          name="Cylinder034"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cylinder034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder034_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Pickup_Truck001"
        position={[-4.196, 0.528, 2.78]}
        rotation={[Math.PI / 2, 1.249, -Math.PI / 2]}
      >
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
        <mesh
          name="Cube001_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_1 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube001_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_2 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube001_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_3 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_4 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube001_5"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_5 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube001_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_6 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube001_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_7 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube001_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_8 as THREE.Mesh).geometry}
          material={materials.Silver}
        />
      </group>
      <group name="Pickup_Truck002" position={[-1.839, 0.391, -11.367]}>
        <mesh
          name="Cube001_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_9 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
        <mesh
          name="Cube001_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_10 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube001_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_11 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube001_12"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_12 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_13"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_13 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube001_14"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_14 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube001_15"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_15 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube001_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_16 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube001_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_17 as THREE.Mesh).geometry}
          material={materials.Silver}
        />
      </group>
      <group
        name="Pickup_Truck003"
        position={[-0.226, 0.391, -3.968]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube001_18"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_18 as THREE.Mesh).geometry}
          material={materials["Metal Yellow"]}
        />
        <mesh
          name="Cube001_19"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_19 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube001_20"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_20 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube001_21"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_21 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_22"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_22 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube001_23"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_23 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube001_24"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_24 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube001_25"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_25 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube001_26"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_26 as THREE.Mesh).geometry}
          material={materials.Silver}
        />
      </group>
      <group
        name="Pickup_Truck004"
        position={[-0.964, 0.391, -11.521]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube001_27"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_27 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          name="Cube001_28"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_28 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube001_29"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_29 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube001_30"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_30 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_31"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_31 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube001_32"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_32 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube001_33"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_33 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube001_34"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_34 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube001_35"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_35 as THREE.Mesh).geometry}
          material={materials.Silver}
        />
      </group>
      <group
        name="Pickup_Truck005"
        position={[8.101, 0.391, -1.726]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Cube001_36"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_36 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_37"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_37 as THREE.Mesh).geometry}
          material={materials.Water}
        />
        <mesh
          name="Cube001_38"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_38 as THREE.Mesh).geometry}
          material={materials["Metal Red"]}
        />
        <mesh
          name="Cube001_39"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_39 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube001_40"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_40 as THREE.Mesh).geometry}
          material={materials["Gray Dark"]}
        />
        <mesh
          name="Cube001_41"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_41 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube001_42"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_42 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube001_43"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_43 as THREE.Mesh).geometry}
          material={materials.Road}
        />
        <mesh
          name="Cube001_44"
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_44 as THREE.Mesh).geometry}
          material={materials.Silver}
        />
      </group>
      <mesh
        name="Picnic_Table"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[2.415, 0.384, -7.19]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table001"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table001 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[6.564, 0.384, -7.033]}
        rotation={[0, -0.711, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table002"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table002 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[3.695, 0.374, -4.97]}
        rotation={[0, 0.753, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table003"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table003 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[2.607, 0.384, -8.564]}
        rotation={[0, 0.396, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table004"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table004 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[2.238, 0.364, -0.692]}
        rotation={[0, 0.753, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table005"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table005 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[3.619, 0.364, -0.98]}
        rotation={[0, -0.152, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table006"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table006 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[2.635, 0.364, 4.803]}
        rotation={[Math.PI, -1.253, Math.PI]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table007"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table007 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[6.393, 0.364, 4.783]}
        rotation={[0, -0.495, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table008"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table008 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[4.527, 0.364, 4.73]}
        rotation={[0, 0.753, 0]}
        scale={[0.191, 0.147, 0.028]}
      />
      <mesh
        name="Picnic_Table009"
        castShadow
        receiveShadow
        geometry={(nodes.Picnic_Table009 as THREE.Mesh).geometry}
        material={materials["Wood Dark"]}
        position={[2.415, 0.384, -7.19]}
        scale={[0.191, 0.147, 0.028]}
      />
      <group name="Platform" position={[4.406, -0.029, 2.766]} scale={1.584}>
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={(nodes.Cube012 as THREE.Mesh).geometry}
          material={materials.Street_Gray}
        />
        <mesh
          name="Cube012_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube012_1 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
      </group>
      <mesh
        name="rock001"
        castShadow
        receiveShadow
        geometry={(nodes.rock001 as THREE.Mesh).geometry}
        material={materials.Street_Gray}
        position={[7.126, 0.234, -11.094]}
        scale={0.602}
      />
      <mesh
        name="rock002"
        castShadow
        receiveShadow
        geometry={(nodes.rock002 as THREE.Mesh).geometry}
        material={materials["Material"]}
        position={[7.81, 0.343, -9.105]}
        scale={0.602}
      />
      <mesh
        name="Rock003"
        castShadow
        receiveShadow
        geometry={(nodes.Rock003 as THREE.Mesh).geometry}
        material={materials["Material.026"]}
        position={[7.989, 0.23, -9.214]}
        scale={0.171}
      />
      <mesh
        name="rock003"
        castShadow
        receiveShadow
        geometry={(nodes.rock003 as THREE.Mesh).geometry}
        material={materials["Gray Dark"]}
        position={[7.078, 0.144, -10.806]}
        scale={0.602}
      />
      <mesh
        name="rock004"
        castShadow
        receiveShadow
        geometry={(nodes.rock004 as THREE.Mesh).geometry}
        material={materials["Material.022"]}
        position={[8.412, 0.343, -10.876]}
        scale={0.602}
      />
      <mesh
        name="rock005"
        castShadow
        receiveShadow
        geometry={(nodes.rock005 as THREE.Mesh).geometry}
        material={materials["Material.024"]}
        position={[7.81, 0.343, -9.105]}
        scale={0.602}
      />
      <mesh
        name="rock006"
        castShadow
        receiveShadow
        geometry={(nodes.rock006 as THREE.Mesh).geometry}
        material={materials["Material.015"]}
        position={[5.863, 0.343, -10.201]}
        scale={0.602}
      />
      <mesh
        name="rock007"
        castShadow
        receiveShadow
        geometry={(nodes.rock007 as THREE.Mesh).geometry}
        material={materials["Material"]}
        position={[7.354, 0.268, -10.126]}
        scale={0.388}
      />
      <mesh
        name="rock008"
        castShadow
        receiveShadow
        geometry={(nodes.rock008 as THREE.Mesh).geometry}
        material={materials["Material.023"]}
        position={[7.28, 0.307, -8.867]}
        scale={0.354}
      />
      <mesh
        name="rock009"
        castShadow
        receiveShadow
        geometry={(nodes.rock009 as THREE.Mesh).geometry}
        material={materials["Material.017"]}
        position={[6.945, 0.272, -10.968]}
        scale={0.602}
      />
      <mesh
        name="rock010"
        castShadow
        receiveShadow
        geometry={(nodes.rock010 as THREE.Mesh).geometry}
        material={materials.Gray}
        position={[8.436, 0.343, -11.706]}
        scale={0.602}
      />
      <mesh
        name="rock011"
        castShadow
        receiveShadow
        geometry={(nodes.rock011 as THREE.Mesh).geometry}
        material={materials["Material.021"]}
        position={[8.148, 0.343, -10.857]}
        scale={0.602}
      />
      <mesh
        name="rock012"
        castShadow
        receiveShadow
        geometry={(nodes.rock012 as THREE.Mesh).geometry}
        material={materials.Silver}
        position={[6.664, 0.241, -10.961]}
        scale={0.602}
      />
      <mesh
        name="rock013"
        castShadow
        receiveShadow
        geometry={(nodes.rock013 as THREE.Mesh).geometry}
        material={materials["Material.025"]}
        position={[8.107, 0.343, -9.156]}
        scale={0.602}
      />
      <mesh
        name="rock014"
        castShadow
        receiveShadow
        geometry={(nodes.rock014 as THREE.Mesh).geometry}
        material={materials["Material.020"]}
        position={[7.949, 0.265, -10.805]}
        scale={0.602}
      />
      <mesh
        name="rock015"
        castShadow
        receiveShadow
        geometry={(nodes.rock015 as THREE.Mesh).geometry}
        material={materials["Material.023"]}
        position={[8.854, 0.343, -9.868]}
        scale={0.602}
      />
      <mesh
        name="rock016"
        castShadow
        receiveShadow
        geometry={(nodes.rock016 as THREE.Mesh).geometry}
        material={materials["Material.015"]}
        position={[5.049, 0.296, -9.958]}
        scale={0.249}
      />
      <mesh
        name="rock017"
        castShadow
        receiveShadow
        geometry={(nodes.rock017 as THREE.Mesh).geometry}
        material={materials["Material.015"]}
        position={[7.058, 0.296, -7.971]}
        rotation={[0, -0.59, 0]}
        scale={0.249}
      />
      <mesh
        name="rock018"
        castShadow
        receiveShadow
        geometry={(nodes.rock018 as THREE.Mesh).geometry}
        material={materials["Material"]}
        position={[5.73, 0.268, -7.985]}
        scale={0.196}
      />
      <mesh
        name="rock019"
        castShadow
        receiveShadow
        geometry={(nodes.rock019 as THREE.Mesh).geometry}
        material={materials["Material.023"]}
        position={[8.451, 0.343, -5.979]}
        scale={0.325}
      />
      <mesh
        name="rock020"
        castShadow
        receiveShadow
        geometry={(nodes.rock020 as THREE.Mesh).geometry}
        material={materials["Material.023"]}
        position={[7.076, 0.343, -6.642]}
        rotation={[0, 1.248, 0]}
        scale={0.325}
      />
      <mesh
        name="rock021"
        castShadow
        receiveShadow
        geometry={(nodes.rock021 as THREE.Mesh).geometry}
        material={materials["Material"]}
        position={[4.259, 0.268, -10.946]}
        rotation={[0, 0.43, 0]}
        scale={0.222}
      />
      <mesh
        name="rock022"
        castShadow
        receiveShadow
        geometry={(nodes.rock022 as THREE.Mesh).geometry}
        material={materials["Material.015"]}
        position={[3.846, 0.296, -11.971]}
        rotation={[-Math.PI, 1.3, -Math.PI]}
        scale={0.249}
      />
      <mesh
        name="rock023"
        castShadow
        receiveShadow
        geometry={(nodes.rock023 as THREE.Mesh).geometry}
        material={materials["Material.017"]}
        position={[2.841, 0.272, -11.759]}
        scale={0.231}
      />
      <group name="Storage" position={[6.007, 0.783, -0.28]}>
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={(nodes.Cube026 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube026_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube026_1 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
      </group>
      <group name="Storage001" position={[4.085, 0.783, -0.28]}>
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={(nodes.Cube026 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube026_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube026_1 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
      </group>
      <group
        name="Street_Bush001"
        position={[-3.96, 0.751, 7.727]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={(nodes.Cube032 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube032_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube032_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube032_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube032_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
      </group>
      <group
        name="Street_Bush002"
        position={[-3.964, 0.751, 0.478]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube035_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube035_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
      </group>
      <group
        name="Street_Bush003"
        position={[-3.964, 0.751, -1.508]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube035_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube035_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
      </group>
      <group
        name="Street_Bush004"
        position={[-3.964, 0.751, -2.84]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube035_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube035_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube035_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
      </group>
      <group
        name="Street_Bush005"
        position={[-3.96, 0.751, -7.971]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={(nodes.Cube038 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube038_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube038_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube038_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube038_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
      </group>
      <group
        name="Street_Bush_flower001"
        position={[-3.955, 0.752, 7.035]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower002"
        position={[-3.955, 0.752, 6.352]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower003"
        position={[-3.952, 0.752, 4.983]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower004"
        position={[-3.959, 0.752, -0.516]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower005"
        position={[-3.959, 0.752, -0.849]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower006"
        position={[-3.959, 0.752, -1.181]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube034_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube034_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube034_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube034_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube034_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower007"
        position={[-3.959, 0.713, -2.507]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube036_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube036_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower008"
        position={[-3.959, 0.713, -3.841]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube036_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube036_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower009"
        position={[-3.959, 0.713, -4.178]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube036_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube036_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower010"
        position={[-3.959, 0.713, -4.511]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube036_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube036_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower011"
        position={[-3.959, 0.713, -4.845]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube036_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube036_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube036_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube036_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube036_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower012"
        position={[-3.955, 0.752, -8.662]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube037_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube037_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube037_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube037_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower013"
        position={[-3.955, 0.752, -9.346]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube037_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube037_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube037_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube037_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Bush_flower014"
        position={[-3.952, 0.752, -10.715]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037 as THREE.Mesh).geometry}
          material={materials.Gray}
        />
        <mesh
          name="Cube037_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube037_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube037_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_3 as THREE.Mesh).geometry}
          material={materials.Flower_Pink}
        />
        <mesh
          name="Cube037_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube037_4 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
      </group>
      <group
        name="Street_Food_Cart001"
        position={[-3.253, 0.393, 6.72]}
        scale={1.625}
      >
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
        <mesh
          name="Cube030_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_1 as THREE.Mesh).geometry}
          material={materials.Lake}
        />
        <mesh
          name="Cube030_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_2 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube030_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube030_3 as THREE.Mesh).geometry}
          material={materials.Tires}
        />
      </group>
      <group
        name="Street_lamp_post001"
        position={[0.17, 0.675, 1.674]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post002"
        position={[0.17, 0.675, 3.223]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post003"
        position={[0.17, 0.675, 0.148]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post004"
        position={[0.17, 0.675, 4.773]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post005"
        position={[0.17, 0.675, 6.322]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post007"
        position={[0.684, 0.603, -1.324]}
        rotation={[0, -1.571, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post008"
        position={[0.684, 0.603, -1.324]}
        rotation={[0, -1.571, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post009"
        position={[2.513, 0.603, -1.324]}
        rotation={[0, -1.571, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post010"
        position={[4.343, 0.603, -1.324]}
        rotation={[0, -1.571, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post011"
        position={[6.174, 0.603, -1.324]}
        rotation={[0, -1.571, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post012"
        position={[0.684, 0.603, -3.057]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post013"
        position={[2.513, 0.603, -3.057]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post014"
        position={[4.343, 0.603, -3.057]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post015"
        position={[6.174, 0.603, -3.057]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post016"
        position={[-3.115, 0.675, 0.159]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post017"
        position={[-3.115, 0.675, -2.973]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post018"
        position={[-3.115, 0.675, 1.474]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post019"
        position={[-3.115, 0.675, 4.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post020"
        position={[-3.115, 0.675, 6.322]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post021"
        position={[-3.115, 0.675, -10.671]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post022"
        position={[-3.115, 0.675, -9.122]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post023"
        position={[-3.115, 0.675, -7.663]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post024"
        position={[-3.115, 0.675, -6.023]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post025"
        position={[-3.115, 0.675, -4.474]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post026"
        position={[0.17, 0.675, -10.671]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post027"
        position={[0.17, 0.675, -9.122]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post028"
        position={[0.17, 0.675, -7.573]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post029"
        position={[0.17, 0.675, -6.023]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post030"
        position={[0.17, 0.675, -4.474]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post031"
        position={[-3.115, 0.675, -1.424]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Street_lamp_post032"
        position={[-3.115, 0.675, 3.423]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.022}
      >
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
      </group>
      <group
        name="Table"
        position={[7.608, 0.384, -6.097]}
        rotation={[0, 0.551, 0]}
        scale={0.131}
      >
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={(nodes.Cube016 as THREE.Mesh).geometry}
          material={materials["Wood.005"]}
        />
        <mesh
          name="Cube016_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube016_1 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
      </group>
      <group
        name="Table001"
        position={[5.689, 0.384, -8.445]}
        rotation={[-Math.PI, 0.166, -Math.PI]}
        scale={0.131}
      >
        <mesh
          name="Cube020_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube020_1 as THREE.Mesh).geometry}
          material={materials["Wood.005"]}
        />
        <mesh
          name="Cube020_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube020_2 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
      </group>
      <group
        name="Table002"
        position={[3.82, 0.384, -7.573]}
        rotation={[Math.PI, -0.157, Math.PI]}
        scale={0.131}
      >
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={(nodes.Cube024 as THREE.Mesh).geometry}
          material={materials["Wood.005"]}
        />
        <mesh
          name="Cube024_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube024_1 as THREE.Mesh).geometry}
          material={materials["Metal Dark"]}
        />
      </group>
      <group
        name="Tree"
        position={[1.724, 0.846, -9.812]}
        rotation={[-Math.PI, 1.444, -Math.PI]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree1"
        position={[8.45, 0.846, -4.466]}
        rotation={[0, 0.669, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree_1"
        position={[4.222, 0.278, -6.418]}
        rotation={[0, -0.672, 0]}
        scale={0.215}
      >
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube002_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube002_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_2 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree_1001"
        position={[5.059, 0.298, -5.617]}
        rotation={[0, 0.611, 0]}
        scale={0.215}
      >
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube007_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube007_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007_2 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree_1002"
        position={[2.545, 0.298, -11.17]}
        rotation={[0, -0.45, 0]}
        scale={0.215}
      >
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={(nodes.Cube025 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube025_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube025_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube025_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube025_2 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree_1003"
        position={[4.517, 0.278, -9.547]}
        rotation={[-Math.PI, 1.424, -Math.PI]}
        scale={0.215}
      >
        <mesh
          name="Cube019_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube019_1 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube019_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube019_2 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube019_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube019_3 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree_1004"
        position={[4.256, 0.298, -4.639]}
        rotation={[0, 1.19, 0]}
        scale={0.215}
      >
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube007_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube007_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube007_2 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree_1005"
        position={[2.159, 0.278, -8.637]}
        rotation={[-Math.PI, 1.444, -Math.PI]}
        scale={0.215}
      >
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002 as THREE.Mesh).geometry}
          material={materials.Wood}
        />
        <mesh
          name="Cube002_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_1 as THREE.Mesh).geometry}
          material={materials.Green_Light}
        />
        <mesh
          name="Cube002_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_2 as THREE.Mesh).geometry}
          material={materials.Green2}
        />
      </group>
      <group
        name="Tree001"
        position={[4.284, 0.846, -10.022]}
        rotation={[0, -0.754, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree002"
        position={[3.936, 0.847, -10.337]}
        rotation={[0, -0.876, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree003"
        position={[2.496, 0.313, -9.155]}
        rotation={[0, -0.665, 0]}
        scale={[0.074, 0.042, 0.042]}
      >
        <mesh
          name="Icosphere064"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere064 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere064_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere064_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Tree004"
        position={[3.082, 0.846, -10.88]}
        rotation={[0, 0.234, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree005"
        position={[3.018, 0.846, -9.194]}
        rotation={[0, -0.685, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree006"
        position={[5.155, 0.316, -7.583]}
        rotation={[0, -0.677, 0]}
        scale={[0.076, 0.075, 0.082]}
      >
        <mesh
          name="Icosphere065"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere065 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Icosphere065_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere065_1 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        name="Tree007"
        position={[3.691, 0.847, -8.439]}
        rotation={[0, -1.105, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree008"
        position={[6.235, 0.846, -6.201]}
        rotation={[0, -1.236, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree009"
        position={[8.843, 0.846, -4.133]}
        rotation={[0, 0.669, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree010"
        position={[7.031, 0.846, -5.52]}
        rotation={[-Math.PI, 0.095, -Math.PI]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group name="Tree011" position={[6.081, 0.846, -4.793]} scale={0.207}>
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree012"
        position={[6.466, 0.846, -4.476]}
        rotation={[0, -0.75, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree013"
        position={[6.904, 0.846, -4.153]}
        rotation={[0, -1.393, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree014"
        position={[7.435, 0.846, -5.215]}
        rotation={[0, 0.669, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group
        name="Tree015"
        position={[5.337, 0.846, -7.243]}
        rotation={[0, -1.102, 0]}
        scale={0.207}
      >
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group name="Tree016" position={[4.953, 0.846, -8.402]} scale={0.207}>
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Icosphere_1"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
          material={materials["Wood.004"]}
        />
        <mesh
          name="Icosphere_2"
          castShadow
          receiveShadow
          geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
          material={materials.LeafDark}
        />
      </group>
      <group name="Van001" position={[-2.586, 0.401, 7.157]}>
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039 as THREE.Mesh).geometry}
          material={materials.Green}
        />
        <mesh
          name="Cube039_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_1 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_2 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_3"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_3 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_4"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_4 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_5"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_5 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group name="Van002" position={[-1.848, 0.401, 0.556]}>
        <mesh
          name="Cube039_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_6 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Cube039_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_7 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_8 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_9 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_10 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_11 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group
        name="Van003"
        position={[-0.232, 0.401, -0.742]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Cube039_12"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_12 as THREE.Mesh).geometry}
          material={materials.Pathway}
        />
        <mesh
          name="Cube039_13"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_13 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_14"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_14 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_15"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_15 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_16"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_16 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_17"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_17 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group name="Van004" position={[-2.453, 0.401, -9.66]}>
        <mesh
          name="Cube039_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_6 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Cube039_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_7 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_8 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_9 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_10 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_11 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group name="Van005" position={[-5.901, 0.717, 5.642]}>
        <mesh
          name="Cube039_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_6 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Cube039_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_7 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_8 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_9 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_10 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_11 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group name="Van006" position={[-5.901, 0.717, -9.36]}>
        <mesh
          name="Cube039_6"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_6 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Cube039_7"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_7 as THREE.Mesh).geometry}
          material={materials.Water_Dark}
        />
        <mesh
          name="Cube039_8"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_8 as THREE.Mesh).geometry}
          material={materials["Yellow Gold"]}
        />
        <mesh
          name="Cube039_9"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_9 as THREE.Mesh).geometry}
          material={materials.Flower_Red}
        />
        <mesh
          name="Cube039_10"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_10 as THREE.Mesh).geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube039_11"
          castShadow
          receiveShadow
          geometry={(nodes.Cube039_11 as THREE.Mesh).geometry}
          material={materials["Metal light"]}
        />
      </group>
      <group
        name="Wooden_Dock"
        position={[6.674, 0.275, -9.268]}
        rotation={[-Math.PI, -0.997, 0]}
        scale={[-0.021, -0.023, -0.021]}
      >
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder008 as THREE.Mesh).geometry}
          material={materials["Wood Dark"]}
        />
        <mesh
          name="Cylinder008_1"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder008_1 as THREE.Mesh).geometry}
          material={materials["Material.006"]}
        />
        <mesh
          name="Cylinder008_2"
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder008_2 as THREE.Mesh).geometry}
          material={materials["Wood Light"]}
        />
      </group>
    </>
  );
};

export default CityPart;
