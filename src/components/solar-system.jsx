import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/solar_system_model_orrery.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.001, 0.295, -0.295]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.571}>
          <group name="ee3f808601fd451d984787d7209dc68cfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Orerry_Rigged" position={[0, -81.972, 0]}>
                  <group name="Orerry_Bones" position={[0, 81.972, -0.924]}>
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_29"
                        geometry={nodes.Object_29.geometry}
                        material={materials.Orrery_Textures}
                        skeleton={nodes.Object_29.skeleton}
                      />
                      <group name="Object_28" position={[0, -81.972, 0]} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/solar_system_model_orrery.glb')