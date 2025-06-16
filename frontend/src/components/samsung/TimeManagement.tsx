"use client";

import { useEffect } from "react";

export default function TimeManagementSection({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "time-and-priority-management";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-16 border-t bg-white mb-400"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Time and Work Management</h2>
                <p className="text-gray-700 mb-4 text-lg">
                Relevant technical and strategic projects.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Major in Mathematics</li>
                <li>Minor in Data Science</li>
                <li>Samsung SEO ML Project</li>
                <li>Churn Rate Analytics</li>
                </ul>
            </div>
        </section>
    );
}
