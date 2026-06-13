import React, { useEffect, useRef } from 'react';

export default function HoneycombBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    let hexagons = [];
    const hexSide = 38; // Size of hexagon
    const hexWidth = hexSide * Math.sqrt(3);
    const rowHeight = hexSide * 1.5;

    let mouse = { x: null, y: null, radius: 140 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHexGrid();
    };

    const initHexGrid = () => {
      hexagons = [];
      const cols = Math.ceil(canvas.width / hexWidth) + 1;
      const rows = Math.ceil(canvas.height / rowHeight) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * hexWidth + (r % 2 === 0 ? 0 : hexWidth / 2);
          const cy = r * rowHeight;
          hexagons.push({
            cx,
            cy,
            glow: 0,
            ambientPhase: Math.random() * Math.PI * 2,
            ambientSpeed: 0.005 + Math.random() * 0.008
          });
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    resizeCanvas();

    const drawHex = (cx, cy, side, glowVal, ambient) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + Math.PI / 6;
        const x = cx + side * Math.cos(angle);
        const y = cy + side * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Combine ambient pulse and mouse glow
      const baseAlpha = 0.06 + ambient * 0.03;
      const glowAlpha = glowVal * 0.25;
      const totalAlpha = Math.min(0.35, baseAlpha + glowAlpha);

      // Render stroke
      ctx.strokeStyle = `rgba(16, 185, 129, ${totalAlpha})`;
      ctx.lineWidth = glowVal > 0.1 ? 1.4 : 0.9;
      ctx.stroke();

      if (glowVal > 0.05) {
        ctx.fillStyle = `rgba(16, 185, 129, ${glowVal * 0.05})`;
        ctx.fill();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hexagons.forEach(hex => {
        // Update ambient pulse
        hex.ambientPhase += hex.ambientSpeed;
        const ambient = Math.sin(hex.ambientPhase);

        // Update glow based on mouse proximity
        if (mouse.x !== null && mouse.y !== null) {
          const dist = Math.hypot(hex.cx - mouse.x, hex.cy - mouse.y);
          if (dist < mouse.radius) {
            const intensity = (mouse.radius - dist) / mouse.radius;
            // Target glow is mapped to proximity
            hex.glow += (intensity - hex.glow) * 0.1;
          } else {
            hex.glow *= 0.94; // Decay
          }
        } else {
          hex.glow *= 0.94; // Decay
        }

        // Draw hexagon
        drawHex(hex.cx, hex.cy, hexSide, hex.glow, ambient);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: 'var(--bg-primary)'
      }}
    />
  );
}
