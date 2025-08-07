import {
  //tech
  C,
  C_plus,
  C_sharp,
  js,
  Microsoft_Azure,
  nest,
  NET_Core,
  react,
  Python,
  postgres,
  ts,
  angular,
  figma,
  git,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  java,
  logo,
  backend,
  creator,
  mobile,
  web,
  menu,
  close,
  bird,
  piano,

  //companies
  singleClic,
  GTa,
  MsSolutions,
  walking_aiesec,
  walking_logo,
  machineLearning,
  devops,
  //projects
  birdy,
  studyFlux,
  ProjectTracker,
  reality,
  arcEnJeu,
  doIt,
  flightDelay,
  earth,
  brain,
  image,
  chatgpt,
  data,
  crypto,
  efrei,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Decentralized Finance Researcher",
    icon: crypto,
  },
  {
    title: "Machine Learning & AI",
    icon: brain,
  },
  {
    title: "LLMs & NLP",
    icon: chatgpt,
  },
  {
    title: "Image Processing",
    icon: image,
  },
  {
    title: "Big Data",
    icon: data,
  },
  {
    title: "Full-Stack Engineering",
    icon: web,
  },

  {
    title: "DevOps & MLOps",
    icon: devops,
  },
  {
    title: "Global Volunteer",
    icon: earth,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Angular TS",
    icon: angular,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "NET_Core",
    icon: NET_Core,
  },
  {
    name: "nest",
    icon: nest,
  },
  {
    name: "Microsoft_Azure",
    icon: Microsoft_Azure,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: " SQL SERVER",
    icon: postgres,
  },

  {
    name: "Tailwind CSS",
    icon: C_plus,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "Python",
    icon: Python,
  },
];

const experiences = [
  {
    title: "DeFi Researcher",
    company_name: "Efrei University",
    company_place: "Paris, France",
    icon: efrei,
    iconBg: "#E6DEDD",
    date: "June 2025 - Current",
    points: [
      "Conducting applied research on DeFi transaction data to detect sandwich attacks and front-running behaviors across Ethereum blocks.",
      "Designed and implemented a multi-phase pipeline combining data engineering and machine learning to identify Sybil addresses involved in malicious trading patterns.",
      "Engineered scalable preprocessing and feature extraction workflows for over 10 million transactions, optimizing memory usage and detection accuracy.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "SQL",
    ],
  },
  {
    title: "Web Engineer",
    company_name: "Reality",
    company_place: "Seattle, USA",
    icon: reality,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - July 2025",
    points: [
      "Focused on building performant and scalable web applications aligned with modern UI/UX standards.",
      "  Implemented a library of 20+ reusable components, reducing development time on new pages by 40%.",
      " Participated in architectural decisions and enhanced CI/CD pipelines to streamline frontend deployment.",
    ],
    technologies: [
      "React TS",
      "Framer-motion",
      "TailwindCSS",
      "SpringBoot",
      "GraphQL",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "SingleClic",
    company_place: "Cairo, Egypt",
    icon: singleClic,
    iconBg: "#E6DEDD",
    date: "June 2024 - Sept 2024",
    points: [
      "working on a concrete e-commerce web application 'COVETI ' using Microsoft .NET MVC, ensuring high performance and optimizing some of its functionalities.",
      "Deploying a .NET MAUI desktop application in a professional environment.",
      "Actively participating in daily meetings and code reviews, providing constructive feedback to improve team performance.",
      "Collaborating with cross-functional teams, including testers and developers, to deliver high-quality solutions.",
    ],
    technologies: [".NET MVC", ".NET MAUI", "PostgreSQL"],
  },
  {
    title: "Fullstack Developer",
    company_name: "MsSolutions",
    company_place: "Tunis, Tunisia",
    icon: MsSolutions,
    iconBg: "#E6DEDD",
    date: "June 2023 - Sept 2023",
    points: [
      "writing clean, efficient, and maintainable code, while ensuring architectural compatibility across projects.",
      "Developing a user management web application incorporating role-based frontent and JWT authentication and authorization",
      "utilizing ASP.NET Core 6 Web API and Angular 16 for the frontend.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    technologies: ["ASP.NET Core", "Angular TS", "TailwindCSS"],
  },
  {
    title: "English Teacher",
    company_name: "Aiesec Istanbul",
    company_place: "Istanbul, Turkey",
    icon: walking_aiesec,
    iconBg: "#E6DEDD",
    date: "June 2022 - Aug 2022",
    points: [
      "Teaching english basics  to young student .",
      "Collaborating with colleagues and learning the importance of team work .",
      "Participating in professional meetings to ensure the best teaching methedology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Arc-En-Jeu",
    description:
      "Designed a vibrant, multilingual mobile app for autistic children with sensory-friendly games that encourage learning through play. Paired it with a smart web platform for educators to create personalized games — integrating emotion recognition.",
    tags: [
      { name: "react TS", color: "blue-text-gradient" },
      { name: "flutter", color: "green-text-gradient" },
      { name: "supaBase", color: "yellow-text-gradient" },
      { name: "google ML Kit", color: "pink-text-gradient" },
    ],
    image: arcEnJeu,
    source_code_link: "https://github.com/farahBassoumi/ArcEnJeu",
  },
  {
    name: "Flight Delay",
    description:
      "Developed a machine learning pipeline to forecast flight delays and durations using a blend of historical and real-time scraped data. Automated the data collection and preprocessing workflows, achieving over 85% prediction accuracy.",
    tags: [
      { name: "Pandas", color: "yellow-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: " Web Scraping", color: "pink-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
    ],
    image: flightDelay,
    source_code_link:
      "https://github.com/YounesMakhlouf/flight-delayhttps://github.com/farahBassoumi/ArcEnJeu",
  },
  {
    name: "DO-IT!",
    description:
      "A to-do app built for my forgetful (but fabulous) self. Packed it with cozy animations, pastel vibes, and motivational UI — because getting things done should look good and feel fun.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "vite", color: "yellow-text-gradient" },
      { name: "tailwindCSS", color: "pink-text-gradient" },
    ],
    image: doIt,
    source_code_link: "https://github.com/farahBassoumi/theySaid",
    live_link: "https://farahbassoumi.github.io/theySaid/",
  },
  {
    name: "STUDYFLUX",
    description:
      "An AI-powered study buddy that’s always ready to help. It whips up flashcards, quizzes, summaries, and even chats like a scholar thanks to Gemini API. Because studying should be smart — not soul-crushing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: ".net core", color: "yellow-text-gradient" },
      { name: "gemini API", color: "pink-text-gradient" },
    ],
    image: studyFlux,
    source_code_link: "https://github.com/Fabeure/Studyfied",
    live_link: "https://saber-azouzi.github.io/Studyfied/",
  },
  {
    name: "BIRDY",
    description:
      "A mental wellness blogging platform where users can write, like, comment, and connect. With full-on role-based access, JWT authentication, and a chill Angular + .NET vibe — it’s basically Medium meets good vibes.",
    tags: [
      { name: ".net core MVC", color: "blue-text-gradient" },
      { name: ".net Identity", color: "pink-text-gradient" },
      { name: "angular 16", color: "green-text-gradient" },
    ],
    image: birdy,
    source_code_link: "https://github.com/farahBassoumi/birdy-front",
  },
  {
    name: "PROJECT TRACKER",
    description:
      "A real-time project manager with superpowers. Powered by event-driven architecture using SSE & WebSockets, this app makes assigning tasks, tracking progress, and staying in sync feel smooth and almost magical.",
    tags: [
      { name: "nestJs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "sse", color: "pink-text-gradient" },
      { name: "webSockets", color: "purple-text-gradient" },
    ],
    image: ProjectTracker,
    source_code_link: "https://github.com/farahBassoumi/ProjectTracker-NestJS",
  },
];

export { services, technologies, experiences, testimonials, projects };
