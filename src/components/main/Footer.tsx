// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { FC, useEffect, useState } from 'react'
// import { FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { RxGithubLogo } from 'react-icons/rx'
// import { TrackableElement, TrackableContact } from '@/components/analytics/TrackableElement'

// const Footer: FC = () => {
//   const socialLinks = [
//     {
//       href: 'https://github.com/HasanAshab',
//       icon: <RxGithubLogo className="w-5 h-5" />,
//       label: 'GitHub',
//     },
//     {
//       href: 'https://www.linkedin.com/in/hasan-ashab/',
//       icon: <FaLinkedin className="w-5 h-5" />,
//       label: 'LinkedIn',
//     },
//   ]

//   const quickLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Blogs', href: '#blogs' },
//   ]

//   const servicesLinks = [
//     { name: 'DevOps Engineer', href: '/devops-engineer' },
//     { name: 'Cloud Engineer', href: '/cloud-engineer' },
//     { name: 'DevOps Best Practices', href: '/blog/devops-best-practices' },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const childVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   }

//   return (
//     <footer className="relative w-full px-6 py-12 mt-20 bg-background text-foreground border-t border-border transition-colors">
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div className="space-y-4" variants={childVariants}>
//             <h1 title="Hasan Ashab" className="text-2xl font-extrabold bg-clip-text">Hasan Ashab</h1>
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               DevOps & Cloud Engineer specializing in AWS, Kubernetes, Docker, and CI/CD automation.
//               Building scalable infrastructure aligned with company requirements.
//             </p>
//           </motion.div>

//           <motion.div className="space-y-4" variants={childVariants}>
//             <h2 title="Quick Links" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
//               Quick Links
//             </h2>
//             <ul className="space-y-2 text-sm">
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <TrackableElement elementId={`footer-nav-${item.name.toLowerCase()}`} elementText={`Footer: ${item.name}`}>
//                     <a
//                       href={item.href}
//                       className="hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
//                       aria-label={`Navigate to ${item.name} section`}
//                     >
//                       {item.name}
//                     </a>
//                   </TrackableElement>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div className="space-y-4" variants={childVariants}>
//             <h2 title="Services" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
//               Services
//             </h2>
//             <ul className="space-y-2 text-sm">
//               {servicesLinks.map((item) => (
//                 <li key={item.name}>
//                   <TrackableElement elementId={`footer-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`} elementText={`Service: ${item.name}`}>
//                     <a
//                       href={item.href}
//                       className="hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
//                       aria-label={`Learn about ${item.name}`}
//                     >
//                       {item.name}
//                     </a>
//                   </TrackableElement>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div className="space-y-4" variants={childVariants}>
//             <h2 title="Connect" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
//               Connect
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {socialLinks.map((link) => (
//                 <TrackableContact key={link.label} method={`footer-${link.label.toLowerCase()}`}>
//                   <motion.a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     aria-label={`Visit my ${link.label} profile`}
//                   >
//                     {link.icon}
//                   </motion.a>
//                 </TrackableContact>
//               ))}
//             </div>
//             <div className="mt-4">
//               <p className="text-xs text-muted-foreground">
//                 Keywords: DevOps Portfolio, Cloud Engineer, AWS, Kubernetes, Docker, CI/CD
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import {
  TrackableElement,
  TrackableContact,
} from "@/components/analytics/TrackableElement";

const Footer: FC = () => {
  const name = "Mohammad Saddam";

  const socialLinks = [
    {
      href: "https://github.com/mohammadsaddam-dev",
      icon: <RxGithubLogo className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/mohammadsaddam",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/917004455742",
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Case Studies", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ];

  const servicesLinks = [
    { name: "HubSpot CRM Sync", href: "#" },
    { name: "API Middleware Design", href: "#" },
    { name: "Custom SDK Development", href: "#" },
    { name: "Data Migration Strategy", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative w-full px-6 py-16 bg-background text-foreground border-t border-border transition-colors overflow-hidden">
      {/* 1. Architectural Detail: Subtle Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div className="space-y-6" variants={childVariants}>
            <h1 className="text-2xl font-black tracking-tighter">
              {name.split(" ")[0]}{" "}
              <span className="text-blue-500">{name.split(" ")[1]}</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architecting fault-tolerant data pipelines and high-reliability
              SaaS integrations for healthcare and legal-tech providers.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div className="space-y-6" variants={childVariants}>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
              Roadmap
            </h2>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <TrackableElement
                    elementId={`footer-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    elementText={`Footer: ${item.name}`}
                  >
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  </TrackableElement>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div className="space-y-6" variants={childVariants}>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
              Specialties
            </h2>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <TrackableElement
                    elementId={`footer-spec-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    elementText={`Specialty: ${item.name}`}
                  >
                    <span className="text-muted-foreground cursor-default">
                      {item.name}
                    </span>
                  </TrackableElement>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div className="space-y-6" variants={childVariants}>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
              Connectivity
            </h2>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <TrackableContact
                  key={link.label}
                  method={`footer-${link.label.toLowerCase()}`}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-secondary border border-border rounded-xl hover:border-blue-500/50 hover:text-blue-500 transition-all"
                    whileHover={{ y: -4 }}
                    aria-label={`Visit my ${link.label} profile`}
                  >
                    {link.icon}
                  </motion.a>
                </TrackableContact>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Assurance v2.0 © 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
