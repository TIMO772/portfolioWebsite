import '../css/NoTailwind.css'
import '../css/Mobilescreen.css'
import dynamic from 'next/dynamic';
export default function About() {
    const Image  = dynamic(() => import('next/image'))
    return (
        <>
            <section className="about-section w-full bg-white flex flex-col items-center h-80v" id='about'>
                <h1 className="about-title text-6xl font-bold mt-1 text-slate-950" style={{ fontFamily: 'system-ui' }}>ABOUT</h1>
                <div className="about-box w-4/6 shadow-2xl h-3/4 rounded-2xl flex justify-between items-center px-16 mt-8 border border-slate-300" data-aos='fade-up'>
                    <div className="text-about flex justify-center flex-col w-1/2">
                        <h1 className='text-4xl text-slate-950 font-bold mb-3'>Who I am</h1>
                        <p className='text-slate-950 text-lg opacity-80'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate eveniet eum!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis quia enim ratione est? Sunt!
                        </p>
                        <h2 className=' text-zinc-500 text-sm mt-4 w-full'>Let's Make Somthing Together</h2>
                    </div>
                    <div className="box relative rounded-full bg-black w-96 h-96 overflow-hidden">
                        <div className="absolute rounded-full overflow-hidden" style={{ zIndex: '3', inset: '10px' }}>
                            <Image height={400} width={400} src={'/photo2.webp'} className='image object-cover top-0 left-0' alt=''/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}