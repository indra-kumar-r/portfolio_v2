import { PROJECTS } from '../constants';

export default function ProjectsPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl font-bold">Projects</h1>

            {PROJECTS.map((project, index) => (
                <div key={index} className="rounded-lg border p-6 space-y-4">
                    <h2 className="text-xl font-semibold">{project.title}</h2>

                    <p className="text-gray-700">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-sm px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {project.highlights.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>

                    <div className="flex gap-4 pt-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}
