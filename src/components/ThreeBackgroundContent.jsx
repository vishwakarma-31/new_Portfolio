import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars() {
  const ref = useRef()

  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(3000 * 3) // Reduced from 5000 to 3000 for better performance
    for (let i = 0; i < 3000; i++) {
      sphere[i * 3] = (Math.random() - 0.5) * 100
      sphere[i * 3 + 1] = (Math.random() - 0.5) * 100
      sphere[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return [sphere]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20 // Slower rotation for smoother feel
      ref.current.rotation.y -= delta / 25
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.03} // Smaller size for better performance
          sizeAttenuation={true}
          depthWrite={false}
          alphaTest={0.001}
        />
      </Points>
    </group>
  )
}

function FloatingGeometry() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

export default function ThreeBackgroundContent() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]} // Responsive pixel ratio
      performance={{ min: 0.5 }} // Performance optimization
    >
      <ambientLight intensity={0.05} />
      <pointLight position={[10, 10, 10]} intensity={0.2} />
      <Stars />
      <FloatingGeometry />
    </Canvas>
  )
}