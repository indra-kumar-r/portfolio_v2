import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import { VERSION } from './constants';

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
                <Navbar />

                {children}

                <div className="footer-container">{VERSION.version}</div>
            </body>
        </html>
    );
}
