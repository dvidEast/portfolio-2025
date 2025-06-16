"use client";
import Image from "next/image";

export default function ArtworkForSamsung({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) {
    const id = "creativity";

    return (
        <section
            id={id}
            ref={(el) => {
                if (el) sectionRefs.current[id] = el;
            }}
            className="px-6 md:px-20 py-40"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Creative Works</h2>
                <p className="text-gray-700 mb-10 text-lg">
                    Art has always been more than a creative outlet for me — it sharpens the way I approach design, communication, and user experience in my technical work. Whether I’m wireframing an interface, presenting a product vision, or writing documentation, my background in visual storytelling helps me communicate ideas clearly and intuitively. This section highlights some of the pieces that have shaped how I think, create, and connect with others.
                </p>
                
                <main className="p-6 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                    {artworks.map((art, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-gradient-to-br from-white to-neutral-50 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-t-3xl overflow-hidden bg-white">
                                <Image
                                    src={art.imageUrl}
                                    alt={art.title}
                                    layout="fill"
                                    objectFit="contain"
                                    className="object-contain"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="uppercase text-1xl font-semibold text-gray-900 mb-2 tracking-tight">
                                    {art.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">{art.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}

const artworks = [
    {
        title: "The Gaze",
        description: "A quiet study of presence—staring outward, yet deeply inward.",
        imageUrl: "/artwork/eye.jpg",
    },
    {
        title: "A Man Forgotten",
        description: "Character captured through beard, wrinkles, and silence.",
        imageUrl: "/artwork/beard.jpg",
    },
    {
        title: "Framed Growth",
        description: "Boxy edges meet delicate bloom. A portrait of quiet constraint.",
        imageUrl: "/artwork/box.jpg",
    },
    {
        title: "Gesture",
        description: "The tension of gesture—a hand mimicking form and force.",
        imageUrl: "/artwork/gun.jpg",
    },
    {
        title: "Renewal",
        description: "A sketch for a friend—soft light, clean lines, and new beginnings.",
        imageUrl: "/artwork/renew.jpg",
    },
    {
        title: "Flesh and Bone",
        description: "More than a skull—memento mori in black and white.",
        imageUrl: "/artwork/skull.jpg",
    },
    {
        title: "Crowded",
        description: "A mind in motion. Chaotic, beautiful, overfull.",
        imageUrl: "/artwork/thoughts.jpg",
    },
];