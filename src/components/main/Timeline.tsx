// 'use client'

// import { motion } from 'framer-motion'
// import { FC, JSX } from 'react'
// import Image from 'next/image'
// import { Timeline as TimelineComponent } from '@/components/ui/timeline'
// import { FaBook, FaCode, FaLaptopCode } from 'react-icons/fa'

// export interface TimelineItem {
//   id: number
//   type: 'work' | 'project'
//   title: string
//   company: string
//   location: string
//   date: string
//   imageURL: string
//   description: string
//   achievements: string[]
//   icon: JSX.Element
//   companyIcon: JSX.Element
// }

// export const timelineData: TimelineItem[] = [
//   {
//     id: 1,
//     type: 'work',
//     title: 'DevOps Engineer (Intern)',
//     company: 'Elevate Labs',
//     location: 'Remote',
//     imageURL: '/elevatelabs.jpg',
//     date: 'Sep 2025 - Present',
//     description: 'Working on real-time projects to gain hands-on experience in modern DevOps practices.',
//     achievements: [
//       "Setting up and automating CI/CD pipelines with GitHub Actions",
//       "Implementing containerization workflows using Docker",
//       "Exploring orchestration with Kubernetes for scalable deployments",
//       "Deploying applications to cloud environments (AWS & Azure)",
//       "Applying Infrastructure as Code (IaC) principles with Terraform and Ansible",
//       "Configuring monitoring & observability using Prometheus and Grafana",
//     ],
//     icon: <FaCode className="w-6 h-6 text-primary" />,
//     companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     id: 2,
//     type: 'project',
//     title: 'DevOps Independent Projects',
//     company: 'Self-Driven Projects',
//     location: 'Remote',
//     imageURL: '/devops-independent-timeline.png',
//     date: 'Apr 2024 - Aug 2025',
//     description: 'Focused on upskilling in DevOps and Cloud by building personal projects and labs.',
//     achievements: [],
//     icon: <FaBook className="w-6 h-6 text-secondary" />,
//     companyIcon: <FaLaptopCode className="w-8 h-8 text-gray-500" />,
//   },
//   {
//     id: 3,
//     type: 'work',
//     title: 'Backend Developer (Freelance)',
//     company: 'Fiverr',
//     location: 'Remote',
//     imageURL: '/fiverr.png',
//     date: 'Feb 2021 - Mar 2024',
//     description: 'Developed RESTful APIs, databases, and web applications for clients.',
//     achievements: [
//       'Built and maintained RESTful APIs with Django REST Framework and Node.js',
//       'Designed database schemas (MySQL, PostgreSQL) and implemented authentication/authorization (JWT, OAuth2)',
//       'Deployed projects on AWS/DigitalOcean with basic CI pipelines for delivery',
//     ],
//     icon: <FaCode className="w-6 h-6 text-primary" />,
//     companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
//   }
// ]

// export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
//   <div className="space-y-6" key={index}>
//     <div className="flex items-center gap-4">
//       {item.type === 'work' && (
//         <Image
//           src={item.imageURL}
//           alt={`${item.company} Logo`}
//           width={48}
//           height={48}
//           className="rounded-md shadow bg-muted p-1"
//         />
//       )}
//       <div>
//         <h3 title={item.title} className="text-lg font-semibold text-foreground">{item.title}</h3>
//         <p className="text-sm text-muted-foreground">
//           {item.company} • {item.location}
//         </p>
//         <p className="text-sm text-muted-foreground">{item.date}</p>
//       </div>
//     </div>

//     <p className="text-sm text-muted-foreground">{item.description}</p>

//     <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
//       {item.achievements.map((ach) => (
//         <li key={ach}>{ach}</li>
//       ))}
//     </ul>

//     {item.type === 'project' && (
//       <div className="w-full mt-4">
//         <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
//           <Image
//             src={item.imageURL}
//             alt={`${item.title} Architecture`}
//             className="object-contain"
//             loading="lazy"
//             fill
//           />
//         </div>
//       </div>
//     )}
//   </div>
// )

// const Timeline: FC = () => {
//   const timelineContent = timelineData.map((item) => ({
//     title: item.date,
//     content: <TimelineElement key={item.id} item={item} index={item.id} />,
//   }))

//   return (
//     <section id="experience" className="relative py-20 text-foreground transition-colors overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Floating Geometric Shapes */}
//         <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-60 left-20 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
//         <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Gradient Orbs */}
//         <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 title="Professional Experience & Projects" className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4">
//             Professional Experience & Projects
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Highlights of my career and key projects showcasing my skills & impact.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative w-full"
//         >
//           <TimelineComponent data={timelineContent} />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Timeline
"use client";

import { motion } from "framer-motion";
import { FC, JSX } from "react";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { FaShieldAlt, FaPlug } from "react-icons/fa";

export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  focusAreas: string[];
  icon: JSX.Element;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Integration Engineer",
    organization: "Solution For Web",
    location: "Remote / Delhi NCR",
    date: "Aug 2025 - Feb 2026",
    description:
      "Specialized in architecting fault-tolerant middleware for high-stakes SaaS data synchronization.",
    focusAreas: [
      "Engineered resilient HubSpot ↔ Filevine data pipelines with complex association mapping",
      "Implemented delta-sync logic processing 10,000+ records per cycle with 99.9% integrity",
      "Reduced integration failure rates by 40% through custom retry-management systems",
      "Architected OAuth 2.0 lifecycle managers to ensure zero-downtime API connectivity",
    ],
    icon: <FaPlug className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 2,
    title: "Consultant & Backend Architect",
    organization: "Freelance / Contract",
    location: "Remote",
    date: "Feb 2021 - Mar 2024",
    description:
      "Consulting for startups to bridge the gap between fragmented SaaS tools and centralized data schemas.",
    focusAreas: [
      "Designed HIPAA-aware patient data sync systems for healthcare platforms",
      "Developed custom Node.js SDKs to streamline HubSpot CRM API interactions",
      "Engineered idempotent revenue pipelines for Znode eCommerce platforms",
      "Built and maintained enterprise-grade RESTful APIs with strict schema validation",
    ],
    icon: <FaShieldAlt className="w-6 h-6 text-blue-500" />,
  },
];

export const TimelineElement: FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="space-y-6 py-4">
    <div className="flex items-start gap-4">
      {/* Updated Icon Container: Theme-Adaptive */}
      <div className="mt-1 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl backdrop-blur-sm">
        {item.icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          {item.title}
        </h3>
        <p className="text-md font-bold text-blue-600 dark:text-blue-400">
          {item.organization} <span className="text-border mx-2">|</span>{" "}
          {item.location}
        </p>
      </div>
    </div>

    <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
      {item.description}
    </p>

    {/* Focus Area Cards: Using bg-card for theme sync */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {item.focusAreas.map((area, idx) => (
        <div
          key={idx}
          className="flex gap-3 items-start p-4 border border-border bg-card/40 backdrop-blur-md rounded-xl hover:border-blue-500/30 transition-all shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
          <span className="text-sm text-foreground font-medium leading-relaxed">
            {area}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} />,
  }));

  return (
    <section
      id="experience"
      className="relative py-32 bg-background overflow-hidden border-t border-border"
    >
      {/* 1. Integrated Animated Background Logic */}
      <div className="absolute inset-0 -z-10">
        {/* Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Floating Shapes for Depth */}
        <div className="absolute top-40 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
            Expertise Eras
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Strategic Integration Roadmap
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mt-6 mx-auto md:mx-0"></div>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A track record of stabilizing data ecosystems for healthcare, legal,
            and eCommerce operations.
          </p>
        </motion.div>

        <div className="relative">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
