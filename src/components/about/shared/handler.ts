import { targetNameType } from "../types";

export const checkCurrentTargetName = (
  current: targetNameType,
  targetName: string
): boolean => {
  if (current === targetName) return true;
  else return false;
};
