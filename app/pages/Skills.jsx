import dynamic from 'next/dynamic';
import '../css/Mobilescreen.css'
export default function Skills() {
    const Image  = dynamic(() => import('next/image'))
    return (
        <>
            <section className="w-full flex flex-col items-center bg-white" style={{maxHeight : '200vh'}} id="skills">
                <div className="flex flex-col justify-center items-center w-3/3">
                    <h1 className="ssc-title text-cyan-400 text-4xl mb-1 font-bold mt-24">SKILLS <span className='text-xs'>© 2023</span> </h1>
                    <h1 className='s-title text-5xl text-slate-950 font-bold mb-10'>I have Experience in</h1>
                    <div className="flex justify-center items-center flex-wrap w-11/12 ">
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10 mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/html.png' loading='lazy' blurDataURL="URL" placeholder="blur"yyyyyyyyyyyyyh fgfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgv
                              />
                            <h1 className="text-black font-bold text-2xl">HTML</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10  mt-2 ml-2 mr-2 mb-2 transition hover:scale-110 ">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/css.png'  loading='lazy' blurDataURL="URL" placeholder="blur" />
                            <h1 className="text-black  font-bold text-2xl">CSS</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10  mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/tailwind.png'  loading='lazy' blurDataURL="URL" placeholder="blur" />
                            <h1 className="text-black  font-bold text-2xl">TAILWIND</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-6 mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/javascript.png' loading='lazy' blurDataURL="URL" placeholder="blur" />
                            <h1 className="text-black mr-6 font-bold text-2xl">JAVASCRIPT</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10 mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/node.png'  loading='lazy' blurDataURL="URL" placeholder="blur"/>
                            <h1 className="text-black  font-bold text-2xl">Node.js</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10 mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/react.png'  loading='lazy' blurDataURL="URL" placeholder="blur"/>
                            <h1 className="text-black  font-bold text-2xl">REACT</h1>
                        </div>
                        <div className="s-card flex justify-between items-center h-24 w-72 shadow-xl rounded-xl px-10 mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/nextjs.png' loading='lazy' blurDataURL="URL" placeholder="blur" />
                            <h1 className="text-black  font-bold text-2xl">NEXT.js</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}