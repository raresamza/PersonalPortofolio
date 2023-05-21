import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Web from './Web'

const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Web />

                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <div className='w-[200px] h-[70] p-5 bg-white rounded-2xl text-black font-thin text-sm absolute top-24 right-24'>I design with a strong focus on both great design and ensuring the product can become a success</div>
        </>
    )
}

export default WebDesign