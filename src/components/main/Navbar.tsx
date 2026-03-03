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

  // RE-INSERTED: This was likely missing or commented out
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
        className={`flex flex-col items-center justify-between gap-4 px-6 py-3 transition-all ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* DESKTOP VIEW: hidden on mobile */}
        <NavBody className="hidden md:flex max-w-7xl mx-auto w-full items-center justify-between">
          <NavbarLogo isScrolled={isScrolled} />

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

        {/* MOBILE VIEW: hidden on desktop */}
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
                      .scrollIntoView({ behavior: "smooth" });
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

      {/* Decorative Divider */}
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
