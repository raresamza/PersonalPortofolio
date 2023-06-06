import { useRef, useState } from 'react'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSumbit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_951q5np', 'template_voqgl3s', ref.current, 'Zy0B4onkI03Mfq48g')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });
    }

    return (
        <>
            {/*section */}<div id="contact" className='h-[100vh] snap-center '>
                {/*container */}<div className='flex w-full justify-between gap-12 h-full	'>
                    {/*left */}<div className='-md:justify-center flex-[1_0%] flex items-center justify-end'>
                        <form ref={ref} className='-md:w-[300px] flex flex-col w-[500px] gap-6' onSubmit={handleSumbit}>
                            {/*title */}<p className='font-thin'>Contact Me</p>
                            <input name='name' placeholder='Name' className='text-black p-5 bg-slate-300 border-none rounded-md'></input>
                            <input name='email' placeholder='Email' className='text-black p-5 bg-slate-300 border-none rounded-md'></input>
                            <textarea name='message' rows={10} placeholder='Write your message' className='text-black p-5 bg-slate-300 border-none rounded-md'></textarea>
                            <button type='submit' className='bg-fuchsia-500 font-bold border-none rounded-md cursor-pointer text-white p-5'>Send</button>
                            {success && "Your message has been sent. I'll get back to you soon."}
                        </form>
                    </div>
                    {/*right */}<div className='-md:hidden flex-[1_0%]'>
                        <Map></Map>
                    </div>
                </div>






            </div>
        </>
    )
}

export default Contact