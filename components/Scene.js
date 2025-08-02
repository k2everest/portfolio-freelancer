import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function FloatingBox() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime()
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 1, 0.3]} />
      <meshStandardMaterial color="#6366F1" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} />
      <FloatingBox />
    </Canvas>
  )
}