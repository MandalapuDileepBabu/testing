import React, { useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ShieldCheck, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ data, setActiveTab }) {
  const particlesCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = particlesCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    let nodes = [];
    const maxNodes = 40;
    
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse interactive radius
    let mouse = { x: null, y: null, radius: 180 };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class NetworkNode {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.vx = Math.random() * 0.3 - 0.15;
        this.vy = Math.random() * 0.3 - 0.15;
        this.color = Math.random() > 0.4 ? '#10b981' : '#3b82f6'; // green/blue nodes
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Push away slightly from mouse
        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        const sizeMod = this.size + Math.sin(this.pulse) * 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, sizeMod, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow for nodes
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 4;
      }
    }

    // Initialize nodes
    for (let i = 0; i < maxNodes; i++) {
      nodes.push(new NetworkNode());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; // Reset shadow blur

      // Draw grid links
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 120) {
            const alpha = (120 - dist) / 120 * 0.12;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            
            // Draw a packet flowing along the link
            if (Math.random() < 0.003) {
              ctx.fillStyle = '#10b981';
              ctx.beginPath();
              // Halfway point flow marker
              const fx = nodes[i].x + dx * 0.5;
              const fy = nodes[i].y + dy * 0.5;
              ctx.arc(fx, fy, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        n.update();
        n.draw();
      });
      ctx.shadowBlur = 0; // Reset

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleLinkClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={particlesCanvasRef} className="particles-canvas" />
      <div className="ambient-glow glow-top" />
      
      <div className="container hero-content">
        <div className="badge-wrapper">
          <span className="hero-badge" style={{ borderColor: 'var(--color-primary)' }}>
            <ShieldCheck size={14} className="badge-icon" />
            {data?.role || 'B.Tech CSE Student & Ethical Hacking Enthusiast'}
          </span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient">{data?.name || 'Your Name'}</span>
        </h1>
        
        <p className="hero-description">
          {data?.bio || "I'm a B.Tech Computer Science student. I build interactive web applications with React, study low-level architectures, and explore cybersecurity concepts."}
        </p>

        <div className="hero-actions">
          <a href="#console" className="btn-primary" onClick={(e) => handleLinkClick(e, '#console')}>
            Open Lab Console <TerminalIcon size={16} />
          </a>
          <a href="#projects" className="btn-secondary" onClick={(e) => handleLinkClick(e, '#projects')}>
            See My Projects <ArrowRight size={16} />
          </a>
          {data?.resumeLink && (
            <a href={data.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Download Resume
            </a>
          )}
        </div>

        {data?.stats && data.stats.length > 0 && (
          <div className="hero-stats-grid" style={{
            display: 'flex',
            gap: '20px',
            marginTop: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {data.stats.slice(0, 3).map((stat, idx) => (
              <div key={idx} className="hero-stat-card glass-panel" style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                minWidth: '130px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.02)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

