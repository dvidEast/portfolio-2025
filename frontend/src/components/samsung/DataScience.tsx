"use client";

import { Github, ExternalLink } from "lucide-react";

export default function DataScienceSection({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "data-science,-seo-and-marketing";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-16 mb-40"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Data Science / Analytics</h2>
                <p className="text-gray-700 mb-8 text-lg">
                Relevant technical and strategic projects.
                </p>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="border-[#D3D3D3] flex flex-col bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-shadow"
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
        title: "WEATHER CLASSIFICATION",
        image: "/project_images/weather_classification.webp",
        description: "Used machine learning to predict weather outcomes based on features from a Kaggle weather dataset.",
        github: "https://github.com/dvidEast/dsci_weather_classification",
    },
    {
        title: "SCIENCE UNDERGRADUATE SOCIETY WEBSITE ANALYTICS / SEO",
        image: "/project_images/sus_mock.png",
        description: "Implemented Google Analytics to track and visualize user behavior, enabling data-driven iterations and performance monitoring. Led SEO optimization using Semrush to identify high-impact keywords, audit site structure, and benchmark performance. Combined technical implementation with strategic insight to enhance search visibility and drive meaningful engagement.",
    },
    {
        title: "DRAAPEAI",
        image: "/project_images/draapeAI.jpg",
        description: "Focused on the data science pipeline for a body measurement prediction system, where I collaborated on developing and refining machine learning models to infer accurate body dimensions from user images. Leveraged user input and image data to improve prediction accuracy, conducted error analysis, and optimized preprocessing steps.",
    },
];
