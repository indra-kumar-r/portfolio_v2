'use client';

import { Linkedin, Github, MapPin, Mail, Phone, Link } from 'lucide-react';
import { ABOUT, SKILLS } from './constants';

export default function Home() {
    function copyToClipboard(): void {
        navigator.clipboard.writeText(ABOUT.contact.email);
    }

    return (
        <div className="home-container">
            <div className="about-section">
                <div className="title">{ABOUT.name}</div>

                <div className="summary">
                    <div className="role">{ABOUT.role}</div>

                    {ABOUT.summary}
                </div>
            </div>

            <div className="skills-section">
                {SKILLS.map((skill, index) => (
                    <div key={index} className="skill">
                        {skill}
                    </div>
                ))}
            </div>

            <div className="socials-section">
                <div className="socials">
                    <a href={ABOUT.socials.linkedin} target="_blank">
                        <Linkedin size={20} />
                        LinkedIn
                    </a>

                    <a href={ABOUT.socials.resume} target="_blank">
                        <Link size={20} />
                        Resume
                    </a>

                    <a
                        href={ABOUT.socials.github}
                        target="_blank"
                        className="sound-btn"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                </div>

                <div className="contacts">
                    <button className="contact">
                        <Phone size={16} />
                        <span>{ABOUT.contact.phone}</span>
                    </button>

                    <button className="contact mail" onClick={copyToClipboard}>
                        <Mail size={16} /> <span>{ABOUT.contact.email}</span>
                        <div className="line"></div>
                    </button>

                    <button className="contact">
                        <MapPin size={16} />
                        <span>{ABOUT.contact.location}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
