import { EDUCATION } from '../constants';

export default function EducationPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl font-bold">Education</h1>

            {EDUCATION.map((education, index) => (
                <div key={index} className="rounded-lg border p-5 space-y-2">
                    <h2 className="text-xl font-semibold">
                        {education.degree}
                    </h2>

                    <p className="text-gray-700 font-medium">
                        {education.institution}
                    </p>

                    <p className="text-gray-500">{education.location}</p>

                    <p className="text-sm text-gray-600">
                        {education.from} – {education.to}
                    </p>
                </div>
            ))}
        </section>
    );
}
