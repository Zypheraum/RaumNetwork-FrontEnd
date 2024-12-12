import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MouseParallax() {
  const { camera } = useThree();
  const initialCameraPos = useRef(camera.position.clone());
  const targetPos = useRef(new THREE.Vector3());
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    targetPos.current.set(
      initialCameraPos.current.x + mouse.current.x * 2,
      initialCameraPos.current.y + mouse.current.y * 2,
      camera.position.z
    );

    camera.position.lerp(targetPos.current, 0.1);
  });

  return null;
}

