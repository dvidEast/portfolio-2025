import Border from "./Border"
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProjectListProps {
    projects: Project[],
    animationDirection?: "left" | "right";
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
            color: "bg-[#00c6ba]",
            titleColor: "text-teal-600",
            image: "/project_images/kings_craft.png",
            description: "ML application that takes 2D photos and generate 3D images (OBJ file) by generating unseen angles.",
            myRole: "Worked on the frontend design with NextJS + firebase authentication and data population.",
            devpost: "https://devpost.com/software/kings-craft",
            github: "https://github.com/koh3n/KINGSCRAFT"
        },
        {
            title: "NWHACKS 2024",
            color: "bg-[#f9f871]",
            titleColor: "text-yellow-600",
            image: "/project_images/panda_ai.png",
            description: "ML application that tracks your hands to keep you off your phone.",
            myRole: "Worked on the frontend design with Figma and React + data pipeline and backend integration with ExpressJS.",
            devpost: "https://devpost.com/software/pandai",
            github: "https://github.com/dvidEast/nwHacks-Panda"
        },
        {
            title: "HOOTSUITE PRODUCT CHALLENGE",
            color: "bg-orange-300",
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
            color: "bg-blue-300",
            titleColor: "text-blue-600",
            image: "/project_images/sauce_the_aux.jpg",
            description: "Full-stack music app that organizes songs into playlists based on user-selected genres.",
            myRole: "Developed a CRUD application in Java with strong emphasis on object-oriented design and unit testing using JUnit.",
            github: "https://github.com/dvidEast/SauceTheAux",
            courseCode: "CPSC 210 - Software Construction (OOP in Java)"
        },
        {
            title: "DONUTS",
            color: "bg-red-200",
            titleColor: "text-red-600",
            image: "/project_images/donuts.png",
            description: "Web app that facilitates small group and 1-on-1 meeting matches based on shared availability.",
            myRole: "Built full-stack PWA using Next.js, TypeScript, and Node.js; designed SQL schema and implemented backend queries with the oracledb driver.",
            github: "https://github.com/naijwu/donut",
            courseCode: "CPSC 304 - Relational Databases"
        },
        {
            title: "WEATHER CLASSIFICATION",
            color: "bg-[#c4c5bb]",
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
            color: "bg-[#56574e]",
            titleColor: "text-grey-600",
            image: "/project_images/portfolio_2025.png",
            description: "My professional portfolio with experience, projects, and skillset.",
            myRole: "Built in NextJS, TypeScript, and Tailwind.",
            github: "https://github.com/dvidEast/portfolio-2025"
        },
        {
            title: "SCIENCE UNDERGRADUATE SOCIETY MOCK WEBSITE",
            color: "bg-[#c2fcf2]",
            titleColor: "text-blue-600",
            image: "/project_images/sus_mock.png",
            description: "Mock website for the Science Undergraduate Society to propose a new website.",
            myRole: "Built with NextJS.",
            github: "https://github.com/dvidEast/ID-Verification-API"
        },
        {
            title: "JUST ONE DANCE",
            color: "bg-[#ffbb90]",
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

            <ProjectList projects={hackathons} animationDirection="left"/>

            <Border sectionTitle="SCHOOL PROJECTS" textOnLeft={true}/>

            <ProjectList projects={schoolProjects} animationDirection="right"/>
            
            <Border sectionTitle="PERSONAL PROJECTS" textOnLeft={false}/>

            <ProjectList projects={personalProjects} animationDirection="left"/>
        </main>
    )
}

function ProjectList({
    projects,
    animationDirection = "left",
}: ProjectListProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [tappedIndex, setTappedIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animationClass =
        animationDirection === "left"
            ? "animate-slide-in-left"
            : "animate-slide-in-right";

    return (
        <section
            ref={sectionRef}
            className={`mt-20 mb-30 flex flex-wrap ${animationClass} ${isVisible ? "visible" : ""}`}
        >
            {projects.map((item, idx) => {
                const isTapped = tappedIndex === idx;

                return (
                    <div key={idx} className="w-1/3 flex flex-col">
                        {/* Square box */}
                        <div
                            className="relative w-full pt-[100%] group overflow-hidden"
                            onClick={() => {
                                // Toggle tap state on mobile
                                setTappedIndex(isTapped ? null : idx);
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div
                                className={`absolute inset-0 ${item.color} opacity-45 pointer-events-none`}
                            />

                            <div
                                className={`
                                    absolute inset-0 bg-[white] bg-opacity-30
                                    transition-opacity duration-300 flex flex-col justify-center items-center text-black p-4 overflow-y-auto
                                    ${
                                        isTapped
                                            ? "opacity-95"
                                            : "opacity-0 md:opacity-0 md:group-hover:opacity-95"
                                    }
                                `}
                            >
                                <div className="max-h-full overflow-y-auto text-left">
                                    <h1
                                        className={`${item.titleColor} font-bold ${isTapped ? 'text-sm' : 'text-lg'} mb-6`}
                                    >
                                        {item.title}
                                    </h1>
                                    <p className={`${isTapped ? 'text-sm' : 'text-lg'} mb-4 font-bold`}>PROJECT:</p>
                                    <p className={`${isTapped ? 'text-sm' : 'text-lg'} mb-4`}>{item.description}</p>
                                    <p className={`${isTapped ? 'text-sm' : 'text-lg'} mb-4 font-bold`}>MY CONTRIBUTIONS:</p>
                                    {item.myRole && <p className={`${isTapped ? 'text-sm' : 'text-lg'} mb-4`}>{item.myRole}</p>}

                                    <div className="flex flex-row gap-6 mt-4 justify-center">
                                        {item.github && (
                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative group"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github className="w-6 h-6 hover:text-gray-300 cursor-pointer transition" />
                                            </a>
                                        )}

                                        {item.devpost && (
                                            <a
                                                href={item.devpost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative group"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className="w-6 h-6 hover:text-gray-300 cursor-pointer transition" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title below */}
                        <div className="pl-1 text-xs mt-2">{item.title}</div>
                    </div>
                );
            })}
        </section>
    );
}
