import React from 'react'




const Works = () => {

    let data = [
        "Web Design",
        "Development",
        "Product Design",
        "Social Media",
        "Illustreation",
    ]






    return (
        <>
            {/*section*/} <div className='h-[100vh] snap-center flex justify-center	'>
                {/*container */} <div className='w-[1400px] flex justify-between'>
                    {/*left*/}<div className='flex-[1_0%] flex items-center'>
                        {/*list*/}<ul className='list-none flex flex-col gap-5'>
                            {data.map((item) => <li className="font-bold text-8xl relative cursor-pointer after:whitespace-nowrap text-transparent font-outline-1 after:content-[attr(text)] after:h-[150%] after:top-0 after:left-0 after:text-pink-300 after:w-[0px] after:overflow-hidden after:absolute hover:after:animate-moveText" key={item} text={item}>{item}</li>)}
                        </ul>
                    </div>
                    {/*right*/}<div className='flex-[1_0%]'></div>
                </div>
            </div>
        </>
    )
}

export default Works