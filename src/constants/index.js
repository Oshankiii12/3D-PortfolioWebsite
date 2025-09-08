import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  globalpathfinders,
  bindisa,
  EasyExit,
  simulateX,
  medify,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },  // new link
  { id: "resume", title: "Resume" },      // new link
  { id: "contact", title: "Contact" },
];


const services = [
  {
    title: "Backend & APIs",
    icon: web,
  },
  {
    title: "Databases and System Design",
    icon: mobile,
  },
  {
    title: "React & Modern Frontend",
    icon: backend,
  },
  {
    title: "AI & Emerging Tech",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Global Pathfinders",
    icon: globalpathfinders,
    iconBg: "#FFFFFF",
    date: "June 2024 – July 2024",
    points: [
      "Developed and deployed the official Global Pathfinders website from scratch, leading to a 50% increase in user engagement.",
      "Configured and optimized hosting on a KVM2 VPS server, ensuring 99.9% uptime and a 40% improvement in site speed.",
      "Handled end-to-end development, from planning to deployment, showcasing adaptability and full ownership of the project.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Bindisa Agritech",
    icon: bindisa,
    iconBg: "#FFFFFF",
    date: "May 2025 - Jul 2025",
    points: [
      "Led development of Bindisa Agritech, a platform with soil analysis, weather forecasts, and AI support.",
      "Improved performance with modular APIs and components, reducing load time by 40% and increasing workflow efficiency by 20%.",
      "Participating in code reviews and providing constructive feedback to other developers."
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
    name: "EasyExit",
    description:
      "A responsive web app streamlining issue, approval, and gatepass verification for college students. Eliminated paperwork entirely and significantly reduced processing time.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: EasyExit, 
    source_code_link: "https://easyexit.onrender.com/",
  },
  {
    name: "SimulateX",
    description:
      "A desktop-based circuit simulation tool for designing and analyzing circuits. It has an interactive GUI and is ideally applicable for students and engineers to visualize and validate circuit designs effectively.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
    ],
    image: simulateX,
    source_code_link: "https://github.com/lavishmeena2764/simulatex",
  },
  {
    name: "Medify.AI",
    description:
      "A machine learning-powered healthcare diagnostic platform. Enables users to upload health assessments and get doctor recommendations through a user-friendly interface.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: medify,
    source_code_link: "https://github.com/lavishmeena2764/Google-Solution-Challenge-24",
  },
];


export { services, technologies, experiences, testimonials, projects };
