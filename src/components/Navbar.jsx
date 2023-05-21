import React from 'react'
import reactsvg from '../assets/react.svg'
import search from '../assets/search.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-center -md:w-full'>
                <div className='flex justify-between items-center w-[1400px] py-10 -md:w-full'>
                    <div className='flex items-center gap-12'>
                        <img className='h-12' src={reactsvg}></img>
                        <ul className='-md:hidden -md:p-3 flex gap-5 list-none cursor-pointer'>
                            <li ><a href="#home">Home</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#who">Who</a></li>
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