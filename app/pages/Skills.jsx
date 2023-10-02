import Image from "next/image"
import '../css/Mobilescreen.css'
export default function Skills() {
    return (
        <>
            <section className="w-full flex flex-col items-center bg-white" style={{height : '67vh'}} id="skills">
                <div className="flex flex-col justify-center items-center w-2/3">
                    <h1 className=" text-cyan-400 text-4xl mb-1 font-bold">SKILLS</h1>
                    <h1 className='text-5xl text-slate-950 font-bold mb-10'>I have Experience in</h1>
                    <div className="flex justify-center items-center w-4/4 flex-wrap">
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/html.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">HTML</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/css.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">CSS</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/tailwind.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">TAILWIND</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/javascript.png' className="ml-9"/>
                            <h1 className="text-black mr-6 font-bold text-2xl">JAVASCRIPT</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/node.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">Node.js</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/react.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">REACT</h1>
                        </div>
                        <div className="flex justify-between items-center h-24 w-72 shadow-xl rounded-xl mt-2 ml-2 mr-2 mb-2 transition hover:scale-110">
                            <Image  height={64} width={64} alt="/" src='/skillsIcons/nextjs.png' className="ml-9"/>
                            <h1 className="text-black mr-9 font-bold text-2xl">NEXT.js</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}