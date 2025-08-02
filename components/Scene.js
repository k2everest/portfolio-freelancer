import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedMesh() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="#6366F1" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <AnimatedMesh />
    </Canvas>
  )
}