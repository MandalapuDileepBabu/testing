import "./Hero.css";
import { useEffect, useRef } from "react";
import avatar from "../assets/avatar.png";
import MatteBackground from "./MatteBackground";
import Nav from "./Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ data }) => {
  const canvasRef = useRef(null);

  const name = data?.name || "Your Name";
  const role = data?.role || "Software Engineer";
  const tagline = data?.bio || "Building ideas with code, creativity & consistency.";
  const accentColor = data?.accentColor || "#2a9d8f";
  const backgroundColor = data?.backgroundColor || "#05070d";

  // Hex to RGBA helper for the canvas blob
  const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r},${g},${b},${alpha})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2;
    };
    resizeCanvas();

    const lerp = (a, b, t) => a + (b - a) * t;

    const drawProfessionalBlob = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mainBlob = {
        x: canvas.width * 0.22 + Math.sin(time * 0.001) * 20,
        y: canvas.height * 0.15 + Math.cos(time * 0.0008) * 15,
        width: canvas.width * 0.65,
        height: canvas.height * 0.75,
        blur: 55,
      };

      const gradient = ctx.createRadialGradient(
        mainBlob.x,
        mainBlob.y,
        0,
        mainBlob.x,
        mainBlob.y,
        mainBlob.width * 0.8
      );

      gradient.addColorStop(0, hexToRgba(accentColor, 0.25));
      gradient.addColorStop(1, "transparent");

      ctx.save();
      ctx.filter = `blur(${mainBlob.blur}px)`;
      ctx.beginPath();

      const points = [
        { x: 0.72, y: 0.02 },
        { x: 1.12, y: 0.05 },
        { x: 1.28, y: 0.32 },
        { x: 0.95, y: 0.62 },
        { x: 0.68, y: 0.88 },
        { x: 0.18, y: 0.95 },
        { x: -0.08, y: 0.72 },
        { x: -0.22, y: 0.48 },
        { x: 0.02, y: 0.18 },
      ];

      ctx.moveTo(
        mainBlob.x + mainBlob.width * points[0].x,
        mainBlob.y + mainBlob.height * points[0].y
      );

      for (let i = 1; i < points.length; i++) {
        ctx.bezierCurveTo(
          mainBlob.x + mainBlob.width * lerp(points[i - 1].x, points[i].x, 0.5),
          mainBlob.y + mainBlob.height * lerp(points[i - 1].y, points[i].y, 0.5),
          mainBlob.x + mainBlob.width * lerp(points[i - 1].x, points[i].x, 0.7),
          mainBlob.y + mainBlob.height * lerp(points[i - 1].y, points[i].y, 0.7),
          mainBlob.x + mainBlob.width * points[i].x,
          mainBlob.y + mainBlob.height * points[i].y
        );
      }

      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    let start = Date.now();
    let animationFrameId;
    const animate = () => {
      drawProfessionalBlob(Date.now() - start);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <section id="home" className="hero" style={{ backgroundColor: backgroundColor }}>
      <canvas ref={canvasRef} className="professional-blob" />
      <MatteBackground backgroundColor={backgroundColor} />

      <Nav data={data} />

      <div className="hero-content">
        <div className="hero-left">
          <p className="role" style={{ color: accentColor }}>{name} ✨ 👋 </p>

          <h1>
            Welcome to my <br />
            <span className="portfolio-word" style={{ color: accentColor }}>Portfolio</span>
          </h1>

          <p className="tagline">
            {tagline}
          </p>

          <button
            className="btn-primary"
            style={{ backgroundColor: accentColor }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>

          <div className="hero-social-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            {data?.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontSize: '1.5rem', transition: 'opacity 0.2s' }} aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {data?.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontSize: '1.5rem', transition: 'opacity 0.2s' }} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>

        <div className="hero-center">
          <div className="avatar-wrap" style={{ borderColor: accentColor, background: `linear-gradient(135deg, ${hexToRgba(backgroundColor, 1)}, ${accentColor})` }}>
            <img src={avatar} alt={name} />
          </div>
        </div>

        <div className="hero-right">
          <h3 style={{ color: accentColor }}>KNOW ME MORE</h3>
          <p>
            {role}. Passionate about building meaningful digital experiences.
          </p>
          <button
            className="btn-outline"
            style={{ borderColor: accentColor, color: accentColor }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </button>
        </div>
      </div>

      <div className="hero-stats">
        {(data?.stats || [
          { label: 'Projects Built', value: '10+' },
          { label: 'Domains Explored', value: '3+' },
          { label: 'Years of Learning', value: '2+' }
        ]).slice(0, 3).map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${index === 1 ? 'highlight' : ''}`}
            style={index === 1 ? { backgroundColor: accentColor } : {
              borderTopColor: accentColor,
              background: `linear-gradient(135deg, ${hexToRgba(accentColor, 0.18)}, ${hexToRgba(backgroundColor, 0.9)})`,
              borderColor: hexToRgba(accentColor, 0.35)
            }}
          >
            <h2 style={{ color: index === 1 ? '#fff' : accentColor }}>{stat.value}</h2>
            <p style={{ color: index === 1 ? 'rgba(255,255,255,0.9)' : '' }}>{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
