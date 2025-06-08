import Border from "./Border";
import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <Border sectionTitle="MY STORY" textOnLeft={true} />

            <section
                className="w-full mt-25 mb-25 flex items-center justify-center timeline-item"
                ref={sectionRef}
                style={{ transitionDelay: `${100}ms` }}
            >
                <div className="max-w-5xl flex flex-col gap-y-7">
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
                        Besides coding I spend my time on anything <span className='text-[#ffb969]'>music or <a className="underline" href="https://vsco.co/dvidlimm/gallery#google_vignette" target="_blank" rel="noopener noreferrer" aria-label="Vsco">art</a>, going to the gym, or cooking!</span>
                    </div>
                </div>
            </section>
        </>
    );
}