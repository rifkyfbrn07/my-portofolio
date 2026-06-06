export const PROJECT_META = [
  {
    id: 1,
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Application",
    color: "bg-blue-400",
    img: "https://images.unsplash.com/photo-1507238692062-110ce05f97b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    slug: "mini-e-commerce",
    title: "Mini E-Commerce",
    category: "Web Application",
    color: "bg-green-400",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    slug: "weather-app",
    title: "Weather App",
    category: "Web Application",
    color: "bg-cyan-400",
    img: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    slug: "web-esports-landing-page",
    title: "Web Esports Landing Page",
    category: "Landing Page",
    color: "bg-purple-400",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
  }
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
