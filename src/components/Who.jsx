import line from '../assets/line.png'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'

const Who = () => {
    return (

        <>
            {/*section */} < div id="who" className='h-[100vh] snap-center flex  justify-center  ' >
                {/*container */}<div className='h-[100vh]  w-[1400px] flex justify-between'>
                    {/*left */}<div className='-md:hidden flex-[1_0%] '>
                        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube></Cube>
                        </Canvas>
                    </div>
                    {/*right */}<div className='-md:items-center -md:text-center flex-[1_0%] flex flex-col justify-center gap-5 '>
                        <p className='-md:text-5xl text-8xl'>Think outside the box.</p>
                        {/*waht we do */}<div className='flex items-center gap-2'>
                            <img className='h-1' src={line}></img>
                            <p className='text-fuchsia-500 text-lg font-bold'>Who I am</p>
                        </div>
                        <p className='text-2xl text-gray-200'>a creative developer with a passion for coding</p>
                        <button className="bg-fuchsia-500 text-white font-semibold w-[120px] p-2 border-nono rounded-md cursor-pointer">See my work</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Who