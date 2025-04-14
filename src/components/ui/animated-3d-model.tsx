
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  // Using a well-known 3D model that should load reliably
  const { scene } = useGLTF("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/robot-playground/model.gltf");
  return <primitive object={scene} scale={2} position={[0, -2, 0]} />;
}

export function Animated3DModel() {
  return (
    <div className="h-[300px] w-full rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            autoRotate
            autoRotateSpeed={3}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
