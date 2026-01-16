import { ThreeEvent } from "@react-three/fiber";
import { targetNameType } from "../types";
import { Group, Mesh, Object3D, Object3DEventMap, Vector3 } from "three";
import { Dispatch, RefObject, SetStateAction } from "react";

export const checkCurrentTargetName = (
  current: targetNameType,
  targetName: string
): boolean => {
  if (current === targetName) return true;
  else return false;
};

export const onClickHandler = (
  event: any,
  componentName: targetNameType,
  position: Vector3,
  targetName: string,
  focusOn: boolean,
  setFocusOn: Dispatch<SetStateAction<boolean>>,
  setTargetObj: Dispatch<SetStateAction<Vector3>>,
  setTargetName: Dispatch<SetStateAction<targetNameType>>,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setHoveredObj: Dispatch<
    SetStateAction<Group<Object3DEventMap> | Object3D | null>
  >
) => {
  if (!focusOn) {
    setFocusOn(true);
    setTargetObj(position);
    setOpen(true);
    setTargetName(componentName);
    setHoveredObj(null);
  } else if (focusOn && checkCurrentTargetName(componentName, targetName)) {
    setFocusOn(false);
    setOpen(false);
    setTargetName("");
  }

  //-| prevent the event from going futhere to object(s) behide the target object
  event.stopPropagation();
};

export const onEnterHandler = (
  e: ThreeEvent<PointerEvent>,
  componentName: targetNameType,
  open: boolean,
  targetName: string,
  focusOn: boolean,
  setHoveredObj: Dispatch<
    SetStateAction<Group<Object3DEventMap> | Object3D | null>
  >,
  setHover: Dispatch<SetStateAction<boolean>>,
  scene: Group<Object3DEventMap> | Object3D
) => {
  e.stopPropagation();
  if (!focusOn || checkCurrentTargetName(componentName, targetName)) {
    document.body.style.cursor = "pointer";
    setHover(true);
    if (!open) {
      setHoveredObj(scene);
    }
  }
};

export const onLeaveHandler = (
  e: ThreeEvent<PointerEvent>,
  setHoveredObj: Dispatch<
    SetStateAction<Group<Object3DEventMap> | Object3D | null>
  >,
  setHover: Dispatch<SetStateAction<boolean>>
) => {
  e.stopPropagation();
  document.body.style.cursor = "default";
  setHover(false);
  setHoveredObj(null);
};
