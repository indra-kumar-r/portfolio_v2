import { ABOUT, SKILLS } from './constants';

export default function Home() {
    return (
        <section className="space-y-10">
            <div className="space-y-3">
                <h1 className="text-3xl font-bold">{ABOUT.name}</h1>

                <p className="text-lg text-gray-700">{ABOUT.role}</p>

                <p className="text-gray-600">{ABOUT.summary}</p>

                <p className="text-sm text-gray-500">{ABOUT.location}</p>

                <div className="flex gap-4 pt-2">
                    {ABOUT.socials.github && (
                        <a
                            href={ABOUT.socials.github}
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            GitHub
                        </a>
                    )}
                    {ABOUT.socials.linkedin && (
                        <a
                            href={ABOUT.socials.linkedin}
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            LinkedIn
                        </a>
                    )}
                    {ABOUT.socials.email && (
                        <a
                            href={ABOUT.socials.email}
                            className="text-blue-600 hover:underline"
                        >
                            Email
                        </a>
                    )}
                </div>
            </div>

            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Skills</h2>

                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, index) => (
                        <span key={index} className="text-sm px-3 py-1 rounded">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
