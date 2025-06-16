"use client";

import { useEffect, useRef, useState } from "react";
import SamsungHero from "@/components/samsung/SamsungHero";
import DataScienceSection from "@/components/samsung/DataScience";
import CodingExperienceSection from "@/components/samsung/CodingExperience";
import FigmaDesignWorkSection from "@/components/samsung/FIgmaDesign";
import PresentationCommunicationSection from "@/components/samsung/PresentationSection";
import ArtworkForSamsung from "@/components/samsung/SamsungArtwork";

type Section = {
    id: string,
    title: string;
    description: string;
};

const sections: Section[] = [
    {
        id: "main",
        title: "Main",
        description: "Portfolio home.",
    },
    {
        id: "data-science-analytics",
        title: "Data Science / Analytics",
        description: "Relevant technical and strategic projects.",
    },
    {
        id: "coding-experience",
        title: "Coding Experience",
        description: "Development work in production and academic settings.",
    },
    {
        id: "figma-design-work",
        title: "Figma Design Work",
        description: "UI/UX mockups for team projects.",
    },
    {
        id: "presentation-and-communication",
        title: "Presentation and Communication",
        description: "Bridging technical insights for non-tech audiences.",
    },
    {
        id: "creativity",
        title: "Creativity",
        description: "Personal artistic expression and design work.",
    },
];

export default function SamsungCoopPortfolio() {
    const [activeSection, setActiveSection] = useState<string>("");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const [tocOpen, setTocOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    const id = visible[0].target.getAttribute("id");
                    if (id && id !== activeSection) {
                        setActiveSection(id);
                    }
                }
            },
            {
                threshold: 0.5, 
                rootMargin: "0px 0px -20% 0px",
            }
        );

        const elements = Object.values(sectionRefs.current);
        elements.forEach((el) => el && observer.observe(el));

        return () => {
            elements.forEach((el) => el && observer.unobserve(el));
        };
    }, [activeSection]);



    return (
        <div className="bg-white text-black font-sans scroll-smooth">

            {/* Hero Section */}

            <TableOfContents
                sections={sections}
                activeSection={activeSection}
                tocOpen={tocOpen}
                setTocOpen={setTocOpen}
            />

            <SamsungHero sectionRefs={sectionRefs} />

            {/* Section Blocks */}
            <DataScienceSection sectionRefs={sectionRefs} />
            <CodingExperienceSection sectionRefs={sectionRefs} />
            <FigmaDesignWorkSection sectionRefs={sectionRefs} />
            <PresentationCommunicationSection sectionRefs={sectionRefs} />
            <ArtworkForSamsung sectionRefs={sectionRefs}/>

            <footer className="mb-6 flex flex-col gap-4 items-center justify-center">
                <p className="text-gray-400 text-sm">© David Lim. All rights reserved.</p>
            </footer>
        </div>
    );
}

// TOC component
function TableOfContents({
    sections,
    activeSection,
    tocOpen,
    setTocOpen,
}: {
    sections: Section[];
    activeSection: string;
    tocOpen: boolean;
    setTocOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <>
            {/* Vertical Toggle Tab */}
            <button
                onClick={() => setTocOpen((prev) => !prev)}
                className={`fixed top-1/2 cursor-pointer right-0 z-50 transform -translate-y-1/2 bg-[#292929] text-white text-m font-bold tracking-wide rounded-l-lg shadow-md hover:bg-[#2a2a2a] ${tocOpen ? "translate-x-full" : "translate-x-0"}`}
                style={{
                    writingMode: "vertical-rl",
                    whiteSpace: "nowrap",
                    height: "190px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                }}
            >
                Table of Contents
            </button>

            {/* TOC Panel */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 max-w-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
                    ${tocOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 pt-8 max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-gray-900">Table of Contents</h2>
                        <button
                            onClick={() => setTocOpen(false)}
                            className="text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                    </div>
                    <ul className="space-y-4 text-sm text-gray-700">
                        {sections.map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className={`block px-2 py-1 rounded transition-all duration-200 ${
                                    isActive
                                        ? "text-[#2138e3] font-semibold border-l-4 border-[#2138e3] bg-[#f0f4ff]"
                                        : "hover:text-[#1428A0] hover:bg-gray-100"
                                    }`}
                                >
                                    {section.title}
                                </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
