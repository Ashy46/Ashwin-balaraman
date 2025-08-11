import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ashwin",
  initials: "DV",
  url: "https://dillion.io",
  location: "Chicago, IL",
  locationLink: "https://www.google.com/maps/place/Chicago",
  description:
    "Aspiring Software Engineer! I love building things and helping people out. Love playing tennis, reading, and poker.",
  summary:
    "I am a student at the University of Chicago, pursuing a double major in Computer Science and Economics. I am interested in software development, machine learning, and economics. This past summer, I interned at Simcare AI, a startup that uses AI to scale training for healthcare professionals. Additionally, I have worked on my own startup and multiple side projects.",
  avatarUrl: "/Ashwin-Headshot.png",
  skills: [
    "Python",
    "C",
    "Java",
    "JavaScript",
    "SQL",
    "PostgreSQL",
    "CSS",
    "HTML",
    "React",
    "React Native",
    "Expo Go",
    "Supabase",
    "FastAPI",
    "Celery",
    "LiveKit",
    "MongoDB",
    "Langchain",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abalaraman1@uchicago.edu",
    tel: "+1 630-601-9505",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ashy46",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/ashwin-balaraman-512990329",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "abalaraman1@uchicago.edu",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Simcare AI (YCS24)",
      href: "https://app.simcare.ai",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Developer / Summer Intern",
      logoUrl: "/simcare-ai.png",
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "Selected to join Y Combinator startup to develop new enhancements to their AI-based clinical training platform. Developed 2 products for pre-med students to assist with interview prep (Casper.ai & interview.ai). The 2 products helped drive $30K growth in monthly recurring revenue in a 2-month window. Created a system to provide analytics driven user feedback using Celery, Supabase, and FastAPI backend.",
    },
    {
      company: "Barter",
      badges: [],
      href: "#",
      location: "Chicago, IL",
      title: "Software Developer",
      logoUrl: "/barter.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Led design of a scalable app that facilitated bartering consumer products for mid and low-income segments. Architected and led the development of front-end for the app using React Native, Expo Go, and Supabase. The app serves 1.5K users in low-income neighborhoods in Amsterdam.",
    },
    {
      company: "Next Haven Group",
      badges: [],
      href: "#",
      location: "Chicago, IL",
      title: "Private Equity Analyst Intern",
      logoUrl: "/nexthaven.png",
      start: "Mar 2025",
      end: "May 2025",
      description:
        "Worked with a 6-member analyst team to conduct 500+ sourcing calls across business services and healthcare sectors. Assisted in due diligence and short-listing targets based on investment criteria – growth, profitability, and cash flow.",
    },
    {
      company: "PACE Tennis",
      badges: [],
      href: "#",
      location: "Naperville, IL",
      title: "Co-Founder",
      logoUrl: "/pace-tennis.png",
      start: "Jan 2021",
      end: "Aug 2024",
      description:
        "Led day-to-day business operations and trained over 50 kids in competitive tennis, mental strength & conditioning. Organized tournaments to raise awareness and contributed $4000 to Suicide Prevention Services of America (SPS).",
    },
  ],
  education: [
    {
      school: "University of Chicago",
      href: "https://uchicago.edu",
      degree: "Bachelor of Science in Computer Science | Bachelor of Science in Economics. GPA: 3.9",
      logoUrl: "/uchicago.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Naperville North High School (NNHS)",
      href: "#",
      degree: "High School Diploma, GPA: 4.6; SAT: 1530",
      logoUrl: "/naperville-north.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Emailify",
      href: "#",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Developed a Customer Support Agent using Celery, Gemini, Langchain, and FastAPI. The agent has helped 3 Shopify business owners reduce operating costs and customer support response time.",
      technologies: [
        "Celery",
        "Gemini",
        "Langchain",
        "FastAPI",
        "Python",
      ],
      links: [],
      image: "",
      video: "/emailify.mp4",
    },
    {
      title: "Mint",
      href: "#",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "Developed a Chrome extension using Extension.JS and web application using Next.JS to assist 200+ users in saving over $1,000 while shopping online. Pitched and received non-equity startup grant funding from LTF Ventures UChicago.",
      technologies: [
        "Extension.JS",
        "Next.js",
        "Typescript",
        "React",
      ],
      links: [],
      image: "",
      video: "/mintcashback.mp4",
    },
    {
      title: "AI @ UChicago",
      href: "#",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Selected to join the executive Board as a member of the leadership team for 2025-2026. Led a 3-member team that developed a machine learning model for submission to the 2025 NFL Big Bowl competition. Completed 2 courses: Intro to Machine Learning and Intro to Language Models.",
      technologies: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "Scikit-learn",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Maroon Capital",
      href: "#",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Selected to the 2024-2025 Analyst program focused on quant finance and software development. Selected as one of four finalists (from 18 teams) for development and back-testing of a levered crypto 'Volatility Reversion' trading strategy that generated 130% return on a consistent basis with a below average Sharpe ratio.",
      technologies: [
        "Python",
        "Quantitative Finance",
        "Trading Algorithms",
        "Data Analysis",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Derivatives Group Quant Trading",
      href: "#",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Successfully completed analyst training program focused on market making and options trading. Active member of Stochastic Calculus and Brownian Motion cohort team.",
      technologies: [
        "Options Trading",
        "Market Making",
        "Stochastic Calculus",
        "Financial Mathematics",
      ],
      links: [],
      image: "",
      video: "",
    },
  ]
} as const;
