import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

function GeometricShape({ position, type }: { position: [number, number, number]; type: 'sphere' | 'octahedron' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.002;

    const time = state.clock.getElapsedTime();
    const yOffset = Math.sin(time + position[0]) * 0.1;
    
    const scrollY = window.scrollY;
    const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
    
    const targetX = position[0] * (1 - scrollProgress) + mouse.x * 2;
    const targetY = position[1] * (1 - scrollProgress) + mouse.y * 2 + yOffset;
    const targetZ = position[2] * (1 - scrollProgress);

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.05;

    // Scale down as user scrolls
    meshRef.current.scale.setScalar(1 - scrollProgress * 0.5);
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

export function Background3D() {
  const createShapes = (offsetX: number, offsetY: number) => {
    return Array.from({ length: 24 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20 + offsetX,
        (Math.random() - 0.5) * 20 + offsetY,
        (Math.random() - 0.5) * 5
      ] as [number, number, number],
      type: ['sphere', 'octahedron', 'torus'][i % 3] as 'sphere' | 'octahedron' | 'torus'
    }));
  };

  const shapesSet1 = useMemo(() => createShapes(0, 0), []); // Center
  const shapesSet2 = useMemo(() => createShapes(15, 15), []); // Offset for second set
  const shapesSet3 = useMemo(() => createShapes(-15, -15), []); // Offset for third set

  return (
    <>
      {shapesSet1.map((shape, index) => (
        <GeometricShape key={`set1-${index}`} position={shape.position} type={shape.type} />
      ))}
      {shapesSet2.map((shape, index) => (
        <GeometricShape key={`set2-${index}`} position={shape.position} type={shape.type} />
      ))}
      {shapesSet3.map((shape, index) => (
        <GeometricShape key={`set3-${index}`} position={shape.position} type={shape.type} />
      ))}
    </>
  );
}

