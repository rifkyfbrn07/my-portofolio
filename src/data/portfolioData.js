// ─── Portfolio Data (single source of truth for site content) ────
// This is the LIVE data the site renders and the AI assistant reads.

export const PORTFOLIO_DATA = {
    profile: {
        name: "Rifky Febrian Iskandar",
        role: "Frontend Web Developer",
        bio: "I am a Frontend Web Developer with a strong passion for creating responsive, modern, and user-friendly web applications. I enjoy turning ideas into interactive digital experiences using Next.js, TypeScript, and Tailwind CSS while continuously improving my skills through hands-on projects and self-learning.\n\nBeyond frontend development, I am also interested in software engineering fundamentals and cybersecurity, allowing me to approach problem-solving from both user experience and technical perspectives. I am eager to learn, adapt quickly, and contribute to building impactful digital products.",
        location: "Ciamis, West Java, Indonesia",
        email: "febrianrifky590@gmail.com",
        socials: {
            github: "https://github.com/rifkyfbrn07",
            linkedin: "https://www.linkedin.com/in/rifkyfbrn07/",
            x: "https://x.com/RifkyFe40920714",
            instagram: "https://www.instagram.com/rifkyfbrn07"
        }
    },
    organization: [
        {
            title: "Forum OSIS Jawa Barat",
            role: "Member",
            period: "September 2023 - November 2025",
            description: "Contributed to regional student collaboration programs, event coordination, and documentation while strengthening teamwork and communication skills."
        },
        {
            title: "OSIS SMK TI Bazma",
            role: "Division Staff",
            period: "September 2023 - February 2024",
            description: "Supported school events and student programs through planning and team coordination."
        },
        {
            title: "OSIS SMK TI Bazma",
            role: "Division Head",
            period: "February 2024 - February 2025",
            description: "Led a division in organizing educational and social events while managing team responsibilities and project execution."
        },
        {
            title: "Raimuna Kabupaten Bogor",
            role: "Participant",
            period: "December 2024",
            description: "Participated in leadership development, teamwork activities, and collaborative problem-solving challenges."
        }
    ],
    techStack: {
        frontend: [
            "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"
        ],
        backend: [
            "Laravel", "PHP", "REST API", "MySQL"
        ],
        tools: [
            "Git", "GitHub", "VS Code", "Postman", "Figma"
        ],
        learning: [
            "Linux", "Networking", "Cyber Security Fundamentals", "Capture The Flag"
        ]
    },
    features: [
        { id: "01", title: "Responsive UI" },
        { id: "02", title: "Reusable Components" },
        { id: "03", title: "REST API Integration" },
        { id: "04", title: "Database Design" },
        { id: "05", title: "Git Workflow" },
        { id: "06", title: "Laravel Backend" },
        { id: "07", title: "Modern Frontend", subtitle: "Next.js, React, Tailwind CSS" },
        { id: "08", title: "Always Learning" }
    ],
    achievements: [

        {
            year: "2025",
            title: "Built Personal Portfolio Website",
            description: "Designed and developed a modern portfolio website featuring responsive layouts.",
            project: "Web Development",
            team: "Individual",
            track: "Frontend",
            techStack: ["Next.js", "Tailwind CSS"]
        },
        {
            year: "2025",
            title: "Developed Mini E-Commerce",
            description: "Built a responsive e-commerce interface with reusable components.",
            project: "Web Development",
            team: "Individual",
            track: "Frontend",
            techStack: ["React", "TypeScript"]
        },
        {
            year: "2024",
            title: "WorldSkills ASEAN Cyber Security Selection",
            description: "Participated in the WorldSkills ASEAN Cyber Security Selection.",
            project: "Cyber Security",
            team: "Team",
            track: "Cyber Security",
            techStack: ["Linux", "Networking", "Cyber Security"]
        },
        {
            year: "2024",
            title: "Participated in Raimuna Kabupaten Bogor",
            description: "Participated in leadership development and teamwork activities.",
            project: "Scouting",
            team: "Participant",
            track: "Leadership",
            techStack: []
        },
        {
            year: "2023",
            title: "Started Web Development Journey",
            description: "Began learning foundational web technologies and programming concepts.",
            project: "Learning",
            team: "Individual",
            track: "Frontend",
            techStack: ["HTML", "CSS", "JavaScript"]
        }
    ],
    projects: [
        {
            slug: "personal-portfolio-website",
            title: "Personal Portfolio Website",
            category: "Web Application",
            description: "Designed and developed a modern portfolio website featuring responsive layouts, interactive UI components, and optimized performance to showcase projects and technical skills.",
            techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/rifkyfbrn07/my-portofolio",
            live: "https://rifkyfbrn07.github.io/my-portofolio",
            image: "/profile.webp"
        },
        {
            slug: "mini-e-commerce",
            title: "Mini E-Commerce",
            category: "Web Application",
            description: "Built a responsive e-commerce interface with reusable components and structured frontend architecture, focusing on maintainability and user experience.",
            techStack: ["React", "Tailwind CSS", "TypeScript"],
            github: "https://github.com/rifkyfbrn07",
            live: "",
            image: "/profile.webp"
        },
        {
            slug: "weather-app",
            title: "Weather App",
            category: "Web Application",
            description: "Developed a weather application with API integration to display real-time weather information through a clean and intuitive interface.",
            techStack: ["React", "JavaScript", "REST API"],
            github: "https://github.com/rifkyfbrn07",
            live: "",
            image: "/profile.webp"
        },
        {
            slug: "sensor-app",
            title: "Sensor App",
            category: "Web Application",
            description: "A Laravel-based web application for managing and monitoring sensor data, built with modern web development practices.",
            techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
            github: "https://github.com/rifkyfbrn07/sensor-app",
            live: "",
            image: "/profile.webp"
        }
    ]
};
