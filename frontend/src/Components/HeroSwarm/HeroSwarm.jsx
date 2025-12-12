import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, SSAO, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";

function Swarm({ count }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        t: Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        x: -35 + Math.random() * 70,
        y: -20 + Math.random() * 40,
        z: -20 + Math.random() * 40,
        mx: 0,
        my: 0,
      })),
    [count]
  );

  useFrame((state) => {
    particles.forEach((p, i) => {
      p.t += p.speed;

      const float = Math.sin(p.t) * 5;
      const size = 2.8 + Math.sin(p.t) * 1.8;

      // ✅ TRUE PARALLAX
      p.mx += (state.mouse.x * 20 - p.mx) * 0.05;
      p.my += (state.mouse.y * 10 - p.my) * 0.05;

      dummy.position.set(
        p.x + p.mx + float,
        p.y + p.my,
        p.z
      );

      dummy.scale.set(size, size, size);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshPhysicalMaterial
        color={new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--accent-glow'))}
        emissive={new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--accent-glow'))}
        emissiveIntensity={0.6}
        roughness={0.05}
        metalness={0.2}
        transmission={0.6}   // ✅ GLASS EFFECT
        thickness={1.2}
        clearcoat={1}
        reflectivity={0.4}
      />
    </instancedMesh>
  );
}

/* ✅ REAL CAMERA PARALLAX */
function CameraParallax() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 8 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroSwarm() {
  return (
    <div className="hero-swarm-wrapper">
      <Canvas camera={{ fov: 70, position: [0, 0, 80] }} dpr={[1, 2]}>

        {/* ✅ DARK CINEMATIC BASE */}
        <color attach="background" args={["#020412"]} />
        <fog attach="fog" args={["#020412", 50, 160]} />

        {/* ✅ ACCENT LIGHTING */}
        <ambientLight intensity={0.35} />
        <pointLight position={[50, 80, 40]} intensity={10} color="cyan" />
        <pointLight position={[-60, -40, -20]} intensity={6} color="#3b82f6" />

        <CameraParallax />

        <Swarm count={90} />

        {/* ✅ DEEP BLACK SHADOWS */}
        <ContactShadows
          position={[0, -32, 0]}
          blur={3}
          opacity={0.85}
          color="black"
          width={140}
          height={140}
          far={60}
        />

        {/* ✅ CINEMATIC POST EFFECTS */}
        <EffectComposer>
          <SSAO samples={20} radius={18} intensity={25} />
          <Bloom intensity={0.9} luminanceThreshold={0.3} />
          <Vignette eskil={false} offset={0.2} darkness={0.85} />
        </EffectComposer>

        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>

      </Canvas>
    </div>
  );
}
