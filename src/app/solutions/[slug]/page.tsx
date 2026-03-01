"use client";

import { useParams } from "next/navigation";
// FIXED: Using relative path to bypass IDE alias resolution issues
import { PROJECTS_DATA } from "../../../constants/projects";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Cpu, Database } from "lucide-react";
import Link from "next/link";

export default function CaseStudyPage() {
  const params = useParams();

  // 1. Normalize the slug to ensure it matches the registry keys exactly
  const rawSlug = params?.slug as string;
  const slug = rawSlug?.toLowerCase().trim();

  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];

  // 2. Handle missing project with a branded recovery UI
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-foreground bg-background p-6">
        <h2 className="text-3xl font-black mb-6">
          Integration Roadmap Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Slug received:{" "}
          <span className="text-blue-500 font-mono">{rawSlug}</span>
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground pt-32 pb-20 overflow-hidden transition-colors">
      {/* 3. Background Design Continuity */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-500 mb-12 group transition-all"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Back to
          Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="md:col-span-2 space-y-10">
              <section>
                <h3 className="text-2xl font-bold text-blue-500 flex items-center gap-3 mb-4">
                  <Cpu /> The Challenge
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDetail.problem}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-blue-500 flex items-center gap-3 mb-4">
                  <Database /> Architectural Solution
                </h3>
                <ul className="space-y-4">
                  {project.fullDetail.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-4 p-5 bg-secondary/30 rounded-2xl border border-border shadow-sm"
                    >
                      <CheckCircle2
                        className="text-green-500 mt-1 shrink-0"
                        size={20}
                      />
                      <span className="font-medium text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="p-8 bg-card border border-border rounded-3xl h-fit sticky top-32 shadow-xl">
              <h4 className="font-bold mb-4 uppercase text-[10px] text-muted-foreground tracking-[0.3em]">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-secondary text-foreground text-[10px] font-bold rounded-full border border-border uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
