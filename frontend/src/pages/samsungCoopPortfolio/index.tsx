"use client";

import { useEffect, useRef, useState } from "react";
import SamsungHero from "@/components/samsung/SamsungHero";
import DataScienceSection from "@/components/samsung/DataScience";
import CodingExperienceSection from "@/components/samsung/CodingExperience";
import FigmaDesignWorkSection from "@/components/samsung/FIgmaDesign";

type Section = {
    title: string;
    description: string;
    items: string[];
};

const sections: Section[] = [
    {
        title: "Main",
        description: "Portfolio home.",
        items: [],
    },
    {
        title: "Data Science / Analytics",
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
        title: "Figma Design Work",
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

export default function SamsungCoopPortfolio() {
    const [activeSection, setActiveSection] = useState<string>("");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const [tocOpen, setTocOpen] = useState(false);

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

        const elements = Object.values(sectionRefs.current);
        elements.forEach((el) => el && observer.observe(el));

        return () => {
        elements.forEach((el) => el && observer.unobserve(el));
        };
    }, []);

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
                className={`fixed top-1/3 cursor-pointer right-0 z-50 transform -translate-y-1/2 bg-[#292929] text-white text-m font-bold tracking-wide rounded-l-lg shadow-md hover:bg-[#2a2a2a] ${tocOpen ? "translate-x-full" : "translate-x-0"}`}
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
                            const id = section.title.toLowerCase().replace(/\s+/g, "-");
                            const isActive = activeSection === id;
                            return (
                                <li key={section.title}>
                                    <a
                                        href={`#${id}`}
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