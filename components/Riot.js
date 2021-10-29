/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE  from "three";

export default function Riot({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/riot.glb')
  useFrame(() => (group.current.rotation.x = group.current.rotation.y += 0.004)) 
  const material = new THREE.MeshStandardMaterial({
    color: 0x545454,
    transparent: true,
    opacity: 0.25,
    wireframe: true,
    roughness: 0
  })
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_1.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_2.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_3.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_4.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_5.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_6.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_7.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_8.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_9.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_10.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_11.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_12.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_13.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_14.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_15.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_16.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_17.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_18.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_19.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_20.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_21.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_22.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_23.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_24.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_25.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_26.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_27.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_28.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_29.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_30.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_31.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_32.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_33.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_34.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_35.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_36.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_37.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_38.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_39.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_40.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh scale={0.025, 0.025, 0.025} geometry={nodes.object_41.geomeray} material={material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
    )
  }

useGLTF.preload('/riot.glb')
