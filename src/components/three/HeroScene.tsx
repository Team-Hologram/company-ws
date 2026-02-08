"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function AbstractMesh() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={2.5}>
                <icosahedronGeometry args={[1, 4]} />
                <MeshDistortMaterial
                    color="#ffffff"
                    roughness={0.15}
                    metalness={0.9}
                    distort={0.25}
                    speed={1.5}
                    envMapIntensity={0.5}
                />
            </mesh>
        </Float>
    );
}

function GradientSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    const gradientMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color("#1C1C1F") },
                uColor2: { value: new THREE.Color("#2A2A2E") },
            },
            vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float gradient = smoothstep(-1.0, 1.0, vPosition.y + sin(vPosition.x * 2.0 + uTime) * 0.2);
          vec3 color = mix(uColor1, uColor2, gradient);
          float alpha = 0.3 + gradient * 0.2;
          gl_FragColor = vec4(color, alpha);
        }
      `,
            transparent: true,
            side: THREE.DoubleSide,
        });
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
                state.clock.elapsedTime;
        }
    });

    return (
        <mesh ref={meshRef} scale={4} position={[0, 0, -3]}>
            <sphereGeometry args={[1, 64, 64]} />
            <primitive object={gradientMaterial} attach="material" />
        </mesh>
    );
}

function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(200 * 3);
        for (let i = 0; i < 200; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#ffffff"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

function SceneContent() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.2} />
            <GradientSphere />
            <AbstractMesh />
            <ParticleField />
            <Environment preset="night" />
        </>
    );
}

// Fallback for loading state
function LoadingFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-graphite border-t-pure-white rounded-full animate-spin" />
        </div>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Suspense fallback={<LoadingFallback />}>
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 45 }}
                    dpr={[1, 1.5]}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance",
                    }}
                >
                    <SceneContent />
                </Canvas>
            </Suspense>
        </div>
    );
}
