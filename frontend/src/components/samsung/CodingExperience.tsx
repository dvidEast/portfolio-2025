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
            className="px-6 md:px-20 py-16 bg-gray-100 mb-40"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Coding Experience</h2>
                <p className="text-gray-700 mb-8 text-lg">
                Relevant technical and strategic projects.
                </p>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, idx) => (
                    <div
                    key={idx}
                    className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-shadow"
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
                        <h2 className="text-xl font-bold text-black mb-3">
                        {project.description.substring(0, 50)}...
                        </h2>
                        <p className="text-sm text-gray-600 flex-grow">
                        {project.description}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
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
        title: "WEATHER CLAS",
        image: "/project_images/kings_craft.png",
        description:
        "ML application that takes 2D photos and generate 3D images (OBJ file) by generating unseen angles.",
        github: "https://github.com/koh3n/KINGSCRAFT",
        devpost: "https://devpost.com/software/kings-craft",
    },
    {
        title: "DONUTS",
        image: "/project_images/donuts.png",
        description:
        "Web app that facilitates small group and 1-on-1 meeting matches based on shared availability.",
        github: "https://github.com/naijwu/donut",
    },
    {
        title: "NWHACKS 2024",
        image: "/project_images/panda_ai.png",
        description: "ML application that tracks your hands to keep you off your phone.",
        github: "https://github.com/dvidEast/nwHacks-Panda",
        devpost: "https://devpost.com/software/pandai",
    },
];
