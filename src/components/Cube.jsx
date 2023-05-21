import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Cube = () => {

    const textReft = useRef();

    useFrame(state => (textReft.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]}></PerspectiveCamera>
                    <color attach="background" args={["#dc9dcd"]} />
                    <Text ref={textReft} fontSize={2} color="#555">
                        hello.
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube