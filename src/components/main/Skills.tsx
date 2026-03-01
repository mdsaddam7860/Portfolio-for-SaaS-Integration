"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Skill, skills } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";

const uniqueSkills: Skill[] = Array.from(
  skills
    .reduce((map, skill) => {
      if (!map.has(skill.skill_name)) {
        map.set(skill.skill_name, { ...skill, width: 40, height: 40 });
      }
      return map;
    }, new Map<string, Skill>())
    .values()
);

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [maxItemsToShow, setMaxItemsToShow] = useState(12); // Default value

  useEffect(() => {
    // This function will run only on the client side
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 768) {
          setMaxItemsToShow(12);
        } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
          setMaxItemsToShow(8);
        } else {
          setMaxItemsToShow(6);
        }
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsToShow = showAll
    ? uniqueSkills
    : uniqueSkills.slice(0, maxItemsToShow);

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-12 py-20 px-4 sm:px-8 min-h-[600px] overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-blue-400/10 rounded-lg rotate-12 float-animation"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl relative z-10"
      >
        <h2
          id="skills-heading"
          title="Technical Skills"
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4"
        >
          Technical Expertise
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-primary font-semibold">
          <div className="flex items-center gap-2">
            <span>🔷</span>
            <span>CRM & Integration Architecture</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🔐</span>
            <span>API & Authentication</span>
          </div>

          <div className="flex items-center gap-2">
            <span>⚙️</span>
            <span>Reliability & Sync Systems</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🗄️</span>
            <span>Backend & Data Layer</span>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-6xl relative z-10 space-y-12">
        {/* CRM & Integration */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            CRM & Integration Architecture
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
            <li>HubSpot CRM APIs (Contacts, Deals, Associations)</li>
            <li>Two-Way Data Synchronization</li>
            <li>Webhook-Based Architectures</li>
            <li>Delta & Incremental Sync</li>
            <li>Data Mapping & Transformation</li>
            <li>Idempotent Processing</li>
          </ul>
        </div>

        {/* API & Authentication */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            API & Authentication
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
            <li>RESTful APIs</li>
            <li>OAuth 2.0 (Refresh Token Handling)</li>
            <li>API Keys & JWT</li>
            <li>Rate Limiting & Retry Strategies</li>
            <li>Webhook Validation & Security</li>
          </ul>
        </div>

        {/* Reliability Engineering */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Reliability & Sync Systems
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
            <li>Background Workers & Async Processing</li>
            <li>Retry & Exponential Backoff</li>
            <li>Fallback Polling Recovery</li>
            <li>Dead Letter Handling</li>
            <li>Structured Logging</li>
            <li>Production Monitoring</li>
          </ul>
        </div>

        {/* Backend Stack */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Backend & Data Layer
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
            <li>Node.js (ES Modules)</li>
            <li>Express.js</li>
            <li>TypeScript</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
      </div>
      <motion.p className="mt-12 text-center text-base text-muted-foreground">
        Every integration I build includes retry mechanisms, monitoring,
        fallback recovery strategies, and structured logging — ensuring
        production-grade reliability from day one.
      </motion.p>
    </section>
  );
};

export default Skills;
