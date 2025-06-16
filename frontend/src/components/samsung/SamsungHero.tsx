"use client";

import SamsungNavbar from "./SamsungNavbar";

export default function SamsungHero({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "main";

    return (
        <>  
            <SamsungNavbar />
            
            <section
                className="flex flex-col border-t border-[#D3D3D3] lg:flex-row gap-20 items-start justify-between px-6 md:px-20 py-20 bg-gradient-to-br from-white to-gray-100"
                id={id}
                ref={(el) => {
                    if (el) sectionRefs.current[id] = el;
                }}
            >
                <div className="w-full max-w-screen-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Hello to the hiring team at Samsung R&D Vancouver!
                    </h1>
                    <div className="text-lg space-y-4">
                        <p>I’m David and I’m excited to show you some of my work with you.</p>
                        <p>
                        While I was thinking about which links and portfolios to send over, I realized that none of
                        them truly captured everything in one place.
                        </p>
                        <p>
                        So I created this page to highlight the most relevant work in a format that’s easy to skim
                        quickly, but also provides the depth needed if you want to explore further.
                        </p>
                        <p>
                        I built this within a day to not only demonstrate the work itself, but also showcase my ability
                        to design, code, and move fast.
                        </p>
                        <p>
                        Rather than just following the job description, I reflected on our interviews and the moments
                        that seemed to catch your interest.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block w-full max-w-md mb-10 lg:mb-0">
                    <img
                        src="/samsung/samsung-building.jpeg"
                        alt="Samsung Hero"
                        className="rounded-full w-full"
                    />
                </div>
            </section>
        </>
    );
}

