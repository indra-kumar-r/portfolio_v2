'use client';

import Image from 'next/image';
import { PROJECTS } from '../constants';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const project = PROJECTS[activeIndex];

    return (
        <div className="projects-container">
            <div className="project-card">
                <div className="project-details">
                    <div className="project-title">{project.title}</div>

                    <div className="project-description">
                        {project.description}
                    </div>

                    <div className="project-skills">
                        {project.skills.map((skill, idx) => (
                            <div key={idx} className="skill neuro">
                                {skill}
                            </div>
                        ))}
                    </div>

                    <div className="project-links">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                className="neon"
                            >
                                GitHub
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                className="neon"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                <div className="project-thumbnail">
                    <Image
                        src={project.thumbnail}
                        alt="Project thumbnail"
                        width={400}
                        height={250}
                    />
                </div>
            </div>

            <div className="navigation-left">
                <button
                    className="navigation-btn"
                    onClick={() => setActiveIndex((prev) => prev + 1)}
                    disabled={activeIndex === PROJECTS.length - 1}
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            <div className="navigation-right">
                <button
                    className="navigation-btn"
                    onClick={() => setActiveIndex((prev) => prev - 1)}
                    disabled={activeIndex === 0}
                >
                    <ArrowLeft size={24} />
                </button>
            </div>

            <div className="navigation-btns">
                <button
                    className="navigation-btn"
                    onClick={() => setActiveIndex((prev) => prev - 1)}
                    disabled={activeIndex === 0}
                >
                    <ArrowLeft size={24} />
                </button>

                <button
                    className="navigation-btn"
                    onClick={() => setActiveIndex((prev) => prev + 1)}
                    disabled={activeIndex === PROJECTS.length - 1}
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            <div className="counter-section">
                {PROJECTS.map((_, index) => (
                    <div
                        key={index}
                        className={`counter ${
                            index === activeIndex ? 'active' : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
