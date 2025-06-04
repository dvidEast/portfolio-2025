import Border from "./Border"

export default function Hackathons() {
    const hackathons = [
        {
            title: "STORMHACKS 2024",
            color: "bg-gray-300",
            description: "This is the first square's description.",
        },
        {
            title: "NWHACKS 2024",
            color: "bg-pink-200",
            description: "This is the second square's description.",
        },
        {
            title: "HOOTSUITE PRODUCT CHALLENGE",
            color: "bg-teal-500",
            description: "This is the third square's description.",
        },
    ];

    const personalProjects = [
        {
            title: "PERSONAL PORTFOLIO",
            color: "bg-pink-300",
            description: "This is the first square's description.",
            link: "https://github.com/dvidEast/portfolio-2025"
        },
        {
            title: "ID VERIFICATION API",
            color: "bg-gray-500",
            description: "This is the third square's description.",
            link: "https://github.com/dvidEast/ID-Verification-API"
        },
    ];

    const schoolProjects = [
        {
            title: "SAUCE THE AUX",
            color: "bg-blue-300",
            description: "This is the first square's description.",
        },
        {
            title: "DONUTS",
            color: "bg-red-200",
            description: "This is the second square's description.",
        },
        {
            title: "WEATHER CLASSIFICATION",
            color: "bg-green-500",
            description: "This is the third square's description.",
        },
    ];

    return(
        <main>
            <Border sectionTitle="HACKATHONS" textOnLeft={false} />

            <section className="mt-5 mb-12 flex flex-wrap">
                {hackathons.map((item, idx) => (
                    <div key={idx} className="w-1/3 flex flex-col">
                        {/* Square box */}
                        <div
                            className={`relative w-[100%] pt-[100%] ${item.color} group overflow-hidden`}
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center text-sm p-4">
                                {item.description}
                            </div>
                        </div>

                        {/* Title below */}
                        <div className="pl-1 text-xs mt-2">
                            {item.title}
                        </div>
                    </div>
                ))}
            </section>

            <Border sectionTitle="PERSONAL PROJECTS" textOnLeft={true} />

            <section className="mt-5 mb-12 flex flex-wrap">
                {personalProjects.map((item, idx) => (
                    <div key={idx} className="w-1/3 flex flex-col">
                        {/* Square box */}
                        <div
                            className={`relative w-[100%] pt-[100%] ${item.color} group overflow-hidden`}
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[white] bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-200 flex items-center justify-center text-[#292a2c] text-center text-sm p-4">
                                {item.description}
                            </div>
                        </div>

                        {/* Title below */}
                        <div className="pl-1 text-xs mt-2">
                            {item.title}
                        </div>
                    </div>
                ))}
            </section>

            <Border sectionTitle="SCHOOL PROJECTS" textOnLeft={false}/>

            <section className="mt-5 mb-12 flex flex-wrap">
                {schoolProjects.map((item, idx) => (
                    <div key={idx} className="w-1/3 flex flex-col">
                        {/* Square box */}
                        <div
                            className={`relative w-[100%] pt-[100%] ${item.color} group overflow-hidden`}
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center text-sm p-4">
                                {item.description}
                            </div>
                        </div>

                        {/* Title below */}
                        <div className="pl-1 text-xs mt-2">
                            {item.title}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}