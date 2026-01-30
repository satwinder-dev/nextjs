"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

// Dynamically import the 3D component
const PointScene = dynamic(() => import("@/components/common/PointScene"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative h-screen w-full bg-slate-950">
      {/* 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <PointScene />
        </Canvas>
      </div>

      {/* UI Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <h1 className="text-white text-6xl font-bold tracking-tighter">
          DREI POINTS
        </h1>
        <p className="text-slate-400 mt-4">High-performance buffer rendering</p>
      </div>
    </main>
  );
}