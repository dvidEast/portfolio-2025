"use client";

export default function PresentationCommunicationSection({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "presentation-and-communication";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-40 bg-gray-100"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Presentation and Communication</h2>
                <p className="text-gray-700 mb-10 text-lg max-w-3xl">
                    Across all my roles, I’ve taken pride in bridging technical execution with storytelling—ensuring that technical insights are clearly communicated to non-technical stakeholders, clients, and end users.
                </p>

                <div className="space-y-10">
                    {/* Hootsuite */}
                    <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Hootsuite Product Challenge</h3>
                        <p className="text-gray-700 text-md">
                            Led the presentation of a Gen Z-focused social media solution during Hootsuite’s product challenge. I guided product strategy and UI/UX design in Figma, delivering a high-impact pitch to executives that clearly communicated both user needs and market value. Our team earned <span className="font-semibold text-black">1st place</span> for clarity, innovation, and alignment with company goals.
                        </p>
                    </div>

                    {/* Trickster’s Hideout */}
                    <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Trickster’s Hideout</h3>
                        <p className="text-gray-700 text-md">
                            Acted as both developer and communicator by preparing integration guides, API documentation, and stakeholder updates for a full-stack financial dashboard. I ensured that technical decisions and system behavior were accessible to non-technical stakeholders, enabling faster feedback loops and implementation confidence.
                        </p>
                    </div>

                    {/* DraapeAI */}
                    <div>
                        <h3 className="text-xl font-semibold text-black mb-2">DraapeAI</h3>
                        <p className="text-gray-700 text-md">
                            Worked closely with the ML and product teams to explain data pipelines, model behavior, and system limitations in plain language. I helped align stakeholders by transforming complex model output into design-ready insights that could be used in UI copy, pattern previews, and onboarding documentation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
