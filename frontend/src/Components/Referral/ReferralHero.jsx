import { useState, useEffect, useRef, useCallback } from "react";

/* ── Interactive Particle Canvas (mouse-reactive liquid effect) ── */
const ParticleCanvas = ({ mouseRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* — Blobs: large, slow, very transparent glowing orbs — */
    const blobs = Array.from({ length: 32 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 110 + 40,
      alpha: Math.random() * 0.16 + 0.05,
      hue: [260, 265, 270, 280, 290][Math.floor(Math.random() * 5)],
    }));

    /* — Dots: small, snappier, linked by faint lines — */
    const dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.5 + 0.8,
      alpha: Math.random() * 0.6 + 0.25,
    }));

    /* — Sparkles: tiny bright flickers — */
    const sparkles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.8 + 0.3,
      twinkle: Math.random() * Math.PI * 2, // phase offset for flicker
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouseInside = mx >= 0;

      /* — Cursor glow — */
      if (hasMouseInside) {
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 160);
        cg.addColorStop(0, "rgba(135,73,255,0.18)");
        cg.addColorStop(1, "rgba(135,73,255,0)");
        ctx.beginPath();
        ctx.arc(mx, my, 160, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }

      /* — Blobs — */
      const BLOB_RADIUS = 220;
      blobs.forEach((p) => {
        if (hasMouseInside) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < BLOB_RADIUS && dist > 0) {
            const f = ((BLOB_RADIUS - dist) / BLOB_RADIUS) * 1.2;
            p.vx -= (dx / dist) * f;
            p.vy -= (dy / dist) * f;
          }
        }
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        // wrap
        const m = p.r;
        if (p.x < -m) p.x = canvas.width + m;
        if (p.x > canvas.width + m) p.x = -m;
        if (p.y < -m) p.y = canvas.height + m;
        if (p.y > canvas.height + m) p.y = -m;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `hsla(${p.hue},100%,60%,${p.alpha})`);
        g.addColorStop(1, `hsla(${p.hue},100%,60%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      /* — Dots + connections — */
      const DOT_RADIUS = 140;
      dots.forEach((p) => {
        if (hasMouseInside) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DOT_RADIUS && dist > 0) {
            const f = ((DOT_RADIUS - dist) / DOT_RADIUS) * 2.5;
            p.vx -= (dx / dist) * f;
            p.vy -= (dy / dist) * f;
          }
        }
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(135,73,255,${p.alpha})`;
        ctx.fill();
      });

      /* Connection lines between close dots */
      const LINK = 110;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(135,73,255,${0.1 * (1 - d / LINK)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      /* — Sparkles: tiny twinkling flickers — */
      sparkles.forEach((p) => {
        p.twinkle += 0.04;
        const flicker = 0.4 + 0.6 * Math.abs(Math.sin(p.twinkle));

        if (hasMouseInside) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160 && dist > 0) {
            const f = ((160 - dist) / 160) * 3;
            p.vx -= (dx / dist) * f;
            p.vy -= (dy / dist) * f;
          }
        }
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,160,255,${p.alpha * flicker})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

/* ── Floating reward-card visual (right side of hero) ─── */
const HeroVisual = () => (
  <div className="ref-hero-visual" aria-hidden="true">
    {/* Purple glow blob */}
    <div className="ref-hero-visual__glow" />

    {/* Floating reward cards */}
    <div className="ref-hero-visual__cards">

      {/* Card 1 – 25% */}
      <div className="ref-hvc ref-hvc--1">
        <div className="ref-hvc__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div className="ref-hvc__body">
          <span className="ref-hvc__pct">25%</span>
          <span className="ref-hvc__label">1 Client Closed</span>
        </div>
        <div className="ref-hvc__pill">Off Next Month</div>
      </div>

      {/* Card 2 – 50% (featured) */}
      <div className="ref-hvc ref-hvc--2 ref-hvc--featured">
        <div className="ref-hvc__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className="ref-hvc__body">
          <span className="ref-hvc__pct">50%</span>
          <span className="ref-hvc__label">2 Clients Closed</span>
        </div>
        <div className="ref-hvc__pill ref-hvc__pill--light">Half Month Free</div>
      </div>

      {/* Card 3 – 100% */}
      <div className="ref-hvc ref-hvc--3">
        <div className="ref-hvc__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div className="ref-hvc__body">
          <span className="ref-hvc__pct ref-hvc__pct--gold">100%</span>
          <span className="ref-hvc__label">3 Clients Closed</span>
        </div>
        <div className="ref-hvc__pill ref-hvc__pill--gold">Entire Month FREE</div>
      </div>

    </div>

    {/* Bottom stat strip */}
    <div className="ref-hero-visual__strip">
      <div className="ref-hero-visual__strip-item">
        <span className="ref-hero-visual__strip-val">₹45K+</span>
        <span className="ref-hero-visual__strip-label">Min. txn value</span>
      </div>
      <div className="ref-hero-visual__strip-divider" />
      <div className="ref-hero-visual__strip-item">
        <span className="ref-hero-visual__strip-val">31 Mar</span>
        <span className="ref-hero-visual__strip-label">Offer deadline</span>
      </div>
      <div className="ref-hero-visual__strip-divider" />
      <div className="ref-hero-visual__strip-item">
        <span className="ref-hero-visual__strip-val">April</span>
        <span className="ref-hero-visual__strip-label">Discount applies</span>
      </div>
    </div>

  </div>
);

/* ── Main hero ──────────────────────────────────────────── */
const ReferralHero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const deadline = new Date("2026-03-31T23:59:59");
    const tick = () => {
      const diff = deadline - new Date();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      className="ref-hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dot-grid background */}
      <div className="ref-hero__grid" aria-hidden="true" />
      {/* Liquid particle canvas */}
      <ParticleCanvas mouseRef={mouseRef} />
      {/* Bottom fade */}
      <div className="ref-hero__fade" aria-hidden="true" />

      <div className="container ref-hero__split">

        {/* ── LEFT: text ── */}
        <div className="ref-hero__left">
          {/* Logo */}
          <img
            src="/assets/images/Logo/logo3.png"
            alt="Resometa"
            className="ref-hero__logo"
            loading="eager"
          />

          {/* Badge */}
          <div className="ref-hero__badge">
            <span className="ref-hero__badge-dot" />
            Special Offer for Resometa Clients
          </div>

          {/* Headline */}
          <p className="ref-hero__pre">Refer 3 Businesses &amp;</p>
          <h1 className="ref-hero__heading">
            Get Your<br />
            Next{" "}
            <span className="ref-hero__highlight">
              M<span className="ref-hero__highlight-pill">ON</span>TH
            </span>
            <br />
            <span className="ref-hero__free">Free</span>
          </h1>

          {/* Service chips */}
          <div className="ref-hero__chips">
            {[
              { label: "Social Media Marketing", icon: "fa-solid fa-hashtag" },
              { label: "Digital Marketing", icon: "fa-solid fa-bullseye" },
              { label: "Lead Generation", icon: "fa-solid fa-filter" },
            ].map(({ label, icon }) => (
              <span key={label} className="ref-hero__chip">
                <i className={icon} /> {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="ref-hero__cta-row">
            <a href="#referral-form" className="btn ref-hero__btn">
              <span className="btn-title"><span>Refer Now &amp; Start Saving</span></span>
              <span className="icon-circle"><i className="fa-solid fa-arrow-right" /></span>
            </a>
            <a href="#how-it-works" className="ref-hero__link">
              How it works <i className="fa-solid fa-chevron-down" />
            </a>
          </div>

          {/* Countdown */}
          <div className="ref-hero__countdown">
            <p className="ref-hero__countdown-label">
              <i className="fa-regular fa-clock" /> Offer expires in
            </p>
            <div className="ref-hero__countdown-blocks">
              {[
                { val: pad(timeLeft.days), unit: "Days" },
                { val: pad(timeLeft.hours), unit: "Hours" },
                { val: pad(timeLeft.mins), unit: "Mins" },
                { val: pad(timeLeft.secs), unit: "Secs" },
              ].map(({ val, unit }) => (
                <div key={unit} className="ref-hero__countdown-block">
                  <span className="ref-hero__countdown-num">{val}</span>
                  <span className="ref-hero__countdown-unit">{unit}</span>
                </div>
              ))}
            </div>
            <p className="ref-hero__deadline">* Offer valid till 31st March 2026</p>
          </div>
        </div>

        {/* ── RIGHT: visual ── */}
        <div className="ref-hero__right">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
};

export default ReferralHero;
