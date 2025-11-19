import React, { useEffect, useMemo, useRef, useState } from "react";

/* Icons */
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaJava,
  FaCopyright,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiTypescript,
  SiJquery,
  SiPython,
  SiRedux,
  SiExpress,
} from "react-icons/si";

import { DiJqueryUiLogo } from "react-icons/di";
import { PiFileSqlFill } from "react-icons/pi";
import { TbApi } from "react-icons/tb";

export default function TechStackSphere({
  icons = null,
  minSize = 220,
  maxSize = 420,
  rotationSpeed = 0.004,
}) {
  const containerRef = useRef(null);
  const groupRef = useRef(null);

  const [containerSize, setContainerSize] = useState(maxSize);

  const angleXRef = useRef(0);
  const angleYRef = useRef(0);

  const lastDragPos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  /* Default Icons */
  const defaultIcons = [
    { Icon: FaReact, color: "#A7F3D0", size: 38 },
    { Icon: SiExpress, color: "#E0E7FF", size: 38 },
    { Icon: SiJavascript, color: "#FEF08A", size: 38 },
    { Icon: FaCopyright, color: "#E0E7FF", size: 38 },
    { Icon: FaJava, color: "#FBBF24", size: 38 },
    { Icon: SiRedux, color: "#C7D2FE", size: 38 },
    { Icon: PiFileSqlFill, color: "#FBBF24", size: 38 },
    { Icon: FaHtml5, color: "#FDBA74", size: 38 },
    { Icon: TbApi, color: "#BAE6FD", size: 38 },
    { Icon: FaCss3Alt, color: "#93C5FD", size: 38 },
    { Icon: FaNodeJs, color: "#BBF7D0", size: 38 },
    { Icon: SiPython, color: "#BFDBFE", size: 38 },
    { Icon: SiTailwindcss, color: "#BAE6FD", size: 38 },
    { Icon: FaBootstrap, color: "#C4B5FD", size: 38 },
    { Icon: SiJquery, color: "#FBCFE8", size: 38 },
    { Icon: DiJqueryUiLogo, color: "#FBBF24", size: 38 },
    { Icon: SiMongodb, color: "#BBF7D0", size: 38 },
    { Icon: FaGitAlt, color: "#FED7AA", size: 38 },
    { Icon: SiVite, color: "#E9D5FF", size: 38 },
    { Icon: SiTypescript, color: "#C7D2FE", size: 38 },
  ];

  const items = icons || defaultIcons;
  const N = items.length;

  /* Compute sphere positions */
  const points = useMemo(() => {
    const pts = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      pts.push({ x, y, z });
    }
    return pts;
  }, [N]);

  /* Resize Listener */
  useEffect(() => {
    function resize() {
      const parentWidth =
        containerRef.current?.parentElement?.clientWidth || window.innerWidth;
      const size = Math.max(minSize, Math.min(maxSize, parentWidth * 0.55));
      setContainerSize(size);
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Drag to rotate */
  useEffect(() => {
    function onMouseDown(e) {
      isDragging.current = true;
      lastDragPos.current = { x: e.clientX, y: e.clientY };
    }
    function onMouseMove(e) {
      if (!isDragging.current) return;
      const dx = e.clientX - lastDragPos.current.x;
      const dy = e.clientY - lastDragPos.current.y;

      angleYRef.current += dx * 0.002;
      angleXRef.current -= dy * 0.002;

      lastDragPos.current = { x: e.clientX, y: e.clientY };
    }
    function onMouseUp() {
      isDragging.current = false;
    }

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  /* Auto Rotation */
  useEffect(() => {
    function animate() {
      angleYRef.current += rotationSpeed;

      if (groupRef.current) {
        groupRef.current.style.transform = `
          rotateX(${angleXRef.current * 180}deg)
          rotateY(${angleYRef.current * 180}deg)
        `;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  /* Billboard transform */
  const getBillboardStyle = () => {
    return `
      rotateX(${-angleXRef.current * 180}deg)
      rotateY(${-angleYRef.current * 180}deg)
    `;
  };

  /* Depth-based scale (front bigger, back smaller) */
  const getDepthScale = (p) => {
    let x = p.x;
    let y =
      p.y * Math.cos(angleXRef.current) - p.z * Math.sin(angleXRef.current);
    let z =
      p.y * Math.sin(angleXRef.current) + p.z * Math.cos(angleXRef.current);

    let x2 = x * Math.cos(angleYRef.current) + z * Math.sin(angleYRef.current);
    let z2 = -x * Math.sin(angleYRef.current) + z * Math.cos(angleYRef.current);

    const minScale = 0.6;
    const maxScale = 1.4;

    return minScale + ((z2 + 1) / 2) * (maxScale - minScale);
  };

  /* 3D position transform */
  const getPos = (p) => {
    const r = containerSize * 0.42;
    return `
      translate3d(${p.x * r}px, ${p.y * r}px, ${p.z * r}px)
    `;
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: containerSize,
        height: containerSize,
        position: "relative",
        margin: "0 auto",
        perspective: `${containerSize * 4}px`,
        background: "transparent",
        cursor: "grab",
      }}
    >
      <div
        ref={groupRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {points.map((pt, i) => {
          const { Icon, color, size } = items[i % items.length];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `
                  ${getPos(pt)}
                  ${getBillboardStyle()}
                  scale(${getDepthScale(pt)})
                `,
                transformStyle: "preserve-3d",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <Icon
                size={size}
                color={color}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.35))",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
