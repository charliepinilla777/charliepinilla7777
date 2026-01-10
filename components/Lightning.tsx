'use client';

import React, { useEffect, useRef } from 'react';

interface LightningProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

const Lightning: React.FC<LightningProps> = ({
  hue = 220,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const drawLightning = (
      ctx: CanvasRenderingContext2D,
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      blur: number
    ) => {
      ctx.shadowBlur = blur;
      ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineWidth = 2 * size;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(fromX, fromY);

      let x = fromX;
      let y = fromY;

      while (Math.hypot(x - toX, y - toY) > 10) {
        const angle = Math.atan2(toY - y, toX - x);
        const randomOffset = (Math.random() - 0.5) * 100 * intensity;

        x += Math.cos(angle) * 20 + randomOffset;
        y += Math.sin(angle) * 20 + (Math.random() - 0.5) * 20 * intensity;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(toX, toY);
      ctx.stroke();
    };

    const animate = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.05 * speed;

      // Draw multiple lightning bolts
      if (Math.random() > 0.95) {
        const startX = canvas.width * 0.5 + xOffset;
        const startY = 0;
        const endX = Math.random() * canvas.width;
        const endY = canvas.height;

        // Main bolt
        drawLightning(ctx, startX, startY, endX, endY, 20 * intensity);

        // Secondary bolts
        if (Math.random() > 0.7) {
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          drawLightning(
            ctx,
            midX,
            midY,
            Math.random() * canvas.width,
            canvas.height,
            10 * intensity
          );
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [hue, xOffset, speed, intensity, size]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default Lightning;
