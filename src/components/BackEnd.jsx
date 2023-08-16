import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Java from './Java'



const BackEnd = () => {
    return (
        <>
            <Canvas>
                <Stage intensity={-3}>
                    <Java />

                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <div className='-md:top-0 -md:right-0 -md:left-0 -md:m-auto -md:h-fit -md:bottom-0 w-[200px] h-[70] p-5 bg-white rounded-2xl text-black font-thin text-sm absolute top-24 right-24'>I create solid back-end to ensure a smooth application</div>

        </>
    )
}

export default BackEnd
