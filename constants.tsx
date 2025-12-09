import React from 'react';
import { ShoppingBag, Code, Rocket, Gauge, Search, LayoutTemplate } from 'lucide-react';
import { Project, Service, Experience } from './types';

// Import all local images from src/components
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';

// Profile image also imported
import profileImg from './profile.jpg';

export const PROFILE_IMAGE = profileImg;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "YvonneFx",
    category: "US Clothing Brand",
    image: img1,
    description: "Full coordinated hooded jacket and cargo pant set store."
  },
  {
    id: 2,
    title: "DTY Store",
    category: "Home Decor & Furniture",
    image: img2,
    description: "Direct to consumer furniture and home decor brand."
  },
  {
    id: 3,
    title: "Calveen",
    category: "Perfume Store",
    image: img3,
    description: "Luxury perfume store design with dark aesthetic."
  },
  {
    id: 4,
    title: "Inclusive Fashion",
    category: "Website Launch",
    image: img4,
    description: "Fashion for everyone. Minimalist design approach."
  },
  {
    id: 5,
    title: "Serino Vanti",
    category: "Perfume Store",
    image: img5,
    description: "High-end fragrance store with sales campaign integration."
  },
  {
    id: 6,
    title: "Beginning Boutique",
    category: "Clothing Brand",
    image: img6,
    description: "Vibrant lifestyle clothing brand for the modern era."
  },
  {
    id: 7,
    title: "AllFrom1Supplier",
    category: "Grocery Store",
    image: img7,
    description: "US Marketplace for West Indian & American Groceries."
  },
  {
    id: 8,
    title: "Essence Shorts",
    category: "Clothing Redesign",
    image: img8,
    description: "Redesign work for trending utility style clothing."
  },
  {
    id: 9,
    title: "Faded",
    category: "Vapes Store",
    image: img9,
    description: "Official website for premium vaping products."
  },
  {
    id: 10,
    title: "Softwares Store",
    category: "Software Licenses",
    image: img10,
    description: "Digital marketplace for software keys and licenses."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Shopify Store Creation",
    description: "End-to-end setup of high-converting Shopify stores tailored to your brand identity.",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Theme Customization",
    description: "Deep liquid code customization to make your store unique and functional.",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Store Management",
    description: "Ongoing maintenance, product updates, and inventory management support.",
    icon: <LayoutTemplate className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Speed Optimization",
    description: "Improving Core Web Vitals to ensure your store loads instantly.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: 5,
    title: "SEO Ranking",
    description: "On-page and technical SEO to help customers find your store organically.",
    icon: <Search className="w-6 h-6" />
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "TA Creatives",
    role: "Shopify and WordPress Developer",
    period: "Feb 2023 - Present",
    description: [
      "Led development and customization projects focusing on eCommerce theme customization.",
      "Designed and launched multiple high-traffic Shopify sites.",
      "Collaborated with cross-functional teams to deliver tailored solutions."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Sir Syed University of Engineering and Technology",
  year: "Expected 2025"
};

export const CONTACT_INFO = {
  email: "sameerahmedbsce@gmail.com",
  linkedin: "https://www.linkedin.com/in/sameer-ahmed-ta/",
  github: "https://github.com/SameerAhmedBSCE",
  portfolio: "https://sameerahmedshopify.journoportfolio.com",
};

export const RESUME_CONTEXT = `
Name: Sameer Ahmed
Role: Shopify & React Developer
Email: sameerahmedbsce@gmail.com
LinkedIn: linkedin.com/in/sameer-ahmed-ta
GitHub: github.com/SameerAhmedBSCE
Portfolio: sameerahmedshopify.journoportfolio.com

Summary:
Experienced Web Developer specializing in Shopify and React.js, with a strong background in eCommerce development and theme customization. Proven expertise in building responsive and high-converting online stores. Skilled in HTML, CSS, JavaScript, React.js, Liquid, SQL, NoSQL.

Experience:
TA Creatives (Feb 2023 - Present): Led eCommerce theme customization, launched high-traffic sites (JAGGAD, ECHT, Beginning Boutique, FARM Rio, No Nasties, Jenni Kayne).

Education:
BS Computer Engineering, SSUET (Expected 2025).
Courses: Banoqabil (Web Dev 1 & 2), Enablers (Shopify).
`;
