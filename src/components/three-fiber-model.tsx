import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import model from "@/assets/ceramic-pot.glb";

interface ModelProps {
  scale?: number;
}

const Model = (props: ModelProps) => {
  const { scene } = useGLTF(model);
  return <primitive object={scene} {...props} />;
};

export const ThreeModel = () => {
  return (
    <div className="h-[800px]">
      <p>React Three Fiber Model</p>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          zoom: 0.4
        }}
      >
        <ambientLight intensity={0.8} />
        <PresentationControls
          global
          speed={1.3}
          zoom={1}
          rotation={[0, -1.5, 0]}
          polar={[-0.08, Math.PI / 2]}
        >
          <Stage
            shadows={false}
          >
            <Model scale={1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
