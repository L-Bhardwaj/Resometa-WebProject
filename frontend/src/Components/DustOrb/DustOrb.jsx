import React, { useEffect, useRef } from "react";

const TOTAL = 220;
const ORB_SIZE = 90;
const TIME = 14;

function DustOrb() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    for (let i = 1; i <= TOTAL; i++) {
      const p = document.createElement("div");
      p.className = "orb-particle";

      const z = Math.random() * 360;
      const y = Math.random() * 360;
      const hue = (40 / TOTAL) * i;

      const anim = `orbit-${i}`;

      p.style.backgroundColor = "var(--accent-color)";
      p.style.animation = `${anim} ${TIME}s linear infinite`;
      p.style.animationDelay = `${i * 0.01}s`;

      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes ${anim} {
          20% { opacity: 1; }
          30% {
            transform:
              rotateZ(-${z}deg)
              rotateY(${y}deg)
              translateX(${ORB_SIZE}px)
              rotateZ(${z}deg);
          }
          80% {
            opacity: 1;
            transform:
              rotateZ(-${z}deg)
              rotateY(${y}deg)
              translateX(${ORB_SIZE}px)
              rotateZ(${z}deg);
          }
          100% {
            transform:
              rotateZ(-${z}deg)
              rotateY(${y}deg)
              translateX(${ORB_SIZE * 3}px)
              rotateZ(${z}deg);
          }
        }
      `;
      document.head.appendChild(style);
      wrap.appendChild(p);
    }

    return () => (wrap.innerHTML = "");
  }, []);

  return (
    <div className="orb-wrapper">
      <div ref={wrapRef} className="orb" />
    </div>
  );
}

export default DustOrb;
