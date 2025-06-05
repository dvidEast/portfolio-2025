import Border from "./Border"
import { Github, ExternalLink } from "lucide-react";

interface ProjectListProps {
    projects: Project[]
}

interface Project {
    title: string;
    color: string;
    titleColor: string;
    image: string;
    myRole?: string;
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
            color: "[#00c6ba]",
            titleColor: "text-teal-600",
            image: "/project_images/kings_craft.png",
            description: "ML application that takes 2D photos and generate 3D images (OBJ file) by generating unseen angles.",
            myRole: "Worked on the frontend design with NextJS + firebase authentication and data population.",
            devpost: "https://devpost.com/software/kings-craft",
            github: "https://github.com/koh3n/KINGSCRAFT"
        },
        {
            title: "NWHACKS 2024",
            color: "[#f9f871]",
            titleColor: "text-yellow-600",
            image: "/project_images/panda_ai.png",
            description: "ML application that tracks your hands to keep you off your phone.",
            myRole: "Worked on the frontend design with Figma and React + data pipeline and backend integration with ExpressJS.",
            devpost: "https://devpost.com/software/pandai",
            github: "https://github.com/dvidEast/nwHacks-Panda"
        },
        {
            title: "HOOTSUITE PRODUCT CHALLENGE",
            color: "orange-300",
            titleColor: "text-orange-600",
            image: "/project_images/hootsuite_product_challenge.png",
            description: "Proposed and presented a solution to Hootsuite executives for authentically engaging Gen Z audiences.",
            myRole: "Worked on product strategy, UI/UX design in Figma, technical presentation slides, and pitch strategy.",
            devpost: "https://devpost.com/software/hootsuite-nest",
            github: ""
        }
    ];

    const schoolProjects: SchoolProject[] = [
        {
            title: "SAUCE THE AUX",
            color: "blue-300",
            titleColor: "text-blue-600",
            image: "/project_images/sauce_the_aux.jpg",
            description: "Full-stack music app that organizes songs into playlists based on user-selected genres.",
            myRole: "Developed a CRUD application in Java with strong emphasis on object-oriented design and unit testing using JUnit.",
            github: "https://github.com/dvidEast/SauceTheAux",
            courseCode: "CPSC 210 - Software Construction (OOP in Java)"
        },
        {
            title: "DONUTS",
            color: "red-200",
            titleColor: "text-red-600",
            image: "/project_images/donuts.png",
            description: "Web app that facilitates small group and 1-on-1 meeting matches based on shared availability.",
            myRole: "Built full-stack PWA using Next.js, TypeScript, and Node.js; designed SQL schema and implemented backend queries with the oracledb driver.",
            github: "https://github.com/naijwu/donut",
            courseCode: "CPSC 304 - Relational Databases"
        },
        {
            title: "WEATHER CLASSIFICATION",
            color: "[#c4c5bb]",
            titleColor: "text-grey-600",
            image: "/project_images/weather_classification.webp",
            description: "Used machine learning to predict weather outcomes based on features from a Kaggle weather dataset.",
            myRole: "Implemented K-Nearest Neighbors (KNN) classification and performed data analysis in R.",
            github: "https://github.com/dvidEast/dsci_weather_classification",
            courseCode: "DSCI 100 - Intro to Data Science (R)"
        }
    ];

    const personalProjects: Project[] = [
        {
            title: "PERSONAL PORTFOLIO",
            color: "[#56574e]",
            titleColor: "text-grey-600",
            image: "/project_images/portfolio_2025.png",
            description: "My professional portfolio with experience, projects, and skillset.",
            myRole: "Built in NextJS, TypeScript, and Tailwind.",
            github: "https://github.com/dvidEast/portfolio-2025"
        },
        {
            title: "SCIENCE UNDERGRADUATE SOCIETY MOCK WEBSITE",
            color: "[#c2fcf2]",
            titleColor: "text-blue-600",
            image: "/project_images/sus_mock.png",
            description: "Mock website for the Science Undergraduate Society to propose a new website.",
            myRole: "Built with NextJS.",
            github: "https://github.com/dvidEast/ID-Verification-API"
        },
        {
            title: "JUST ONE DANCE",
            color: "[#ffbb90]",
            titleColor: "text-pink-600",
            image: "/project_images/just_dance.webp",
            description: "In development.",
            myRole: "Built with NextJS, Typescript, Tailwind, with backend in Flask and hosted on AWS.",
            devpost: "",
            github: ""
        }
    ];

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
        <section className="mt-20 mb-30 flex flex-wrap">
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
                            className={`absolute inset-0 bg-${item.color} opacity-50 pointer-events-none`}
                        />


                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[white] bg-opacity-30 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-center items-center text-black p-4">
                            {/* Description */}

                            <div className="">
                                <h1 className={`${item.titleColor} font-bold text-lg mb-4`}>{item.title}</h1>
                                <p className="font-medium">PROJECT: </p>
                                <p className="mb-4">{item.description}</p>
                                <p className="font-medium">MY CONTRIBUTIONS: </p>
                                {item.myRole && <p className="mb-4">{item.myRole}</p>}
                            </div>

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