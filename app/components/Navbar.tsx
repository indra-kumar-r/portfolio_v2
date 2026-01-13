'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="max-w-4xl mx-auto flex gap-6 p-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/work">Work</Link>
                <Link href="/education">Education</Link>
            </div>
        </nav>
    );
}
