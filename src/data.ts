export interface Personal {
  name: string;
  title: string;
  subtitle: string;
  email: string[];
  phone?: string;
  location: string;
  avatar: string;
}

export interface Stat {
  key: string;
  value: string;
}

export interface TechnicalSkill {
  category: string;
  icon: string;
  skills: string[];
}

export interface SoftSkill {
  name: string;
  description: string;
}

export interface Skills {
  technical: TechnicalSkill[];
  soft?: SoftSkill[];
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  link: string;
  description: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  link: string;
  description: string;
}

export interface Publication {
  year: number;
  title: string;
  journal: string;
  authors: string[];
  doi: string;
  link: string;
}

export interface Publications {
  firstAuthor: Publication[];
  coAuthor: Publication[];
}

export interface Certification {
  issuer: string;
  name: string;
  date: string;
  skills: string[];
  link: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Social {
  linkedin: string;
  github: string;
  [key: string]: string;
}

export interface ContactMethod {
  type: 'email' | 'phone' | 'location';
  value: string;
}

export interface Contact {
  title: string;
  description: string;
  methods: ContactMethod[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Professionals {
  personal: Personal;
  stats: Stat[];
  skills: Skills;
  education: Education[];
  experience?: Experience[];
  publications?: Publications;
  certifications?: Certification[];
  projects: Project[];
  social: Social;
  contact: Contact;
  navItems: NavItem[];
}

export const professionals: Professionals = {
  personal: {
    name: "Mohammed Khadeir",
    title: "Étudiant en Informatique",
    subtitle: "Passionné par le développement web et les technologies modernes",
    email: ["m,khadeir@esisa.ac.ma"],
    location: "Maroc",
    avatar: "https://avatars.githubusercontent.com/u/257023757?v=4"
  },
  stats: [
    { key: "Projets", value: "1" },
    { key: "Technologies", value: "5" },
    { key: "Années d'études", value: "2" }
  ],
  skills: {
    technical: [
      {
        category: "Frontend",
        icon: "Code",
        skills: ["HTML", "CSS", "JavaScript", "Astro", "React"]
      },
      {
        category: "Backend",
        icon: "Server",
        skills: ["Node.js", "Express", "MongoDB"]
      },
      {
        category: "Outils",
        icon: "Wrench",
        skills: ["Git", "VS Code", "Figma"]
      }
    ],
    soft: [
      {
        name: "Travail d'équipe",
        description: "Capable de collaborer efficacement dans un environnement d'équipe."
      },
      {
        name: "Résolution de problèmes",
        description: "Apte à analyser et résoudre des problèmes complexes."
      }
    ]
  },
  education: [
    {
      period: "2022 - Présent",
      degree: "Licence en Informatique",
      field: "Informatique",
      institution: "ESISA",
      link: "https://www.esisa.ac.ma",
      description: "Formation en développement logiciel, bases de données et ingénierie logicielle."
    }
  ],
  projects: [
    {
      title: "Portfolio Personnel",
      description: "Site web portfolio développé avec Astro et déployé sur Vercel.",
      tags: ["Astro", "TypeScript", "Vercel"],
      link: "https://github.com/mkhadeir-afk/portfolio"
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/mohammed-khadeir-1a03883a4",
    github: "https://github.com/mkhadeir-afk"
  },
  contact: {
    title: "Discutons de votre projet",
    description: "Je suis toujours ouvert à de nouvelles opportunités et collaborations.",
    methods: [
      { type: "email", value: "m,khadeir@esisa.ac.ma" },
      { type: "location", value: "Maroc" }
    ]
  },
  navItems: [
    { label: "À propos", href: "#about", icon: "User" },
    { label: "Compétences", href: "#skills", icon: "Code" },
    { label: "Éducation", href: "#education", icon: "GraduationCap" },
    { label: "Projets", href: "#projects", icon: "Folder" },
    { label: "Contact", href: "#contact", icon: "Mail" }
  ]
};