import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { useState } from "react";

export default function AdaptiveScene() {
  const [dpr, setDpr] = useState(1);

  return (
    <Canvas dpr={dpr}>
      <PerformanceMonitor
        onIncline={() => setDpr((prev) => Math.min(prev + 0.5, 2))}
        onDecline={() => setDpr((prev) => Math.max(prev - 0.5, 0.5))}
      />
      {/* Your scene content here */}
    </Canvas>
  );
}
