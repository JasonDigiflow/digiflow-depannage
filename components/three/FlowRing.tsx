"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function FlowParticles() {
  const points = useRef<THREE.Points>(null!)
  const { viewport, mouse } = useThree()

  // Créer les particules en forme d'anneau
  const particlesCount = 3000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      const angle = (i / particlesCount) * Math.PI * 2 * 4 // 4 tours
      const radius = 2 + Math.sin(angle * 2) * 0.5 // Variation du rayon
      const height = Math.sin(angle * 3) * 0.5 // Variation de hauteur
      
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = height
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    
    return positions
  }, [particlesCount])

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3)
    const violetColor = new THREE.Color("#7B61FF")
    const orangeColor = new THREE.Color("#FF8A00")
    
    for (let i = 0; i < particlesCount; i++) {
      const mixFactor = (i / particlesCount + 0.5) % 1
      const color = violetColor.clone().lerp(orangeColor, mixFactor)
      
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return colors
  }, [particlesCount])

  useFrame((state) => {
    if (!points.current) return
    
    // Rotation de base
    points.current.rotation.y = state.clock.elapsedTime * 0.1
    points.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    
    // Réaction à la souris
    points.current.rotation.x = mouse.y * 0.2
    points.current.position.x = mouse.x * 0.5
    
    // Animation des particules
    const positions = points.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      const angle = (i / particlesCount) * Math.PI * 2 * 4 + time * 0.2
      const radius = 2 + Math.sin(angle * 2 + time) * 0.5
      const height = Math.sin(angle * 3 + time * 0.5) * 0.5
      
      positions[i3] = Math.cos(angle) * radius
      positions[i3 + 1] = height
      positions[i3 + 2] = Math.sin(angle) * radius
    }
    
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  )
}

function InnerRing() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[1.5, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#7B61FF"
        emissive="#7B61FF"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

export function FlowRingScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#FF8A00" intensity={0.5} />
        
        <FlowParticles />
        <InnerRing />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}