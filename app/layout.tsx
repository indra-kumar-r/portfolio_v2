'use client;';

import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import { VERSION } from './constants';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'INDRA KUMAR R',
    description: 'INDRA KUMAR R - Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="main-container">
                    <Navbar />
                    {children}
                    <div className="footer-container">{VERSION.version}</div>
                </div>

                <div className="screen-blocker">
                    <div className="blocker-card">
                        <Image
                            height={200}
                            width={200}
                            src="/blocker.png"
                            alt="logo"
                        />

                        <div className="info">
                            Please view on a laptop/desktop for a beter user
                            experience.
                        </div>

                        <div className="sub-info marquee-left">
                            v2 coming soon! In development.
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
