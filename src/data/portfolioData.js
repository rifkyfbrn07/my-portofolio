// ─── Portfolio Data (single source of truth for site content) ────
//
// This is the LIVE data the site renders and the AI assistant reads. It is
// imported by `src/services/aiContext.js` and `src/components/ChatWidget.jsx`.
//
// CUSTOMIZING: edit the values below with your own details. For a clean,
// fully-commented starter template (with guidance on every field), see
// `src/data/examplePortfolioData.js`. See also `docs/customization.md`.
//
// FIELDS TO EDIT:
//   profile.name / role / bio / location / email / socials  → your identity
//   experience[]   → your work / organization / education history
//   techStack[]    → your skills, grouped by `category`
//   projects[]     → short project summaries (keep `slug` in sync with
//                    projectMeta.js + projectDetailsData.js)
//   achievements[] → awards / hackathons (optional)
//   capabilities[] → high-level specializations
export const PORTFOLIO_DATA = {
    profile: {
        name: "Rifky Febrian Iskandar",
        role: "Frontend Web Developer",
        bio: "I am a Frontend Web Developer with a strong passion for creating responsive, modern, and user-friendly web applications. I enjoy turning ideas into interactive digital experiences using Next.js, TypeScript, and Tailwind CSS while continuously improving my skills through hands-on projects and self-learning.\n\nBeyond frontend development, I am also interested in software engineering fundamentals and cybersecurity, allowing me to approach problem-solving from both user experience and technical perspectives. I am eager to learn, adapt quickly, and contribute to building impactful digital products.",
        location: "Ciamis, West Java, Indonesia",
        email: "febrianrifky590@gmail.com",
        socials: {
            github: "https://github.com/iamzizi16",
            linkedin: "https://www.linkedin.com/in/rifkyfbrn07/",
            x: "https://x.com/RifkyFe40920714",
            instagram: "https://www.instagram.com/rifkyfbrn07"
        }
    },
    experience: [
        {
            title: "Division Head - OSIS SMK TI BAZMA",
            period: "Sep 2023 - Feb 2025",
            description: [
                "Led a student division in planning and executing school programs and events.",
                "Coordinated team members to ensure effective collaboration and successful event delivery.",
                "Strengthened leadership, organizational, and project management skills."
            ]
        },
        {
            title: "Participant - Raimuna Cabang Kabupaten Bogor 2024",
            period: "Dec 2024",
            description: [
                "Participated in leadership and teamwork development programs at the regional scouting event.",
                "Improved communication, adaptability, and collaborative problem-solving through various challenges."
            ]
        },
        {
            title: "Member - Forum OSIS Jawa Barat (FOSJABAR J5 & J6)",
            period: "Sep 2023 - Nov 2025",
            description: [
                "Contributed to regional student collaboration programs and organizational initiatives.",
                "Assisted in coordinating events and strengthening communication across schools.",
                "Developed teamwork, responsibility, and leadership through active participation."
            ]
        }
    ],
    techStack: [
        { name: "Next.js", category: "Frontend" },
        { name: "React", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "HTML5", category: "Frontend" },
        { name: "CSS3", category: "Frontend" },
        { name: "Laravel", category: "Backend" },
        { name: "REST API", category: "Backend" },
        { name: "MySQL", category: "Database" },
        { name: "Git", category: "Tools" },
        { name: "GitHub", category: "Tools" },
        { name: "VS Code", category: "Tools" },
        { name: "Postman", category: "Tools" },
        { name: "Figma", category: "Tools" },
        { name: "Linux (Ubuntu)", category: "Additional Knowledge" },
        { name: "Basic Networking", category: "Additional Knowledge" },
        { name: "Cyber Security Fundamentals", category: "Additional Knowledge" },
        { name: "Capture The Flag (CTF) Basics", category: "Additional Knowledge" }
    ],
    projects: [
        {
            slug: "personal-portfolio-website",
            title: "Personal Portfolio Website",
            category: "Web Application",
            description: "Designed and developed a modern portfolio website featuring responsive layouts, interactive UI components, and optimized performance to showcase projects and technical skills."
        },
        {
            slug: "mini-e-commerce",
            title: "Mini E-Commerce",
            category: "Web Application",
            description: "Built a responsive e-commerce interface with reusable components and structured frontend architecture, focusing on maintainability and user experience."
        },
        {
            slug: "weather-app",
            title: "Weather App",
            category: "Web Application",
            description: "Developed a weather application with API integration to display real-time weather information through a clean and intuitive interface."
        },
        {
            slug: "web-esports-landing-page",
            title: "Web Esports Landing Page",
            category: "Landing Page",
            description: "Created an esports-themed landing page to explore responsive layouts, modern UI design, and interactive frontend implementation."
        }
    ],
    achievements: [
        {
            title: "WorldSkills ASEAN Cyber Security Selection",
            project: "Cyber Security",
            description: "Selected as a participant in the WorldSkills ASEAN Cyber Security Selection.",
            team: "Individual",
            track: "Cyber Security",
            techStack: ["Linux", "Networking", "Cyber Security"],
            links: {}
        },
        {
            title: "Capture The Flag (CTF)",
            project: "CTF Challenges",
            description: "Completed multiple introductory Capture The Flag (CTF) challenges to strengthen cybersecurity fundamentals.",
            team: "Individual",
            track: "Cyber Security",
            techStack: ["CTF", "Security"],
            links: {}
        }
    ],
    capabilities: [
        "Frontend Web Development",
        "Responsive Web Design",
        "UI/UX Implementation",
        "Version Control",
        "Cyber Security Fundamentals"
    ]
};
