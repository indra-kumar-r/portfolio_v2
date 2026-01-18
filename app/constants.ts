export const ABOUT = {
    name: 'Indra Kumar R',
    role: 'Software Development Engineer',
    summary:
        'Experience in building, delivering scalable features for AI-native platforms. Skilled in frontend architecture, backend development, third-party integrations, and optimizing engineering workflows. Committed to writing clean code and building reliable systems that solve real user and business problems.',
    socials: {
        linkedin: 'https://www.linkedin.com/in/indra-kumar-r/',
        github: 'https://github.com/indra-kumar-r',
        resume: 'https://drive.google.com/file/d/1BfHWFxOJuUw6GthluoX-lRG7v5NzcAtE/view',
    },
    contact: {
        email: 'indra07kumar@gmail.com',
        phone: '+91-6361702830',
        location: 'Bengaluru, India',
    },
};

export const SKILLS = [
    'Angular',
    'Golang',
    'Node.js',
    'Express.js',
    'MongoDB',
    'TypeScript',
    'JavaScript',
    'Web Development',
];

export const WORK = [
    {
        company: 'Geektrust',
        link: 'https://www.linkedin.com/company/geektrust/',
        role: 'Software Development Engineer',
        location: 'Bengaluru, India',
        from: 'July 2024',
        to: 'Present',
        technologies: ['Angular', 'Go', 'MongoDB'],
        responsibilities: [
            'Built the entire frontend for a complex admin configuration tool, transforming a setup process into a smooth workflow and reducing manual effort by 90%.',
            'Engineered and extended backend APIs enabling reliable communication between frontend and microservices.',
            'Worked on event-driven architecture components to ensure responsive and scalable interactions.',
            'Integrated third-party tools such as Google Sheets and proctoring tools, reducing operational manual work.',
            'Resolved multiple critical production issues, improving platform reliability and user experience.',
        ],
    },
    {
        company: 'ERAM Power Electronics',
        link: 'https://www.linkedin.com/company/eram-power-electronics-company/',
        role: 'Software Development Engineer Intern',
        location: 'Bengaluru, India',
        from: 'Nov 2023',
        to: 'Jan 2024',
        technologies: ['JavaScript', 'Node.js', 'Express.js', 'MySQL'],
        responsibilities: [
            'Built a full-stack employee management portal for internal operations with secure authentication.',
            'Implemented multi-level ticketing and approval workflows for leave and request handling.',
            'Developed an admin panel for centralized user and department management, improving operational efficiency.',
        ],
    },
];

export const PROJECTS = [
    {
        title: 'LinkedIn Profile Scraper App',
        description:
            'A full-stack end-to-end recruitment automation tool that transforms complex LinkedIn searches into structured, searchable candidate data in minutes, eliminating manual sourcing and accelerating the entire hiring workflow.',
        skills: ['Go', 'Angular', 'MongoDB', 'SerpAPI'],
        highlights: [
            'Built a modular microservices backend with SerpAPI integration.',
            'Designed a user-friendly UI supporting multi-user accounts.',
            'Enabled exporting of scraped profile data.',
        ],
        github: 'https://github.com/indra-kumar-r/LinkedIn-Profile-Scraper-App',
        live: 'scrapy.mp4',
    },
    {
        title: 'Invoice Web App',
        description:
            'A full-stack web-based invoice management system designed to simplify invoice creation and management for small businesses, turning a slow, manual process into a fast, organized, and reliable digital workflow.',
        skills: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Redis'],
        highlights: [
            'Implemented persistent invoice and client data storage.',
            'Built intuitive UI for managing invoices and clients.',
            'Improved invoice creation workflow efficiency.',
        ],
        github: 'https://github.com/indra-kumar-r/Invoice-WebApp',
        live: 'invoice.mp4',
    },
];

export const NAV_TABS = [
    {
        name: 'Work',
        href: '/work',
    },
    {
        name: 'About',
        href: '/',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
];

export const VERSION = {
    version: 'v1.0.1',
};
