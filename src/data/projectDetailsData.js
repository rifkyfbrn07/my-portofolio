// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  "personal-portfolio-website": {
    title: "Personal Portfolio Website",
    category: "Web Application",
    tagline: "Designed and developed a modern portfolio website featuring responsive layouts, interactive UI components, and optimized performance to showcase projects and technical skills.",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Magic UI"],
    features: [
      "Responsive and modern design",
      "Interactive UI components",
      "Optimized performance"
    ],
    impact: [
      "Provides a central hub for showcasing projects and skills."
    ],
    links: { live: "https://rifkyfbrn07-porto.vercel.app/" }
  },
    "mini-e-commerce": {
      title: "Mini E-Commerce",
      category: "Web Application",
      tagline: "Built a responsive e-commerce interface with reusable components and structured frontend architecture, focusing on maintainability and user experience.",
      year: "2025",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Reusable UI components",
        "Structured frontend architecture",
        "Responsive e-commerce interface"
      ],
      impact: [
        "Improves maintainability and user experience in online shopping."
      ],
      links: {}
    },
    "weather-app": {
      title: "Weather App",
      category: "Web Application",
      tagline: "Developed a weather application with API integration to display real-time weather information through a clean and intuitive interface.",
      year: "2025",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Real-time weather data integration",
        "Clean and intuitive UI",
        "Location-based weather fetching"
      ],
      impact: [
        "Helps users get quick and accurate weather updates."
      ],
      links: {}
    },
    "sensor-app": {
    title: "Sensor App",
    category: "Web Application",
    tagline: "A Laravel-based web application for managing and monitoring sensor data.",
    year: "2025",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Backend architecture with Laravel",
      "Sensor data management and processing",
      "Responsive user interface"
    ],
    impact: [
      "Streamlines the collection and visualization of sensor data."
    ],
    links: { github: "https://github.com/rifkyfbrn07/sensor-app" }
  }
  };
