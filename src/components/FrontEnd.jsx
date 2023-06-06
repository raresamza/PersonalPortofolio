import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ReactLogo from './ReactLogo'


const FrontEnd = () => {
    return (
        <>
            <Canvas>
                <Stage environment="https://github.com/raresamza/PersonalPortofolio/blob/71a4b5b9281b797a1e279c77f330986cc2a47d53/public/potsdamer_platz_1k.hdr" intensity={0}>
                    <ReactLogo />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <div className='-md:top-0 -md:right-0 -md:left-0 -md:h-fit -md:m-auto -md:bottom-0 w-[200px] h-[70] p-5 bg-white rounded-2xl text-black font-thin text-sm absolute top-24 right-24'>I design with a strong focus on both great design and ensuring the product can become a success</div>

        </>
    )
}

export default FrontEnd