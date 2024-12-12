import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Background3D } from './Background3D';
import { OrbitControls, Environment, Preload } from '@react-three/drei';
import { MouseParallax } from './MouseParallax';

export function Scene() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cream to-white/50">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Background3D />
          <MouseParallax />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

