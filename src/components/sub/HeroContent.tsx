// "use client";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
// import { FC, useState, useEffect } from "react";
// import { NavbarButton } from "../ui/resizable-navbar";
// import { TrackableContact } from "@/components/analytics/TrackableElement";
// import { useAnalyticsContext } from "@/components/analytics/AnalyticsProvider";
// const name: string = "Mohammad Saddam";
// const githubLink: string = "https://github.com/mdsaddam7860";
// const linkedinLink: string = "https://www.linkedin.com/in/mdsaddam1";
// // const twitterLink: string = "https://github.com/MohammadSaddam";
// const Designation: string =
//   "I Build Reliable HubSpot & SaaS Integrations Fault-Tolerant CRM Sync Systems with Node.js";
// // const Designation: string = "CRM & API Integration Specialist (Node.js)";

// const HeroContent: FC = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const { trackClick } = useAnalyticsContext();

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   function smoothScrollTo(element: HTMLElement, duration = 1000) {
//     const start = window.scrollY;
//     const end = element.getBoundingClientRect().top + start;
//     const distance = end - start;
//     const startTime = performance.now();

//     function scroll(currentTime: number) {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const ease = 1 - Math.pow(1 - progress, 3);

//       window.scrollTo(0, start + distance * ease);

//       if (elapsed < duration) {
//         requestAnimationFrame(scroll);
//       }
//     }

//     requestAnimationFrame(scroll);
//   }

//   const handleConnectClick = (e: React.MouseEvent<HTMLElement>) => {
//     // Track the click
//     // trackClick(e, 'hero-connect-button', 'Let\'s Connect')

//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       smoothScrollTo(contactSection, 1500);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-4 sm:px-8 lg:px-16 w-full max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-28"
//     >
//       {/* Interactive Cursor Follower */}
//       <div
//         className="fixed pointer-events-none z-0 w-6 h-6 bg-primary/20 rounded-full blur-sm transition-all duration-300 ease-out"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//         }}
//       />

//       {/* Main Content Area */}
//       <motion.div variants={itemVariants} className="space-y-6">
//         {/* Name with Gradient Effect */}
//         <div className="relative">
//           <h1
//             title="name"
//             className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
//           >
//             <span
//               title="name"
//               className="bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent"
//             >
//               {name}
//             </span>
//           </h1>

//           {/* Decorative Elements */}
//           <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
//           <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse"></div>
//         </div>

//         {/* Role with Modern Design */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl blur-xl"></div>
//           <div className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-2xl">
//             <h2
//               title={Designation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent mb-3"
//             >
//               {Designation}
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto"></div>
//           </div>
//         </div>

//         {/* Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
//         >
//           Helping SaaS companies eliminate sync failures, data inconsistencies,
//           and manual reconciliation.
//         </motion.p>
//       </motion.div>

//       {/* Action Buttons */}
//       <motion.div
//         variants={itemVariants}
//         className="flex flex-col sm:flex-row items-center gap-4 mt-8 mb-16"
//       >
//         <NavbarButton
//           variant="primary"
//           className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           onClick={handleConnectClick}
//         >
//           <div className="flex items-center gap-3">
//             <FaRocket className="w-5 h-5 group-hover:animate-bounce" />
//             Let's Connect
//             <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
//           </div>
//           <div
//             title="Let's Connect - Navigate to contact section"
//             className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//           ></div>
//         </NavbarButton>

//         <div className="flex items-center gap-3">
//           <TrackableContact method="github">
//             <NavbarButton
//               title="Visit GitHub profile"
//               variant="secondary"
//               className="group bg-card/60 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
//               href={githubLink}
//             >
//               <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
//             </NavbarButton>
//           </TrackableContact>

//           <TrackableContact method="linkedin" title="Visit LinkedIn profile">
//             <NavbarButton
//               title="Visit LinkedIn profile"
//               variant="secondary"
//               className="group bg-card/60 backdrop-blur-sm border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
//               href={linkedinLink}
//             >
//               <FaLinkedin
//                 title="Visit LinkedIn profile"
//                 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
//               />
//             </NavbarButton>
//           </TrackableContact>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div variants={itemVariants} className="mt-2">
//         <div className="flex flex-col items-center gap-2 text-muted-foreground">
//           <span className="text-sm font-medium">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HeroContent;
"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";

interface HeroContentProps {
  title?: string;
  subtitle?: string;
}

const HeroContent: FC<HeroContentProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-20 flex flex-col items-center text-center gap-6 px-4 w-full max-w-5xl mx-auto pt-10"
    >
      {/* 1. Specialist Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Integration Architect
      </div>

      <div className="space-y-4">
        {/* 2. Adaptive Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground">
          Mohammad{" "}
          <span className="text-blue-600 dark:text-blue-500">Saddam</span>
        </h1>

        {/* 3. The Headline */}
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground/90 max-w-3xl mx-auto leading-tight">
          {title || "Architectural Assurance for High-Stakes CRM Syncs"}
        </h2>

        {/* 4. Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle ||
            "Building fault-tolerant Node.js middleware for US & European SaaS."}
        </p>
      </div>

      {/* 5. Fixed: High-Visibility Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <button className="flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 active:scale-95">
          <HiRocketLaunch className="text-xl" />
          Request Strategy Call
        </button>

        <div className="flex gap-4">
          <a
            href="#"
            className="p-4 bg-secondary text-secondary-foreground border border-border rounded-2xl hover:bg-secondary/80 transition-all shadow-md"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="#"
            className="p-4 bg-secondary text-secondary-foreground border border-border rounded-2xl hover:bg-secondary/80 transition-all shadow-md"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
