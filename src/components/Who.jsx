import React from 'react'
import Navbar from './Navbar'
import line from '../assets/line.png'
import moon from '../assets/moon.png'

const Who = () => {
    return (

        <>
            {/*section */} < div className='h-[100vh] snap-center flex  justify-center  ' >
                {/*container */}<div className='h-[100vh]  w-[1400px] flex justify-between'>
                    {/*left */}<div className='flex-[1_0%] '>
                        {/*3d model */}
                    </div>
                    {/*right */}<div className='flex-[1_0%] flex flex-col justify-center gap-5'>
                        <p className=' text-8xl'>Think outside the box.</p>
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