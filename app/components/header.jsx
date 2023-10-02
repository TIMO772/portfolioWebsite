import Link from 'next/link'
import '../css/Mobilescreen.css'
export default function Header() {
    return (
        <>
            <header className='header flex justify-between items-center fixed z-10 w-full px-52 p-5 rounded-3xl shadow-lg bg-white'>
                <Link href='/' className='logo text-5xl text-slate-800 font-extrabold ' style={{ fontFamily: 'cursive' }}>Portfolio.</Link>
                <nav className='navbar'>
                    <Link href='/#home' className='a text-2xl text-slate-800 px-2 ml-3 transition hover:text-blue-700' style={{ fontFamily: 'system-ui' }}>Home</Link>
                    <Link href='/#about' className='a text-2xl text-slate-800 px-2 ml-3 transition hover:text-blue-700' style={{ fontFamily: 'system-ui' }}>About</Link>
                    <Link href='/#skills' className='a text-2xl text-slate-800 px-2 ml-3 transition hover:text-blue-700' style={{ fontFamily: 'system-ui' }}>Skills</Link>
                    <Link href='/#servies' className='a text-2xl text-slate-800 px-2 ml-3 transition hover:text-blue-700' style={{ fontFamily: 'system-ui' }}>Servies</Link>

                </nav>
            </header>
        </>
    )
}