'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic';
import './css/NoTailwind.css'
import './css/Mobilescreen.css'
export default function Home() {
  const About_ = dynamic(() => import('./pages/About'))
  const Skills_ = dynamic(() => import('./pages/Skills'))
  const Servies_ = dynamic(() => import('./pages/Servies'))
  const Writer = dynamic(() => import('typewriter-effect'))
  const Link  = dynamic(() => import('next/link'))
  const Header = dynamic(() => import('./components/header'))
  const Image  = dynamic(() => import('next/image'))

  return (
    <>
      <Header />
      <section className='main-section w-full h-screen bg-white flex items-center justify-center ' id='home'>
        <div className='flex-main flex w-full justify-center items-center px-52'>
          <div className='text-box flex flex-col w-full text-slate-700' style={{ fontFamily: 'system-ui' }}>
            <h1 className="text-7xl font-bold mb-2">Hello I'm <span className='text-blue-700'>Tim</span> </h1>
            <h3 className="text-5xl font-bold flex">I'm a   <span className='text-blue-700  ml-3' id='text-typed'>
              <Writer
                options={{
                  autoStart: true,
                  strings: ['Frontend Devoloper', 'Python Devoloper'],
                  loop: true
                }} />
            </span></h3>
            <div className='social-box flex items-center w-53'>
              <Link href='/' className=' bg-white text-blue-700 flex items-center px-4 p-4 text-2xl rounded-full mt-4 mr-4 border-slate-400 border-t border-r shadow-xl  transition hover:scale-110'> <FontAwesomeIcon icon={faXTwitter} /> </Link>
              <Link href='/' className=' bg-white text-blue-700 flex items-center px-4 p-4 text-2xl rounded-full mt-4 mr-4 border-slate-400 border-t border-r shadow-xl transition hover:scale-110'>  <FontAwesomeIcon icon={faFacebook} /> </Link>
              <Link href='/' className=' bg-white text-blue-700 flex items-center px-4 p-4 text-2xl rounded-full mt-4 mr-4 border-slate-400 border-t border-r shadow-xl transition hover:scale-110'>  <FontAwesomeIcon icon={faInstagram} />  </Link>
              <Link href='/' className=' bg-white text-blue-700 flex items-center px-4 p-4 text-2xl rounded-full mt-4 mr-4 border-slate-400 border-t border-r shadow-xl transition hover:scale-110'>  <FontAwesomeIcon icon={faLinkedin} />  </Link>
            </div>
            <p className="text-2xl tracking-wide mt-3 w-3/4" style={{ fontFamily: 'cursive' }}>
              Lorem, ipsum dolor sit amet c
              onsectetur adipisicing elit. Laboriosam autem inventore, ut quasi officiis quaerat praesentium  </p>
          </div>
          <Image src="/photo.png" className='img rounded-full' alt=' ' height={500} width={500} loading='lazy' blurDataURL="URL" placeholder="blur"/>
        </div>
      </section>
      <About_ />
    </>
  )
}
