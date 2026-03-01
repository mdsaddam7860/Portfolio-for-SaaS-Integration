// 'use client'

// import {
//   MobileNav,
//   MobileNavHeader,
//   MobileNavMenu,
//   MobileNavToggle,
//   NavBody,
//   NavItems,
//   NavbarLogo,
//   Navbar as NavbarWrapper,
// } from '@/components/ui/resizable-navbar'
// import { ThemeToggle } from '@/hooks/use-toogle'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { FaBlog, FaBriefcase, FaCode, FaEnvelope, FaProjectDiagram, FaUser } from 'react-icons/fa'
// import { Button } from '../ui/button'
// import { TrackableElement, TrackableContact } from '@/components/analytics/TrackableElement'
// import { useAnalyticsContext } from '@/components/analytics/AnalyticsProvider'

// export function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const { trackClick } = useAnalyticsContext()

//   const navItems = [
//     { name: 'About', link: '#about', icon: <FaUser /> },
//     { name: 'Skills', link: '#skills', icon: <FaCode /> },
//     { name: 'Experience', link: '#experience', icon: <FaBriefcase /> },
//     { name: 'Projects', link: '#projects', icon: <FaProjectDiagram /> },
//     { name: 'Blogs', link: '#blogs', icon: <FaBlog /> },
//   ]

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
//       <NavbarWrapper className="flex flex-col items-center justify-between gap-4 px-4 py-2">
//         <NavBody>
//           <NavbarLogo isScrolled={isScrolled} />

//           <NavItems items={navItems} isScrolled={isScrolled} />

//           <div className="flex items-center gap-2">
//             <ThemeToggle />
//             <TrackableContact method="navbar-contact">
//               <Button
//                 title="Contact me"
//                 variant="default"
//                 className="rounded-full z-50"
//                 onClick={() => {
//                   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//                 }}
//               >
//                 <FaEnvelope />
//               </Button>
//             </TrackableContact>
//           </div>
//         </NavBody>

//         <MobileNav>
//           <MobileNavHeader>
//             <NavbarLogo isScrolled={isScrolled} />
//             <MobileNavToggle
//               isOpen={isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             />
//           </MobileNavHeader>

//           <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
//             {navItems.map((item) => (
//               <TrackableElement
//                 key={`mobile-link-${item.name}`}
//                 elementId={`mobile-nav-${item.name.toLowerCase()}`}
//                 elementText={`Mobile Nav: ${item.name}`}
//               >
//                 <Link
//                   href={item.link}
//                   onClick={() => {
//                     setIsMobileMenuOpen(false)
//                     document
//                       .getElementById(item.link.slice(1))
//                       ?.scrollIntoView({ behavior: 'smooth' })
//                   }}
//                   className="relative text-neutral-600 dark:text-neutral-300 flex gap-2 items-center"
//                 >
//                   {item.icon} <span>{item.name}</span>
//                 </Link>
//               </TrackableElement>
//             ))}
//             <div className="flex w-full flex-col gap-4">
//               <ThemeToggle />
//               <TrackableContact method="mobile-navbar-contact">
//                 <Button
//                   title="Contact me"
//                   onClick={() => {
//                     setIsMobileMenuOpen(false)
//                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//                   }}
//                   variant="default"
//                   className="w-full rounded-full"
//                 >
//                   <FaEnvelope />
//                 </Button>
//               </TrackableContact>
//             </div>
//           </MobileNavMenu>
//         </MobileNav>
//       </NavbarWrapper>
//       <div className="flex items-center justify-center">
//         {!isScrolled && (
//           <hr className="h-1/2 w-[90vw] rounded-full border-gray-500 bg-gradient-to-r from-primary-600 to-primary-800 shadow-md" />
//         )}
//       </div>
//     </div>
//   )
// }

"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarLogo,
  Navbar as NavbarWrapper,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/hooks/use-toogle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaUserAstronaut,
  FaTerminal,
} from "react-icons/fa";
import { Button } from "../ui/button";
import {
  TrackableElement,
  TrackableContact,
} from "@/components/analytics/TrackableElement";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // UPDATED: Nav items to reflect your Integration Architect positioning
  const navItems = [
    { name: "About", link: "#about", icon: <FaUserAstronaut /> },
    { name: "Expertise", link: "#skills", icon: <FaCode /> },
    { name: "Roadmap", link: "#experience", icon: <FaTerminal /> },
    { name: "Case Studies", link: "#solutions", icon: <FaProjectDiagram /> },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      <NavbarWrapper
        // FIXED: Using backdrop-blur and border-border for theme-adaptive transparency
        className={`flex flex-col items-center justify-between gap-4 px-6 py-3 transition-all ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <NavBody className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <NavbarLogo isScrolled={isScrolled} />

          {/* Desktop Navigation Items */}
          <NavItems items={navItems} isScrolled={isScrolled} />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <TrackableContact method="navbar-contact">
              <Button
                title="Book a Strategy Session"
                variant="default"
                className="hidden md:flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95 px-6"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaEnvelope className="text-sm" />
                <span>Let&apos;s Sync</span>
              </Button>
            </TrackableContact>
          </div>
        </NavBody>

        {/* Mobile Navigation Logic */}
        <MobileNav className="w-full md:hidden">
          <MobileNavHeader className="flex items-center justify-between w-full">
            <NavbarLogo isScrolled={isScrolled} />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-background/95 backdrop-blur-2xl border-b border-border"
          >
            <div className="flex flex-col gap-6 p-8">
              {navItems.map((item) => (
                <TrackableElement
                  key={`mobile-link-${item.name}`}
                  elementId={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  elementText={`Mobile Nav: ${item.name}`}
                >
                  <Link
                    href={item.link}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document
                        .getElementById(item.link.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-2xl font-bold text-foreground hover:text-blue-500 flex items-center gap-4 transition-colors"
                  >
                    <span className="text-blue-500/50">{item.icon}</span>
                    {item.name}
                  </Link>
                </TrackableElement>
              ))}

              <TrackableContact method="mobile-navbar-contact">
                <Button
                  title="Contact me"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-6 rounded-2xl bg-blue-600 text-white font-bold text-lg mt-4 shadow-xl"
                >
                  <FaEnvelope className="mr-2" /> Request Strategy Call
                </Button>
              </TrackableContact>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarWrapper>

      {/* Decorative Progress/Divider Line */}
      <div className="w-full flex justify-center">
        {!isScrolled && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"
          />
        )}
      </div>
    </div>
  );
}
