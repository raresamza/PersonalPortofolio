import React from 'react'
import Navbar from './Navbar'
import line from '../assets/line.png'
import moon from '../assets/moon.png'

const Hero = () => {
    return (

        <>
            {/*section */} < div className='h-[100vh] snap-center flex flex-col  justify-between  items-center' >
                <Navbar></Navbar>
                {/*container */}<div className='h-[100vh]  w-[1400px] flex justify-between'>
                    {/*left */}<div className='flex-[2_0%] flex flex-col justify-center gap-5'>
                        <p className=' text-8xl'>Think. Make. Solve.</p>
                        {/*waht we do */}<div className='flex items-center gap-2'>
                            <img className='h-1' src={line}></img>
                            <p className='text-fuchsia-500 text-lg font-bold'>What I do</p>
                        </div>
                        <p className='text-2xl text-gray-200'>we enjoy creating delightful, human-centerd digital expriences</p>
                        <button className="bg-fuchsia-500 text-white font-semibold w-[100px] p-2 border-nono rounded-md cursor-pointer">Learn more</button>
                    </div>
                    {/*right */}<div className='flex-[3_0%] relative'>
                        <img className=' h-[800px] w-[1000px] object-contain absolute top-0 right-0 left-0 bottom-0 m-auto animate-wiggle ' src={moon}></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero