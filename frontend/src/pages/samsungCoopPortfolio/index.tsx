"use client";

import { useEffect, useState, useRef } from "react";
import SamsungNavbar from "@/components/SamsungNavbar";
import Image from "next/image";

type Section = {
    title: string;
    description: string;
    items: string[];
};

export default function SamsungCoopPortfolio() {
    const [activeSection, setActiveSection] = useState<string>("");

    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting && id) {
                setActiveSection(id);
            }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0.1,
        }
        );

        const sectionElements = Object.keys(sectionRefs.current).map(
        (id) => sectionRefs.current[id]
        );

        sectionElements.forEach((el) => {
        if (el) observer.observe(el);
        });

        return () => {
        sectionElements.forEach((el) => {
            if (el) observer.unobserve(el);
        });
        };
    }, []);

    return (
        <div className="bg-white text-black font-sans scroll-smooth">
            <SamsungNavbar />

            {/* Hero + TOC */}
            <section className="flex flex-col border-t border-[#D3D3D3] lg:flex-row gap-12 items-start justify-between px-6 md:px-20 py-20 bg-gradient-to-br from-white to-gray-100">
                {/* TOC */}
                <TableOfContents sections={sections} activeSection={activeSection} />

                {/* Text + Optional Image */}
                <div className="w-full max-w-screen-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Hello to the hiring team at Samsung R&D Vancouver!
                    </h1>

                    {/* Hero Text */}
                    <div className="text-lg space-y-4">
                    <p>I’m David and I’m excited to show you some of my work with you.</p>
                    <p>
                        While I was thinking about which links and portfolios to send over, I realized that none of them
                        truly captured everything in one place.
                    </p>
                    <p>
                        So I created this page to highlight the most relevant work in a format that’s easy to skim quickly,
                        but also provides the depth needed if you want to explore further.
                    </p>
                    <p>
                        I built this within a day to not only demonstrate the work itself, but also showcase my ability to
                        design, code, and move fast.
                    </p>
                    <p>
                        Rather than just following the job description for what may be relevant, I reflected on our
                        interviews and the moments that seemed to catch your interest. Based on that, I organized my
                        portfolio into themes (see below)!
                    </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hidden lg:block w-full max-w-md mb-10 lg:mb-0">
                    <Image
                    src="/samsung/samsung-hero.png"
                    alt="Samsung Hero"
                    width={500}
                    height={500}
                    className="rounded-full"
                    />
                </div>
            </section>


            {/* Section Content */}
            {sections.map((section) => {
                const id = section.title.toLowerCase().replace(/\s+/g, "-");

                return (
                <section
                    key={section.title}
                    id={id}
                    ref={(el) => {
                        sectionRefs.current[id] = el;
                    }}
                    className="px-6 md:px-20 py-16 border-t bg-white"
                >
                    <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
                    <p className="text-gray-700 mb-4 text-lg">{section.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    </div>
                </section>
                );
            })}
        </div>
    );
}

// Page sections
const sections: Section[] = [
    {
        title: "Data Science, SEO and Marketing",
        description: "Relevant technical and strategic projects.",
        items: [
        "Major in Mathematics",
        "Minor in Data Science",
        "Samsung SEO ML Project",
        "Churn Rate Analytics",
        ],
    },
    {
        title: "Coding Experience",
        description: "Development work in production and academic settings.",
        items: [
        "SUS – Development Lead",
        "DraapeAI – Software Developer",
        "Trickster’s Hideout – Dev/PM",
        "KingsCraft, Donuts",
        ],
    },
    {
        title: "Time and Priority Management",
        description: "Organizing and managing cross-functional tasks.",
        items: ["Event planning", "SUS logistics", "Multiple project timelines"],
    },
    {
        title: "Writing (Blog Format)",
        description: "Clear and structured communication.",
        items: ["Medium Articles", "Documentation", "Meeting Notes"],
    },
    {
        title: "Photo and Video Editing",
        description: "Creative and technical use of multimedia.",
        items: ["Photos from high school", "Video from bio class"],
    },
    {
        title: "Figma / Design Work",
        description: "UI/UX mockups for team projects.",
        items: ["SUS", "Donuts", "Hootsuite"],
    },
    {
        title: "Presentation and Communication",
        description: "Bridging technical insights for non-tech audiences.",
        items: ["Hootsuite", "Trickster’s Hideout", "DraapeAI"],
    },
    {
        title: "Creativity",
        description: "Personal artistic expression and design work.",
        items: ["Link to art portfolio 🎨"],
    },
];

function TableOfContents({
    sections,
    activeSection,
}: {
    sections: Section[];
    activeSection: string;
}) {
    const [visible, setVisible] = useState(true);
    const inactivityTimer = useRef<NodeJS.Timeout | null>(null); 

    useEffect(() => {
        const handleUserActivity = () => {
            setVisible(true);

            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current);
            }

            inactivityTimer.current = setTimeout(() => setVisible(false), 3000); 
        };

        window.addEventListener("scroll", handleUserActivity);
        window.addEventListener("mousemove", handleUserActivity);
        handleUserActivity();

        return () => {
            window.removeEventListener("scroll", handleUserActivity);
            window.removeEventListener("mousemove", handleUserActivity);
            if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
        };
    }, []);

    return (
        <aside
            className={`hidden lg:flex flex-col fixed right-20 top-55 w-60 max-h-[80vh] overflow-y-auto bg-white rounded-xl p-4 z-50 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
        <h2 className="text-base font-semibold mb-4 text-gray-900 tracking-wide">
            Relevant Experience
        </h2>

        <ul className="space-y-4 text-sm text-gray-600">
            {sections.map((section) => {
            const id = section.title.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeSection === id;
            return (
                <li key={section.title}>
                <a
                    href={`#${id}`}
                    className={`block px-2 py-1 rounded transition-all font-bold duration-300 ${
                    isActive
                        ? "text-[#2138e3] font-medium border-l-4 border-[#2138e3] bg-[#f0f4ff]"
                        : "hover:text-[#1428A0] hover:bg-gray-100"
                    }`}
                >
                    {section.title}
                </a>
                </li>
            );
            })}
        </ul>
        </aside>
    );
}