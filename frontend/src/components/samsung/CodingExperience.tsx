"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function CodingExperienceSection({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "coding-experience";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-40 bg-gray-100"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Coding Experience</h2>

                <p className="text-gray-700 mb-8 text-m">
                    I’ve contributed to full-stack projects across web and mobile platforms using{" "}
                    <span className="font-semibold text-black">TypeScript, JavaScript, HTML, CSS, and React</span>. My work spans{" "}
                    <span className="font-semibold text-black">UI/UX design, data integrations, content pipelines</span>, and{" "}
                    <span className="font-semibold text-black">SEO analytics</span> via tools like{" "}
                    <span className="font-semibold text-black">Google Analytics</span> and{" "}
                    <span className="font-semibold text-black">Semrush</span>, always aligned with{" "}
                    <span className="font-semibold text-black">business goals and stakeholder needs</span>.
                </p>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden border border-[#D3D3D3] hover:shadow-lg transition-shadow"
                        >
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xs font-semibold text-gray-600 uppercase mb-1">
                                    {project.title.toUpperCase()}
                                </h3>
                                <h2 className="text-lg font-bold text-black mb-2">
                                    {project.description}
                                </h2>
                                {project.tech && (
                                    <p className="text-sm text-gray-500 italic mb-2">
                                        Tech used: {project.tech}
                                    </p>
                                )}
                                <div className="flex items-center gap-4 mt-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-5 h-5 hover:text-gray-600 transition" />
                                        </a>
                                    )}
                                    {project.devpost && (
                                        <a
                                            href={project.devpost}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-5 h-5 hover:text-gray-600 transition" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const projects = [
    {
        title: "StormHacks 2024 – Winner",
        image: "/project_images/kings_craft.png",
        description: "Kings Craft – Predicting 3D objects from 2D images using photogammetry and ML.",
        tech: "ReactJS, AWS, JavaScript, HTML, CSS",
        github: "https://github.com/koh3n/KINGSCRAFT",
        devpost: "https://devpost.com/software/kings-craft",
    },
    {
        title: "School Project",
        image: "/project_images/donuts.png",
        description: "Donut Date – Matchmaking app for small group and 1-on-1 meetups.",
        tech: "React, TypeScript, Node.js, Oracle, SQL, Express, HTML, CSS",
        github: "https://github.com/naijwu/donut",
    },
    {
        title: "nwHacks 2024",
        image: "/project_images/panda_ai.png",
        description: "PandAI – Tracks hand motion to reduce phone usage with ML.",
        tech: "Python, TensorFlow, React, JavaScript, HTML, CSS",
        github: "https://github.com/dvidEast/nwHacks-Panda",
        devpost: "https://devpost.com/software/pandai",
    },
];
