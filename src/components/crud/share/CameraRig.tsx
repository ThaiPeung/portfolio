import { useThree, useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useMemo, useEffect } from "react"
import { Vector3 } from "three"

export function CameraRig() {

  const { camera } = useThree();

  const { camPos, lookAt, smooth } = useControls({
    space: {value: 1},
    camPos: { value: [0, 0, 20], step: 0.5, min: 0, max: 100 },
    lookAt: { value: [0, 0, 0], step: 0.1 },
    smooth: { value: 0.15, min: 0, max: 1, step: 0.01 },
  });

  const posTarget = useMemo(() => new Vector3(), []);
  const lookTarget = useMemo(() => new Vector3(), []);

  // Update projection only when lens params change
  useEffect(() => {
    camera.updateProjectionMatrix(); // required after camera property changes :contentReference[oaicite:3]{index=3}
  }, [camera]);

  // Smoothly move camera each frame (no heavy scene re-render required)
  useFrame(() => {
    const [x, y, z] = camPos;
    posTarget.set(x, y, z);
    camera.position.lerp(posTarget, smooth);

    const [lx, ly, lz] = lookAt;
    lookTarget.set(lx, ly, lz);
    camera.lookAt(lookTarget);
  });

  return null
}