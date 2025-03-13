import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={"#468585"} emissive={"#468585"} />
      <Sparkles count={330} scale={2} size={3} speed={0.1} noise={0.1} color={"#red"}/>
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={"#9CDBA6"} />
      <color attach="background" args={["#000000"]} />

      <RotatingCube />
    </Canvas>
  );
};
export default App;
