"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Database, Mic } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    slug: "intermedia-gong", // Required for Dynamic Routing
    title: "Intermedia ↔ Gong Voice Intelligence Sync",
    subtitle: "Automated Call Recording Pipeline",
    description:
      "Architected a full-lifecycle Node.js utility to sync call recordings from Intermedia to Gong. Managed complex user mapping, automated call creation, and binary media uploads with a fail-safe cleanup layer.",
    imageURL: "/intermedia-sync.jpg",
    tags: ["Node.js (ESM)", "Gong API", "Media Buffering", "FS Cleanup"],
    metrics: ["Automated user mapping", "99.9% Sync Integrity"],
    type: "Sales Enablement / AI",
    icon: <Mic className="w-5 h-5 text-blue-500" />,
  },
  {
    slug: "nikohealth-crm", // Required for Dynamic Routing
    title: "NikoHealth ↔ CRM Patient Automation",
    subtitle: "Resilient MedTech Data Pipeline",
    description:
      "Designed a dual-layer integration using webhooks and a fallback polling pipeline to ensure zero data loss during sync failures.",
    imageURL: "/medtech-sync.jpg",
    tags: ["Async Processing", "Error Recovery", "TypeScript"],
    metrics: ["Fault-tolerant polling", "Sync automation"],
    type: "MedTech / SaaS",
    icon: <Database className="w-5 h-5 text-blue-500" />,
  },
];

const CaseStudyCard = ({ project }: { project: (typeof projectsData)[0] }) => (
  <Link href={`/solutions/${project.slug}`} className="block group">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 hover:border-blue-500/30"
    >
      <div className="grid md:grid-cols-12 gap-0">
        {/* Visual Side */}
        <div className="md:col-span-5 relative h-64 md:h-auto bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent z-10" />
          <Image
            src={project.imageURL}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
        </div>

        {/* Content Side */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                {project.icon}
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold text-foreground leading-tight mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
            {/* The Arrow signals clickability to the user */}
            <div className="p-2 rounded-full bg-secondary/50 border border-border group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Defensive check with optional chaining */}
            {project.metrics?.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 bg-secondary/50 rounded-xl border border-border"
              >
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-[11px] font-bold text-foreground uppercase tracking-tight">
                  {metric}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {/* Defensive check with optional chaining */}
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest border border-border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Subtle "Read More" hint for specialist positioning */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore Architecture &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default function CaseStudies() {
  return (
    <section
      id="solutions"
      className="py-24 bg-background px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Select Integration Case Studies
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mt-6 mx-auto md:mx-0"></div>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build systems where data integrity isn&apos;t a goal—it&apos;s a
            mission-critical requirement.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <CaseStudyCard key={project.slug || index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useParams } from "next/navigation";
// import { PROJECTS_DATA } from "@/constants/projects";
// import { motion } from "framer-motion";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";
// import Link from "next/link";

// export default function CaseStudyPage() {
//   const { slug } = useParams();
//   const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];

//   // If slug doesn't match keys in PROJECTS_DATA, show error
//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-foreground bg-background">
//         <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
//         <Link href="/" className="text-blue-500 hover:underline">
//           Return Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <main className="relative min-h-screen bg-background text-foreground pt-32 pb-20 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

//       <div className="container mx-auto px-6 max-w-5xl relative z-10">
//         <Link
//           href="/#solutions"
//           className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 group transition-all"
//         >
//           <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Back to
//           Case Studies
//         </Link>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="space-y-12"
//         >
//           <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
//             {project.title}
//           </h1>

//           <div className="grid md:grid-cols-3 gap-12 mt-16">
//             <div className="md:col-span-2 space-y-10">
//               <section>
//                 <h3 className="text-2xl font-bold text-blue-500 mb-4">
//                   The Challenge
//                 </h3>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {project.fullDetail.problem}
//                 </p>
//               </section>

//               <section>
//                 <h3 className="text-2xl font-bold text-blue-500 mb-4">
//                   The Solution
//                 </h3>
//                 <ul className="space-y-4">
//                   {project.fullDetail.features.map((f, i) => (
//                     <li
//                       key={i}
//                       className="flex gap-4 p-5 bg-secondary/30 rounded-2xl border border-border"
//                     >
//                       <CheckCircle2
//                         className="text-green-500 mt-1 shrink-0"
//                         size={20}
//                       />
//                       <span className="font-medium text-foreground">{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             </div>

//             <aside className="p-8 bg-card border border-border rounded-3xl h-fit sticky top-32">
//               <h4 className="font-bold mb-4 uppercase text-xs text-muted-foreground tracking-widest">
//                 Tech Stack
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {project.techStack.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 bg-secondary text-xs font-bold rounded-full border border-border"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </aside>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }
// const CaseStudyCard = ({ project }: { project: any }) => (
//   <Link href={`/solutions/${project.slug}`} className="block group">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl"
//     >
//       <div className="grid md:grid-cols-12 gap-0">
//         <div className="md:col-span-5 relative h-64 md:h-auto bg-muted overflow-hidden">
//           <Image
//             src={project.imageURL}
//             alt={project.title}
//             fill
//             className="object-cover transition-transform group-hover:scale-110 opacity-90"
//           />
//         </div>
//         <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
//           <div className="flex justify-between items-start mb-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400">
//                 {project.icon}
//               </div>
//               <div>
//                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
//                   {project.type}
//                 </span>
//                 <h3 className="mt-1 text-2xl font-bold text-foreground">
//                   {project.title}
//                 </h3>
//               </div>
//             </div>
//             <ArrowUpRight className="text-muted-foreground group-hover:text-blue-500 transition-all" />
//           </div>
//           <p className="mb-8 text-base text-muted-foreground leading-relaxed">
//             {project.description}
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {project.tags?.map((tag: string) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase rounded-full border border-border"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   </Link>
// );

// CRUCIAL: Default Export fixes the 'got: undefined' error
// export default function CaseStudies() {
//   return (
//     <section
//       id="solutions"
//       className="py-24 bg-background px-6 border-t border-border"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
//             Select Case Studies
//           </h2>
//           <div className="h-1.5 w-24 bg-blue-600 mt-6"></div>
//         </div>
//         <div className="flex flex-col gap-16">
//           {Object.values(PROJECTS_DATA).map((project) => (
//             <CaseStudyCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
