import Navbar from "./Navbar"

export default function Hero() {
    return(
        <>  
            <Navbar />
            <main 
                className={`h-screen flex flex-col justify-center items-center px-4 text-center`}
            >   
                <p className={'text-2xl'}>
                    SOFTWARE DEVELOPER
                </p>

                <br />

                <h1 className={'text-center font-bold text-4xl max-w-160'}>
                    — Hi! I'm David, a software developer and student @ UBC, studying math and data science
                </h1>
                
            </main>
        </>
    )
}