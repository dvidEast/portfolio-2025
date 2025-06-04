import Border from "./Border"

export default function TechnicalSkills() {
    const skills = [
        {
            type: "LANGUAGES",
            list: [
                "Python", "JavaScript", "Typescript", "Java", "C++", "SQL", "R", "ReactJS", "HTML", "CSS"
            ]
        },
        {
            type: "DB",
            list: [
                "MySQL", "Firebase"
            ]
        },
        {
            type: "TESTING",
            list: [
                "Jest", "JUnit", "Postman Collections", "GitLab", "Selenium"
            ]
        },
        {
            type: "DEV TOOLS",
            list: [
                "Git", "GitHub", "Docker", "AWS", "Jupyter", "Postman"
            ]
        },
        {
            type: "FRAMEWORKS / LIBRARIES",
            list: [
                "Pandas", "NumPy", "Matplotlib", "Tensorflow", "Scikit-learn", "NodeJS"
            ]
        }
    ]

    return (
        <section className="w-full mb-10">
            <Border sectionTitle="TECHNICAL SKILLS" textOnLeft={false} />

            <div className="px-6 py-10 mt-10">
                <div className="max-w-4xl mx-auto text-left space-y-7">
                    {skills.map((skill) => (
                    <div
                        key={skill.type}
                        className="flex flex-col sm:flex-row sm:items-start flex-wrap gap-y-2"
                    >
                        {/* Skill Type */}
                        <span className="sm:w-48 font-bold underline">{skill.type}</span>

                        {/* Skill Items */}
                        <div className="flex flex-wrap gap-x-2 text-gray-300">
                        {skill.list.map((item, index) => (
                            <>
                                {index !== 0 && <span className="text-gray-500">/</span>}
                                <span className="whitespace-nowrap">{item}</span>
                            </>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}