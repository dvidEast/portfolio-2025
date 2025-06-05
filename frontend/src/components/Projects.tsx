import Border from "./Border"
import { Github, ExternalLink } from "lucide-react";

interface ProjectListProps {
    projects: Project[]
}

interface Project {
    title: string;
    color: string;
    image: string;
    description: string;
    github: string;
    devpost?: string;
}

interface HackathonProject extends Project {
    devpost: string; // Required for hackathons
}

// interface PersonalProject extends Project {

// }

interface SchoolProject extends Project {
    courseCode?: string;
}


export default function Projects() {
    const hackathons: HackathonProject[] = [
        {
            title: "STORMHACKS 2024",
            color: "bg-[#00c6ba]",
            image: "/project_images/kings_craft.png",
            description: "Worked on the frontend design with NextJS + firebase authentication and data population.",
            devpost: "https://devpost.com/software/kings-craft",
            github: "https://github.com/koh3n/KINGSCRAFT"
        },
        {
            title: "NWHACKS 2024",
            color: "bg-[#f9f871]",
            image: "/project_images/panda_ai.png",
            description: "Worked on the frontend design with Figma and React + data pipeline and backend integration with ExpressJS.",
            devpost: "https://devpost.com/software/pandai",
            github: "https://github.com/dvidEast/nwHacks-Panda"
        },
        {
            title: "HOOTSUITE PRODUCT CHALLENGE",
            color: "bg-orange-300",
            image: "/project_images/hootsuite_product_challenge.png",
            description: "Worked on product strategy, UI/UX design in Figma, technical presentation slides, and pitch strategy.",
            devpost: "https://devpost.com/software/hootsuite-nest",
            github: ""
        }
    ];

    const personalProjects: Project[] = [
        {
            title: "PERSONAL PORTFOLIO",
            color: "bg-[#56574e]",
            image: "/project_images/portfolio_2025.png",
            description: "This website - built in NextJS, TypeScript, Tailwind.",
            github: "https://github.com/dvidEast/portfolio-2025"
        },
        {
            title: "SCIENCE UNDERGRADUATE SOCIETY MOCK WEBSITE",
            color: "bg-[#c2fcf2]",
            image: "/project_images/sus_mock.png",
            description: "Mock website for the Science Undergraduate Society to propose a new website - built with NextJS and Figma.",
            github: "https://github.com/dvidEast/ID-Verification-API"
        },
        {
            title: "JUST ONE DANCE",
            color: "bg-[#ffbb90]",
            image: "/project_images/just_dance.webp",
            description: "In development.",
            devpost: "",
            github: ""
        }
    ];

    const schoolProjects: SchoolProject[] = [
        {
            title: "SAUCE THE AUX",
            color: "bg-blue-300",
            image: "/project_images/sauce_the_aux.jpg",
            description: "Full-stack CRUD application built in Java using OOP techniques and testing with JUnit.",
            github: "https://github.com/dvidEast/SauceTheAux",
            courseCode: "CPSC 210 - Software Construction (OOP in Java)"
        },
        {
            title: "DONUTS",
            color: "bg-red-200",
            image: "/project_images/donuts.png",
            description: "Full-stack PWA built in NextJS with Typescript and Node.js backend using the oracledb driver.",
            github: "https://github.com/naijwu/donut",
            courseCode: "CPSC 304 - Relational Databases"
        },
        {
            title: "WEATHER CLASSIFICATION",
            color: "bg-[#c4c5bb]",
            image: "/project_images/weather_classification.webp",
            description: "KNN classification and analysis in R.",
            github: "https://github.com/dvidEast/dsci_weather_classification",
            courseCode: "DSCI 100 - Intro to Data Science (R)"
        },
    ];

    console.log(hackathons.length)

    return(
        <main>
            <Border sectionTitle="HACKATHONS" textOnLeft={false} />

            <ProjectList projects={hackathons}/>

            <Border sectionTitle="SCHOOL PROJECTS" textOnLeft={true} />

            <ProjectList projects={schoolProjects}/>
            
            <Border sectionTitle="PERSONAL PROJECTS" textOnLeft={false}/>

            <ProjectList projects={personalProjects} />

        </main>
    )
}

function ProjectList({
    projects,
} : ProjectListProps) {
    return (
        <section className="mt-10 mb-12 flex flex-wrap">
            {projects.map((item, idx) => (
                <div key={idx} className={`w-1/3 flex flex-col`}>
                    {/* Square box */}
                    <div
                        className={`relative w-full pt-[100%] group overflow-hidden`}
                    >
                        {/* Image filling the square */}
                        <img
                            src={item.image} 
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div
                            className={`absolute inset-0 ${item.color} opacity-50 pointer-events-none`}
                        />


                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[white] bg-opacity-30 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-black text-center p-4">
                            {/* Description */}
                            <p className="mb-4 text-sm">{item.description}</p>

                            {/* Button Row */}
                            <div className="flex flex-row gap-6">
                                {/* GitHub */}
                                {item.github && (
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                >
                                    <Github className="w-6 h-6 hover:text-gray-300 cursor-pointer transition" />
                                </a>
                                )}

                                {/* Devpost */}
                                {item.devpost && (
                                <a
                                    href={item.devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                >
                                    <ExternalLink className="w-6 h-6 hover:text-gray-300 cursor-pointer transition" />
                                </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Title below */}
                    <div className="pl-1 text-xs mt-2">{item.title}</div>
                </div>
            ))}
        </section>
    )
}