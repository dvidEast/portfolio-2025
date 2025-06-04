
export default function Timeline() {
    const timeline = [
        {
        title: "UNIVERSITY OF BRITISH COLUMBIA",
        subtitle: "BSc in Mathematics, Minor in Data Science",
        date: "2021 – Now",
        bulletColor: "bg-blue-400",
        details: [
            "Science Undergraduate Society",
            "Associate Vice President Communications (2024–2025)",
            "Development Lead (2024–2025)",
            "Media Lead (2023–2024)",
            "Content Writer (2022–2023)",
            "Events Lead (2022)",
        ],
        },
        {
        title: "DRAAPEAI",
        subtitle: "APPLIED AI / SOFTWARE ENGINEER",
        date: "2024–2024",
        bulletColor: "bg-pink-400",
        details: [],
        },
        {
        title: "UNIVERSITY OF BRITISH COLUMBIA",
        subtitle: "BSc in Mathematics, Minor in Data Science",
        date: "2021 – Now",
        bulletColor: "bg-neutral-200",
        details: [],
        },
        {
        title: "UNIVERSITY OF BRITISH COLUMBIA",
        subtitle: "BSc in Mathematics, Minor in Data Science",
        date: "2021 – Now",
        bulletColor: "bg-neutral-200",
        details: [],
        },
    ];

    return (
        <section className="w-full px-4 py-8 text-white bg-[#0e0e11] font-sans">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-sm text-gray-400 tracking-widest mb-6">TIMELINE</h2>
            <div className="relative border-l border-gray-600">
            {timeline.map((item, index) => (
                <div key={index} className="ml-6 mb-12 relative">
                {/* Bullet */}
                <span
                    className={`absolute -left-[11px] top-1.5 w-3 h-3 rounded-full border-2 border-black ${item.bulletColor}`}
                />
                {/* Content */}
                <div className="flex justify-between items-start gap-4">
                    <div>
                    <h3 className="font-bold text-white text-sm">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">{item.subtitle}</p>
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
