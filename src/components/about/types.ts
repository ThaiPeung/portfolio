import { Vector3 } from "three";

export type originalCameraPosType = {
  number: number[];
  vector: Vector3;
};

export type targetNameType =
  | ""
  | "Skills"
  | "Contact"
  | "Summary"
  | "Education"
  | "Experience"
  | "Language";
