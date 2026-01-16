'use client';

import '../globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_TABS } from '../constants';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar-container">
            <div className="tabs">
                {NAV_TABS.map((tab) => {
                    const isActive = pathname === tab.href;

                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={`tab ${isActive ? 'active' : ''}`}
                        >
                            {tab.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
