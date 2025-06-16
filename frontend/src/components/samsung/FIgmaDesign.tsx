"use client";

import { ExternalLink } from "lucide-react";

export default function FigmaDesignWorkSection({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "figma-design-work";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-40 bg-gradient-to-br from-white to-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Figma / Design Work</h2>
                <p className="text-gray-700 mb-12 text-lg max-w-3xl">
                    I specialize in clean, modern UI design with a focus on accessibility, responsive layout, and brand identity. I use <span className="font-semibold text-black">Figma</span> to create wireframes, mockups, and interactive prototypes that support developer handoff and iterative testing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {designs.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="p-5">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                                    {item.type}
                                </h3>
                                <h2 className="text-xl font-semibold text-black mb-3">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 text-sm mt-4 hover:underline"
                                    >
                                        View on Figma <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const designs = [
    {
        title: "Donuts Social App",
        type: "Branding / Mobile UI",
        image: "/project_images/donuts.png",
        description:
            "Created mockups for a student connection app with a Gen-Z aesthetic. Emphasized personalization, clean typography, and swipe-based interactions.",
        link: "https://www.figma.com/design/EcgTTvwZEsEmCmT3zDT7C5/UBC-Donut--Copy-?node-id=0-1&t=OZng1PBKSkdZ3wTL-1",
    },
    {
        title: "Hootsuite Hackathon Submission",
        type: "Presentation Mockup",
        image: "/project_images/hootsuite_product_challenge.png",
        description:
            "Designed the product interface shown at the Hootsuite Product Challenge. Prioritized storytelling through color, layout, and clear information flow.",
        link: "https://www.figma.com/proto/TcKKwrfVPJs8Pdx0OhgP4I/Hootsuite-Nest?node-id=0-1&t=TZSaSNz9KqBdUBSw-1",
    },
    {
        title: "SUS Website Redesign",
        type: "Responsive UI / Figma Prototype",
        image: "/project_images/sus_mock.png",
        description:
            "Redesigned the Science Undergraduate Society website to modernize the interface and streamline navigation. Focused on mobile-first layout and consistent visual language.",
        link: "https://www.figma.com/design/A3pYclBHr43mbJGirYjLZI/SUS-Markup?node-id=0-1&t=VrpvZwbxIDGWDZ1g-1",
    },
];
