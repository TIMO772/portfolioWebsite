import '../css/Mobilescreen.css'
export default function Servies() {
    return (
        <>
            <section className="flex flex-col items-center bg-white w-full" style={{height : '60vh'}} id="servies">
                <h1 className="text-6xl font-bold mt-1 text-slate-950" style={{ fontFamily: 'system-ui' }}>Servei<span className=" text-cyan-600">s</span></h1>
                <h1 className=' text-zinc-500 text-base mt-4'>More Servies Availble</h1>
                <div className="flex justify-center items-center w-full">
                    <div className=" flex flex-col items-center w-96 h-80 shadow-2xl rounded-2xl bg-zinc-950 opacity-70 transition hover:opacity-100 hover:-translate-y-6 mt-20 mr-16">
                        <h1 className=" font-extrabold text-3xl mt-5">Web Devoloping</h1>
                        <p className="mr text-xl w-11/12 font-semibold mt-5">I will design and develop a website for you with a consistent, organized design that is compatible with all devices. 
                            Whether it is a regular website or a web application with a database, 
                            such as a commercial website.</p>
                    </div>
                    <div className=" flex flex-col items-center w-96 h-80 shadow-2xl rounded-2xl bg-zinc-950 opacity-70 transition hover:opacity-100 hover:-translate-y-6 mt-20">
                        <h1 className=" font-extrabold text-3xl mt-5">Coding Scripts</h1>
                        <p className="mr text-xl w-11/12 font-semibold mt-5">I will write you consistent, understandable, and easy-to-use code. I will write the code for you in the programming 
                        language of your choice. Most programming languages ​​are available, such 
                        as JavaScript and Python.</p>
                    </div>
                </div>
            </section>
        </>
    )
}