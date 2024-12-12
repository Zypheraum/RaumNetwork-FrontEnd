import { GeometricShape } from './GeometricShape';
import { ParticleField } from './ParticleField';

export function Background3D() {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6
    ] as [number, number, number],
    type: ['sphere', 'octahedron', 'torus'][i % 3] as 'sphere' | 'octahedron' | 'torus'
  }));

  return (
    <>
      <ParticleField />
      {shapes.map((shape, index) => (
        <GeometricShape key={index} position={shape.position} type={shape.type} />
      ))}
    </>
  );
}