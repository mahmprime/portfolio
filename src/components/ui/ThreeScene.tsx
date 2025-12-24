import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/laptop.glb");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.006}
      position={[1.8, 0, 0]}
    />
  );
}

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        shadows
        className="w-full h-full"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <Environment preset="city" background={false} />

        {/* PresentationControls omogućava rotaciju samo modela */}
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 3, Math.PI / 3]}
          snap={true}
        >
          <Model />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
