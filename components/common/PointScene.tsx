"use client";

import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PointScene() {
  const ref = useRef<THREE.Points>(null!);

  // Basic Points Buffer logic: 
  // Generate flat arrays for positions and colors
  const [positions, colors] = useMemo(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
      // Random position in a 10x10x10 cube
      pos[i] = (Math.random() - 0.5) * 10;
      // Random RGB color values
      col[i] = Math.random();
    }
    return [pos, col];
  }, []);

  // Animation loop for the rotation seen in the demo
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.set(t * 0.05, t * 0.03, 0);
  });

  return (
    <Points 
      ref={ref} 
      positions={positions} 
      colors={colors} 
      stride={3} // Indicates x,y,z grouping
    >
      <PointMaterial
        transparent
        vertexColors // Enables the individual point colors from the buffer
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Adds the "glow" effect
      />
    </Points>
  );
}