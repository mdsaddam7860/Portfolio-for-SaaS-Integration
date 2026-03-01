// // import { Github, ExternalLink, Package } from "lucide-react";

// // export const OpenSourceContribution = () => {
// //   return (
// //     <section className="py-20 px-6 bg-[#0f172a] text-white border-y border-blue-500/10">
// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
// //         {/* Left Side: The "Product" feel */}
// //         <div className="flex-1 space-y-6">
// //           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
// //             <Package size={16} /> Featured Open Source
// //           </div>

// //           <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
// //             HubSpot CRM Integration Toolkit
// //           </h2>

// //           <p className="text-gray-400 text-lg leading-relaxed">
// //             I built and maintained a lightweight ES Modules-based Node.js
// //             library to handle complex HubSpot CRM operations. It solves the
// //             "hard parts" of integrations:
// //             <strong>
// //               {" "}
// //               v4 batch associations, automated pagination,
// //             </strong> and <strong>consistent error handling.</strong>
// //           </p>

// //           <div className="flex gap-4">
// //             <a
// //               href="https://github.com/mohammadsaddam-dev/hubspot-toolkit"
// //               target="_blank"
// //               className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
// //             >
// //               <Github size={20} /> View Source
// //             </a>
// //             <a
// //               href="https://www.npmjs.com/package/hubspot-toolkit"
// //               target="_blank"
// //               className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
// //             >
// //               <ExternalLink size={20} /> NPM Package
// //             </a>
// //           </div>
// //         </div>

// //         {/* Right Side: Technical Specs (From your resume details) */}
// //         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           {[
// //             {
// //               title: "v4 Batching",
// //               desc: "Reliable object linking across contacts and deals.",
// //             },
// //             {
// //               title: "Pagination",
// //               desc: "Auto-fetches complete datasets across API limits.",
// //             },
// //             {
// //               title: "Auth Support",
// //               desc: "Supports Private App & OAuth 2.0 access tokens.",
// //             },
// //             {
// //               title: "Clean Architecture",
// //               desc: "Abstracted HTTP handling with Axios & Winston.",
// //             },
// //           ].map((spec, i) => (
// //             <div
// //               key={i}
// //               className="p-4 bg-gray-900/50 rounded-xl border border-gray-800"
// //             >
// //               <h3 className="text-blue-400 font-bold mb-1">{spec.title}</h3>
// //               <p className="text-sm text-gray-500">{spec.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// "use client"; // Mandatory for Framer Motion

// import { Github, ExternalLink, Package } from "lucide-react";
// import { motion } from "framer-motion";

// const OpenSourceContribution = () => {
//   return (
//     <section className="relative py-24 px-6 bg-[#030014] text-white border-y border-blue-500/10 overflow-hidden">
//       {/* 1. Background Layer */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"></div>
//         <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-400/15 rounded-full animate-ping"></div>

//         {/* Architectural Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Gradient Orbs */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-400/15 via-blue-600/10 to-transparent rounded-full blur-2xl"></div>
//       </div>

//       {/* 2. Content Layer */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
//         {/* Left Side: Product Branding */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="flex-1 space-y-6"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
//             <Package size={16} /> Featured Open Source
//           </div>

//           <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
//             HubSpot CRM Integration Toolkit
//           </h2>

//           <p className="text-gray-400 text-lg leading-relaxed">
//             I built and maintained a lightweight ES Modules-based Node.js
//             library to handle complex HubSpot CRM operations. It solves the
//             &quot;hard parts&quot; of integrations:
//             <strong>
//               {" "}
//               v4 batch associations, automated pagination,
//             </strong> and <strong>consistent error handling.</strong>
//           </p>

//           <div className="flex gap-4">
//             <a
//               href="https://github.com/mohammadsaddam-dev/hubspot-toolkit"
//               target="_blank"
//               className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//             >
//               <Github size={20} /> View Source
//             </a>
//             <a
//               href="https://www.npmjs.com/package/hubspot-toolkit"
//               target="_blank"
//               className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//             >
//               <ExternalLink size={20} /> NPM Package
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Side: Technical Specs */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
//         >
//           {[
//             {
//               title: "v4 Batching",
//               desc: "Reliable object linking across contacts and deals.",
//             },
//             {
//               title: "Pagination",
//               desc: "Auto-fetches complete datasets across API limits.",
//             },
//             {
//               title: "Auth Support",
//               desc: "Supports Private App & OAuth 2.0 access tokens.",
//             },
//             {
//               title: "Clean Architecture",
//               desc: "Abstracted HTTP handling with Axios & Winston.",
//             },
//           ].map((spec, i) => (
//             <div
//               key={i}
//               className="p-5 bg-card/40 backdrop-blur-md border border-blue-500/10 rounded-xl hover:border-blue-500/30 transition-all group shadow-2xl"
//             >
//               <h3 className="text-blue-400 font-bold mb-1 group-hover:text-blue-300 transition-colors">
//                 {spec.title}
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 {spec.desc}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OpenSourceContribution; // REQUIRED FIX: Default Export

"use client";
import { Github, ExternalLink, Package } from "lucide-react";
import { motion } from "framer-motion";

// Use 'default export' to prevent the 'got: undefined' error
export default function OpenSourceContribution() {
  return (
    <section className="relative py-24 px-6 bg-background border-y border-border overflow-hidden">
      {/* Background Elements synced with Skills background logic */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Package size={16} /> Featured Open Source
          </div>

          <h2 className="text-4xl font-bold text-foreground">
            HubSpot CRM Integration Toolkit
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            I built and maintained a library for{" "}
            <strong>v4 batch associations</strong> and{" "}
            <strong>automated pagination</strong>.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              <Github size={20} /> View Source
            </a>
          </div>
        </div>

        {/* Technical Specs Cards: Using 'bg-card' ensures they switch colors correctly */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "v4 Batching", desc: "Reliable object linking." },
            { title: "Pagination", desc: "Auto-fetches data." },
            {
              title: "Auth Support",
              desc: "Supports Private App & OAuth 2.0 access tokens.",
            },
            {
              title: "Clean Architecture",
              desc: "Abstracted HTTP handling with Axios & Winston.",
            },
          ].map((spec, i) => (
            <div
              key={i}
              className="p-5 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all"
            >
              <h3 className="text-primary font-bold mb-1">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
