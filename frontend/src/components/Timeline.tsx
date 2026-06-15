import { useEffect, useRef } from 'react';
import Border from "@/components/Border";

export default function Timeline() {
    const timeline = [
        {
            title: "BSc MATHEMATICS, MINOR DATA SCIENCE",
            subtitle: "University of British Columbia",
            date: "Sept 2021 – Now",
            bulletColor: "bg-yellow-400",
            details: [
                "Science Undergraduate Society (SUS) ->",
                "SUS Associate Vice President Communications (2024–2025)",
                "SUS Development Lead (2024–2025)",
                "SUS Media Lead (2023–2024)",
                "SUS Content Writer (2022–2023)",
                "SUS Events Lead (2022)",
            ],
        },
        {
            title: "SOFTWARE DEVELOPER CO-OP",
            subtitle: "SAP",
            date: "May 2026 – Now",
            bulletColor: "bg-sky-300",
            details: [
            ],
        },
        {
            title: "SECURITY SOFTWARE ENGINEER CO-OP",
            subtitle: "SAP",
            date: "Sept 2025 – April 2026",
            bulletColor: "bg-blue-400",
            details: [
                "Developed automation pipelines in Python, integrating SAST and OSS security scanners, and enabling continuous vulnerability reporting using Dockerized Jenkins agents for over 180 microservices and libraries across SAP.",
                "Led the development of an automated “early-warning” security ticket alert system that surfaced high-risk alerts in real-time, reducing overdue tickets by 50% and improving SLA compliance benchmarks.",
                "Conducted application security reviews by validating SAST-detected vulnerabilities across existing codebases.",
                "Performed debugging on application scanning pipeline errors, ensuring accurate vulnerability classification and reducing application scanning pipeline errors by 25%.",
                "Performed vulnerability analysis using BurpSuite to investigate race conditions in application features, producing remediation recommendations for respective code owners.",
                "Published structured vulnerability findings to SQL databases to support security analytics teams.",
                "Coordinated with KPI analytics, and global security teams to plan and execute annual security review cycles."
            ],
        },
        {
            title: "SOFTWARE DEVELOPMENT LEAD",
            subtitle: "UBC Science Undergraduate Society",
            date: "Jun 2024 – Now",
            bulletColor: "bg-purple-400",
            details: [
                "Managed a team of 10 to design, build, and maintain the organization’s website using React (Next.js), TypeScript, and Figma, demonstrating strong team collaboration, technical proficiency, and leadership.",
                "Overhauled website to better deliver resources for 16,000+ science students, resulting in a 30% increase in user engagement.",
                "Developed the team’s Git workflow and CI/CD pipelines in Github Actions, ensured code reviews for quality, and maintained documentation for current and future development."
            ],
        },
        {
            title: "SOFTWARE DEVELOPER",
            subtitle: "Trickster's Hideout",
            date: "Mar 2025 - Apr 2025",
            bulletColor: "bg-red-400",
            details: [
                "Contracted via Riipen to build a full-stack financial dashboard integrating sales data from Square, WordPress Events, and Eventbrite into a unified interface.",
                "Utilized Postman to test APIs and documented necessary data transformations for integration.",
                "Developed the application using React (Next.js) and RESTful APIs, implementing complex data transformation and aggregation logic in TypeScript to normalize inconsistent third-party data into structured, queryable formats.",
                "Enhanced cross-platform user workflow by reducing navigation steps by over 70%, improving sales data accessibility through centralized dashboard components built with React Hooks and Tailwind CSS."
            ],
        },
        {
            title: "SOFTWARE DEVELOPER",
            subtitle: "DraapeAI",
            date: "May 2024 – Aug 2024",
            bulletColor: "bg-pink-400",
            details: [
                "Developed a mobile app for a body measurement prediction system using React Native to capture user images and display body measurement data through a clean and accessible UI.",
                "Designed and implemented a responsive web application using React and TypeScript that integrated with the company’s ML pipeline, allowing users to generate and preview clothing patterns in real-time.",
                "Reduced image upload and measurement processing time by 6.4 seconds over the course of my tenure, resulting in a smoother and faster user experience."
            ],
        }
    ];

    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            });
        },
        {
            threshold: 0.1,
        }
        );

        itemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => {
        itemRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
        };
    }, []);

    return (
        <section className="w-full text-white">
            <Border sectionTitle="TIMELINE" textOnLeft={false} />

            <div className="mt-25 mb-25 max-w-5xl mx-auto px-8">
                <div className="relative border-l border-gray-600">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className="ml-6 mb-12 relative timeline-item"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Bullet */}
                            <span
                                className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ${item.bulletColor}`}
                                style={{ transform: 'translateX(-250%)' }}
                            />

                            {/* Content */}
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>

                                <p className="text-sm mb-4">{item.subtitle}</p>
                                {item.details.length > 0 && (
                                    <ul className="list-disc text-sm text-gray-300 ml-5 space-y-3">
                                    {item.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                    </ul>
                                )}
                                </div>

                                <p className="text-sm text-gray-400 whitespace-nowrap">
                                {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
