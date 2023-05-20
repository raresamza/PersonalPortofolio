import React from 'react'
import reactsvg from '../assets/react.svg'
import search from '../assets/search.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-between items-center w-[1400px] py-10'>
                    <div className='flex items-center gap-12'>
                        <img className='h-12' src={reactsvg}></img>
                        <ul className='flex gap-5 list-none cursor-pointer'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Works</li>
                            <li>Who</li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='cursor-pointer w-5' src={search}></img>
                        <button className='w-[100px] p-2 bg-fuchsia-500 text-white border-none rounded-md'>Hire me</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar