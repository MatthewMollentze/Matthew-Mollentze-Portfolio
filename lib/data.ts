export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  image: string;
  skills: string[];
  description: string;
  achievements?: string[];
  projects?: string[];
  keyAchievement?: string;
  responsibilities?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Betway Africa",
    role: "Senior Frontend Developer",
    period: "Apr 2023 - Present · 2 yrs 1 mo",
    location: "Menlyn, Pretoria · Hybrid",
    image: "/images/betway_africa.jpg",
    skills: [
      "Vue.js", "TypeScript", "Node.js", "HTML", "HTML5", "CSS", "SASS", 
      "JavaScript", "Nuxt.js", "Nuxt", "Responsive Web Design", "Web Design", 
      "Web Development", "Front-End Development", "Interaction Design", 
      "User Experience Design", "Figma", "Adobe Creative Suite", "XHTML", 
      "Cascading Style Sheets (CSS)", "Microsoft Visual Studio Code", 
      "Git", "Azure Pipelines", "IIS", "Storybook", "Yarn", "npm", 
      "Vitest", "Software Development Life Cycle (SDLC)", "Agile Methodologies", 
      "Agile Project Management", "Project Management", "Management", 
      "Banking", "Internet Banking", "SQL", "C#", "Google Analytics", 
      "Google Tag Manager", "Grafana", "New Relic"
    ],
    description: "As a Front-End Developer in the Banking Department, I collaborate with UX designers, back-end developers, and other stakeholders to design & implement user interfaces and customer experiences. I focus on the Banking Application where users can deposit and withdraw, offering the largest selection of payment methods out of all competitors. Additionally, I work on the Banking Back Office Tools, both written in Nuxt/Vue hosted on IIS and deployed with Azure Pipelines.",
    keyAchievement: "Lead front-end developer working with the business and backend team to release Betway Pay To Card, a first of its kind in the industry for South Africa. This innovative feature allows users to withdraw their winnings directly to their bank cards, providing a seamless and efficient user experience.",
    responsibilities: [
      "Develop and maintain responsive web applications using the Vue framework",
      "Collaborate with UX designers, Business, and back-end developers to implement intuitive interfaces & user flows",
      "Optimize application performance for maximum speed and scalability",
      "Write clean, efficient, and well-documented code",
      "Participate in code reviews, design discussions, and team meetings",
      "Stay up-to-date with emerging trends and technologies in front-end development"
    ],
    projects: [
      "Betway Pay to Card - A new and exclusively-to-Betway method to withdraw. This first-of-its-kind method allows users to withdraw straight to their credit or debit card.",
      "Banking Application - Full redesign and optimization",
      "Back Office Tools - Internal admin dashboard development"
    ]
  },
  {
    company: "GLOVent Solutions",
    role: "Javascript Frontend Engineer",
    period: "Feb 2023 - Mar 2023 · 2 mos",
    location: "Centurion, Gauteng, South Africa · Hybrid",
    image: "/images/glovent_solutions.jpg",
    skills: [
      "React.js", "TypeScript", "AWS", "Node.js", "PostgreSQL", "AWS Lambda", 
      "AWS Amplify", "DynamoDB", "HTML", "HTML5", "CSS", "SASS", "JavaScript", 
      "Capacitor", "React Native", "React Router", "Google Analytics", "Amazon S3", 
      "Amazon Relational Database Service (RDS)", "Fastlane", "Front-End Development", 
      "Android Studio", "Unit Testing", "Cordova", "AWS CodeDeploy", "Jest", "CI/CD", 
      "Primefaces", "Web Development", "Scrum", "Amazon API Gateway", "Git", 
      "Agile Methodologies", "AWS Identity and Access Management (AWS IAM)", 
      "Markdown", "AWS CLI", "Bitrise", "Software Development", "Ionic", 
      "Privileged Access Management", "Microsoft Visual Studio Code", "npm", 
      "AngularJS", "Stakeholder Management", "Office 365"
    ],
    description: "Core team member as a Frontend Engineer, part of the development team, developing & maintaining a multi-tenant property communication management solution for communities of all sizes.",
    responsibilities: [
      "Involved in architecture and design sessions",
      "Assist with DevOps activities including infrastructure monitoring, Infrastructure as Code (IaC) via AWS CDK CI/CD Pipelines",
      "Ensure adherence to AWS Well Architected Framework",
      "Develop & maintain front-end pages for the various web portals",
      "Develop & maintain back-end applications/functions required for integration, communication, security, and compliance",
      "Develop & maintain APIs as per GLOVent's API-first strategy including underlying databases such as PostgreSQL and DynamoDB",
      "Develop and maintain mobile applications, including cross-platform optimisation and responsiveness",
      "Assist with support requests escalated to the development team including troubleshooting and bug fixes",
      "Continuous improvement of performance and system stability",
      "Adherence to the Agile, DevOps & QA practices as agreed and implemented by the team"
    ],
    achievements: [
      "Implemented infrastructure monitoring and CI/CD pipelines using AWS CDK",
      "Developed and maintained APIs following API-first strategy with PostgreSQL and DynamoDB",
      "Optimized mobile applications for cross-platform performance",
      "Contributed to system architecture design sessions and AWS Well Architected Framework compliance"
    ]
  },
  {
    company: "Career Break",
    role: "Professional Development",
    period: "Dec 2022 - Jan 2023 · 2 mos",
    location: "",
    image: "",
    skills: [],
    description: "Short career break focused on professional development and exploring new technologies."
  },
  {
    company: "Pattern Matched Technologies™",
    role: "App Developer",
    period: "Jan 2019 - Oct 2022 · 3 yrs 10 mo",
    location: "Johannesburg Area, South Africa · Remote",
    image: "/images/pattern_matched_technologies.jpg",
    skills: [
      "React.js", "React Native", "TypeScript", "Node.js", "AWS", "Redux.js", 
      "Python", "MySQL", "HTML", "HTML5", "CSS", "SASS", "JavaScript", 
      "Web Design", "Interaction Design", "Microsoft Office", "Adobe Creative Suite", 
      "AngularJS", "Project Management", "Graphic Design", "Management", 
      "Cascading Style Sheets (CSS)", "Amazon Web Services (AWS)", "Responsive Web Design", 
      "Linux", "Software Development Life Cycle (SDLC)", "Front-End Development", 
      "Android Studio", "User Experience Design", "Obfuscation", 
      "User Interface Design", "Search Engine Optimization (SEO)", 
      "WordPress", "Mobile Application Development", "Web Development", 
      "Git", "Agile Methodologies", "SQL", "Software Development"
    ],
    description: "Core Team member of the design, development and marketing of the PMT™ Obsidian™ Service Connectivity Platform. Obsidian™ enables service exposure and management of API, IoT & Cellular endpoints through an end-to-end managed solution and delivers websites and apps to customers at no mobile data cost to them, even without an airtime or data balance.",
    achievements: [
      "Architected and implemented banking-grade security systems for the Obsidian™ User Portal",
      "Led the development of comprehensive product documentation and user guides",
      "Implemented automated testing infrastructure improving deployment reliability",
      "Designed and developed cross-platform mobile applications for major African distributors"
    ],
    projects: [
      "Obsidian™ User Portal - Full-stack development with React, Node.js and AWS",
      "iOS Tablet app for SA's extensive Online Vehicle Marketplace using React Native",
      "Cross-platform mobile app for Africa's largest cross-border distributors",
      "Web-based Number Portability Lookup Platform for a major SA Bank"
    ],
    responsibilities: [
      "Development, design, and UX/UI of the Obsidian™ User Portal",
      "Implementation of Banking-Grade security systems/functions",
      "Development of the product user guide online documentation",
      "Implementation of continuous automated testing",
      "Development of iOS and Android mobile applications for clients",
      "Continued as Team Lead of Public Relations and Project Owner of the Company Website"
    ]
  },
  {
    company: "Pattern Matched Technologies™",
    role: "Graphic Designer",
    period: "Jul 2018 - Dec 2018 · 6 mos",
    location: "Johannesburg, Gauteng, South Africa",
    image: "/images/pattern_matched_technologies.jpg",
    skills: [
      "Web Design", "Interaction Design", "Microsoft Office", "Adobe Creative Suite", 
      "Project Management", "Graphic Design", "React.js", "Cascading Style Sheets (CSS)", 
      "Amazon Web Services (AWS)", "Responsive Web Design", "React Native", 
      "Software Development Life Cycle (SDLC)", "HTML", "Front-End Development", 
      "User Experience Design", "Search Engine Optimization (SEO)", "MySQL", 
      "WordPress", "Web Development", "Git", "Agile Methodologies", "SQL"
    ],
    description: "Team Lead of Public Relations and Project Owner of the Company Website, responsible for coordinating PR activities, developing marketing communications plans, and managing the company's web presence.",
    responsibilities: [
      "Coordinating all public relations activities",
      "Developing a marketing communications plan including strategy, goals and tactics",
      "Management of the Marketing Budget for the best possible ROI",
      "Create content for press releases, byline articles and keynote presentations",
      "Monitor, analyze and communicate PR results every quarter",
      "Managing and maintaining the cloud-based website architecture",
      "Providing smooth communication between the stakeholders and the developers",
      "Editing, writing, or designing Website content and directing team members who produce content"
    ]
  },
  {
    company: "Digital Content Creations",
    role: "Graphic Designer",
    period: "Oct 2017 - Apr 2018 · 7 mos",
    location: "Centurion, Gauteng, South Africa · On-site",
    image: "",
    skills: [
      "Adobe XD", "Amazon Web Services (AWS)", "Adobe Illustrator", 
      "Front-End Development", "Figma", "Bash", "Adobe Photoshop", 
      "WordPress", "Web Development", "CentOS", "Adobe After Effects"
    ],
    description: "Responsible for executing design work, ensuring CI compliance, and collaborating with the Marketing Design team.",
    responsibilities: [
      "Ensure good planning and ideation before designing",
      "Execute design work as briefed",
      "Ensure all designs are in line with the company and product CI",
      "Ensure deadlines are met",
      "Manage time efficiently",
      "Positive teamwork and collaboration with fellow Marketing Designers",
      "Help with the corporate design of the company (Investor's Presentations etc.)",
      "Quality control of own design collateral"
    ]
  },
  {
    company: "Evetech",
    role: "Sales Representative",
    period: "Aug 2017 - Oct 2017 · 3 mos",
    location: "Centurion, Gauteng, South Africa · On-site",
    image: "/images/evetech.jpg",
    skills: [
      "Sales", "Cold Calling", "Customer Service", "Computer Hardware", 
      "B2B Sales", "B2C Sales", "Technical Specifications", "Consultative Selling"
    ],
    description: "Responsible for direct sales to walk-in customers and telephone sales, specializing in computer hardware specification and configuration for both business and consumer clients.",
    responsibilities: [
      "Walk-in Customer Sales",
      "Cold calling & Telephone Sales",
      "Computer/Laptop Specification Designing",
      "Business-to-Business & Business-to-Consumer Sales"
    ]
  },
  {
    company: "IT Genie Pty Ltd",
    role: "Creative Director/General & Operations Managing Assistant",
    period: "Jan 2017 - Aug 2017 · 8 mos",
    location: "Northvale AH, Muldersdrift · On-site",
    image: "/images/itgenie.jpg",
    skills: [
      "Ubuntu", "Microsoft Visual Studio Code", "cPanel", "Linux", 
      "Adobe Dreamweaver", "Zendesk", "Adobe Photoshop", "MySQL", 
      "Budget Management", "Git", "Adobe After Effects", "Conflict Resolution"
    ],
    description: "Dual role position focusing on creative direction and operational management support, gaining extensive IT industry knowledge and experience.",
    responsibilities: [
      "Handling technical troubleshooting within an enterprise environment, including system crashes, slow-downs and data recoveries",
      "Engaging and tracking Priority 1 issues, with responsibility for the timely documentation, escalation (if appropriate), resolution and closure of trouble tickets",
      "Determine staffing requirements, and interview, hire and train new employees or oversee those personnel processes",
      "Develop or implement product-marketing strategies, including advertising campaigns or sales promotions"
    ]
  }
]

export interface Education {
  school: string;
  qualification: string;
  subjects: string[];
  period: string;
}

export const education: Education[] = [
  {
    school: "Zwartkop High School",
    qualification: "National Senior Certificate",
    subjects: ["Information Technology", "Art", "Business Studies"],
    period: "2012 - 2016"
  }
]

export interface Certification {
  title: string;
  organization: string;
  image: string;
  period?: string;
  issuedDate?: string;
  credentialId?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    image: "/images/amazon_web_services.jpg",
    period: "Oct 2019 - Oct 2022"
  },
  {
    title: "Conflict Resolution in the Workplace",
    organization: "SEESA (Pty) Ltd",
    image: "/images/seesa_pty_ltd.jpg",
    issuedDate: "Jun 2019",
    description: "Professional development course focused on managing and resolving workplace conflicts effectively."
  },
  {
    title: "Junior Management Program",
    organization: "SEESA (Pty) Ltd",
    image: "/images/seesa_pty_ltd.jpg",
    issuedDate: "Mar 2019",
    description: "Comprehensive training in management fundamentals, team leadership, and organizational development."
  },
  {
    title: "Skills for Success",
    organization: "Dale Carnegie Training",
    image: "",
    issuedDate: "Jul 2017",
    credentialId: "TJD17094781",
    description: "Received highest award for achievement in the program for exemplifying the standards, qualities and principles of Dale Carnegie training."
  }
]