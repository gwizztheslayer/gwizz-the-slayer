"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Visualizer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    // Dark fog to blend into the background
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // The Grid (Cyber/Horror Aesthetic)
    const geometry = new THREE.PlaneGeometry(200, 200, 40, 40);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x39ff14, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.15 
    });
    
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -10;
    scene.add(plane);

    camera.position.z = 30;
    camera.position.y = 5;

    // Animation Loop
    let animationFrameId: number;
    
    // In a full production build, we would map the vertices of this plane 
    // to the AudioContext Analyser frequency data. For now, we simulate the breathing.
    let time = 0;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Simulate a heartbeat / bass pulse
      const pulse = Math.sin(time * 2) * 0.5 + 1;
      
      // Distort the grid vertices to simulate 808 hits
      const positions = plane.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 2 * pulse;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;

      // Slowly move the grid forward
      plane.position.z = (time * 10) % 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none opacity-60 mix-blend-screen" />;
}