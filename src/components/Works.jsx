import { useState } from 'react'
import WebDesign from './WebDesign'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'




const Works = () => {


    const [work, setWork] = useState("Web Design")

    let data = [
        "Web Design",
        "Front-End",
        "Back-End",
        "Social Media",
        // "Illustreation",
    ]




    return (
        <>
            {/*section*/} <div id="works" className='h-[100vh] snap-center flex justify-center	relative'>
                {/*container */} <div className='-md:w-full -md:flex-col w-[1400px] flex justify-between'>
                    {/*left*/}<div className='flex-[1_0%] flex items-center -md:p-5 -md:justify-center'>
                        {/*list*/}<ul className='list-none flex flex-col gap-5'>
                            {data.map((item) => <li className="-md:text-2xl -md:text-white -md:font-outline-0 font-bold text-8xl relative cursor-pointer after:whitespace-nowrap text-transparent font-outline-1 after:content-[attr(text)] after:h-[150%] after:top-0 after:left-0 after:text-pink-300 after:w-[0px] after:overflow-hidden after:absolute hover:after:animate-moveText" key={item} onClick={() => setWork(item)} >{item}</li>)}
                        </ul>
                    </div>
                    {/*right*/}<div className='flex-[1_0%]'>
                        {work === "Web Design" ? (<WebDesign />) : work === "Front-End" ? (<FrontEnd />) : (<BackEnd />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works