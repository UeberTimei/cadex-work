import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BoxDimensions } from "../types";
import { Mesh } from "three";

interface BoxProps {
  dimensions: BoxDimensions;
}

export const Box: React.FC<BoxProps> = ({ dimensions }) => {
  const mesh = useRef<Mesh>(null);

  return (
    <mesh scale={0.01} rotation={[0.5, 1, 0]} ref={mesh}>
      <boxGeometry
        args={[dimensions.height, dimensions.width, dimensions.length]}
      />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};
