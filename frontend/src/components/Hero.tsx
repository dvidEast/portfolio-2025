export default function Hero() {
    return(
        <>  
            <main 
                className={`h-screen flex flex-col justify-center items-center px-4 text-center opacity-0 animate-fade-slide-in`}
            >   
                <p className={'text-2xl'}>
                    SOFTWARE DEVELOPER
                </p>

                <br />

                <h1 className={'text-center font-bold text-4xl max-w-140 opacity-0 animate-fade-in'}>
                    — Hi! I&apos;m David, a software developer and student @ UBC, Vancouver.
                </h1>
                
                <span className="mt-20 text-2xl inline-block rotate-90 animate-bounce-slow">{'>'}</span>
            </main>
        </>
    )
}