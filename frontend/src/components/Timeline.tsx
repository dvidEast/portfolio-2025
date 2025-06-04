
import Border from "@/components/Border";

export default function Timeline() {
    const timeline = [
        {
            title: "BSc MATHEMATICS, MINOR DATA SCIENCE",
            subtitle: "University of British Columbia",
            date: "2021 – Now",
            bulletColor: "bg-yellow-400",
            details: [
                "Science Undergraduate Society (SUS)",
                "SUS Associate Vice President Communications (2024–2025)",
                "SUS Development Lead (2024–2025)",
                "SUS Media Lead (2023–2024)",
                "SUS Content Writer (2022–2023)",
                "SUS Events Lead (2022)",
            ],
        },
        {
            title: "APPLIED AI / SOFTWARE ENGINEER",
            subtitle: "DraapeAI (Startup)",
            date: "2024 – 2024",
            bulletColor: "bg-pink-400",
            details: [
                "Engineered a machine learning model to automate garment pattern generation, reducing manual labor by 60%.",
                "Built a computer vision system to estimate body measurements from user-submitted images with 92% average accuracy.",
                "Developed a mobile app in React Native to capture user images and deliver personalized pattern previews, enabling real-time feedback and enhancing the user experience.",
                "Created an interactive web application in TypeScript and React, integrating the pattern generation ML model for end-to-end usage across mobile and web applications."
            ],
        },
        {
            title: "DEVELOPMENT LEAD",
            subtitle: "UBC Science Undergraduate Society",
            date: "2024 – 2024",
            bulletColor: "bg-blue-400",
            details: [
                "Led a team of 6 developers in building and maintaining the organization’s website using React (Next.js) in TypeScript, and Tailwind CSS, ensuring seamless functionality and modern UI/UX, providing accessibility and learning resources used by over 16,000 UBC undergraduate science students.",
                "Transitioned from Wordpress to a modular, component-driven React-based web application, utilizing React Hooks and Context API for state management, resulting in a 30% increase in user engagement."
            ],
        },
        {
            title: "SOFTWARE DEVELOPER",
            subtitle: "Freelance - 1 project(s) completed",
            date: "2024 - Now",
            bulletColor: "bg-red-400",
            details: [
                "Engineered a full-stack financial dashboard in React (Next.js) with built-in API routes, integrating sales data from Square, WordPress Events, and Eventbrite via RESTful APIs.",
                "Implemented robust data transformation and aggregation logic on the frontend using TypeScript, structuring inconsistent external data sources into unified, queryable formats.",
                "Optimized cross-platform user workflow by reducing navigation steps by over 70%, improving sales data accessibility through centralized dashboard UI components built with React Hooks and Tailwind CSS."
            ],
        },
    ];

    return (
        <section className="w-full px-4 py-8 text-white ">
            <Border sectionTitle="TIMELINE" textOnLeft={true}/>

            <div className="max-w-5xl mx-auto">

                <div className="relative border-l border-gray-600">

                {timeline.map((item, index) => (
                    <div key={index} className="ml-6 mb-12 relative">

                        {/* Bullet */}
                        <span
                            className={`absolute left-0 top-1.5 w-3 h-3 rounded-full  ${item.bulletColor}`}
                            style={{ transform: 'translateX(-250%)' }}
                        />
                        
                        {/* Content */}
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                
                                <p className="text-sm mb-4">{item.subtitle}</p>
                                {item.details.length > 0 && (
                                    <ul className="list-disc text-sm text-gray-400 ml-5 space-y-1">
                                    {item.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                    </ul>
                                )}
                            </div>

                            <p className="text-sm text-gray-400 whitespace-nowrap">{item.date}</p>
                        </div>

                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
