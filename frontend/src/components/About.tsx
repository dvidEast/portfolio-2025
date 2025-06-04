import Border from "./Border";

export default function About() {
    return(
        <>
            <Border sectionTitle="MY STORY" textOnLeft={true} />

            <section className="w-full mt-15 mb-15 flex items-center justify-center">
                <div className='max-w-5xl flex flex-col gap-y-7'>
                    <div className="px-6">
                        Hi, I&apos;m David 👋 
                    </div>

                    <div className="px-6">
                        I&apos;m currently <span className='text-[#38ad8f]'>pursuing software engineering roles</span> to build a strong technical foundation and better understand how great products are built from the ground up.
                    </div>

                    <div className="px-6">
                        My long-term goal is to <span className='text-[#0097ff]'>move into software or product management</span>, where I can lead teams in building impactful solutions at scale.
                    </div>

                    <div className="px-6">
                        One of my long-term career goals is using data science and technology to <span className='text-[#cf9eab]'>address large-scale economic and societal challenges — like South Korea&apos;s declining birth rate</span> — and designing solutions that are not only functional, but sustainable and people-first.
                    </div>
                </div>
            </section>
        </>
    )
}