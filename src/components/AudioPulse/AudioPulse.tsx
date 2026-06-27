"use client";
import { useEffect, useRef } from "react";

export default function AudioPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.05;
      // Fade out previous frames to create a motion blur / glitch effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = canvas.width > 768 ? 250 : 150;
      
      // Simulate an erratic 808 trap pulse using sine waves and Math.random for glitching
      const glitch = Math.random() > 0.95 ? Math.random() * 20 : 0;
      const pulse = Math.sin(time) * 15 + Math.cos(time * 0.5) * 10 + glitch;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius + pulse, 0, Math.PI * 2);
      
      // Toxic green stroke
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(57, 255, 20, 0.08)";
      ctx.stroke();

      // Inner glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, (baseRadius + pulse) * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(57, 255, 20, 0.02)";
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[0]"
    />
  );
}