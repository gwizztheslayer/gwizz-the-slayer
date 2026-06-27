"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useAudioStore } from "@/store/audioStore";

function Artifact() {
  const meshRef = useRef<THREE.Mesh>(null);
  const audioData = useAudioStore((state) => state.audioData);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Audio reactive scaling (Alien Sci-Fi pulsing effect)
      // audioData is typically between 0 and 255. We normalize it.
      const scale = 1.5 + (audioData / 255) * 0.8;
      
      // Smooth interpolation for the scale to avoid jitter
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial color="#39ff14" wireframe={true} transparent={true} opacity={0.6} />
    </mesh>
  );
}

export default function AlienBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Artifact />
      </Canvas>
    </div>
  );
}