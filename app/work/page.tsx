'use client';

import { useEffect, useRef, useState } from 'react';
import { WORK } from '../constants';
import { Link2 } from 'lucide-react';

export default function WorkPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const viewJob = (index: number) => {
        setActiveIndex(index);

        sectionRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    useEffect(() => {
        const container = document.querySelector('.job-details-section');

        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(
                            entry.target as HTMLDivElement
                        );

                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: container,
                threshold: 0.5,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="work-container">
            <div className="jobs-section">
                {WORK.map((job, index) => (
                    <div
                        key={index}
                        className={`job-option ${
                            index === activeIndex ? 'active' : ''
                        }`}
                        onClick={() => viewJob(index)}
                    >
                        <div>
                            <div className="job-role">{job.role}</div>

                            <div className="job-details">
                                {job.company}

                                <span>
                                    {job.from} - {job.to}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="job-details-section">
                {WORK.map((job, index) => (
                    <div
                        key={index}
                        ref={(element) => {
                            sectionRefs.current[index] = element;
                        }}
                        className="job-section"
                    >
                        <div className="basic-section">
                            <div className="job-role">{job.role}</div>

                            <div className="job-details">
                                <a href={job.link} target="_blank">
                                    {job.company}
                                    <Link2 />
                                    <div className="line"></div>
                                </a>

                                <span>
                                    {job.from} - {job.to}
                                </span>
                            </div>
                        </div>

                        <div className="skills-section">
                            {job.technologies.map((tech, idx) => (
                                <div key={idx} className="skill">
                                    {tech}

                                    <div className="line"></div>
                                </div>
                            ))}
                        </div>

                        <div className="responsibilities-section">
                            {job.responsibilities.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
