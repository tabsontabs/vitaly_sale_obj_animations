/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE  from "three";

export default function Feedback({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/right_feedback2.glb')
  useFrame(() => (group.current.rotation.x = group.current.rotation.y += 0.009)) 
  const material = new THREE.MeshStandardMaterial({
    color: 0x545454,
    transparent: true,
    opacity: 0.1,
    wireframe: true,
    roughness: 0
  })
  return (
    <group ref={group} {...props} dispose={null} position={[-2, 2, 0]}>
      <mesh
        scale={0.025, 0.025, 0.025}
        geometry={nodes.object_1001.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        scale={0.025, 0.025, 0.025}
        geometry={nodes.object_2001.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        scale={0.025, 0.025, 0.025}
        geometry={nodes.object_3001.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/right_feedback2.glb')