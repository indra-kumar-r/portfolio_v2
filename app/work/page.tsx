import { WORK } from '../constants';

export default function WorkPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl font-bold">Work Experience</h1>

            {WORK.map((job, index) => (
                <div key={index} className="rounded-lg border p-6 space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">{job.role}</h2>
                        <p className="text-gray-700 font-medium">
                            {job.company} · {job.location}
                        </p>
                        <p className="text-sm text-gray-500">
                            {job.from} – {job.to}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-sm px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {job.responsibilities.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
