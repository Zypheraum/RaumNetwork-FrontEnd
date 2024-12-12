import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface GeometricShapeProps {
  position: [number, number, number];
  type: 'sphere' | 'octahedron' | 'torus';
}

export function GeometricShape({ position, type }: GeometricShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.002;

    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time + position[0]) * 0.001;
    
    meshRef.current.position.x += (mouse.x * 3 - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (mouse.y * 2 - meshRef.current.position.y) * 0.02;
  });

  const geometry = type === 'sphere' 
    ? <sphereGeometry args={[0.5, 32, 32]} />
    : type === 'octahedron'
    ? <octahedronGeometry args={[0.6]} />
    : <torusGeometry args={[0.4, 0.2, 16, 32]} />;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}