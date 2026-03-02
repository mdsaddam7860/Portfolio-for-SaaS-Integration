// "use client";

// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { FaDownload } from "react-icons/fa";

// const Document = dynamic(
//   () => import("react-pdf").then((mod) => mod.Document),
//   { ssr: false }
// );
// const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
//   ssr: false,
// });

// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// const ResumeSection = () => {
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     import("react-pdf").then(({ pdfjs }) => {
//       pdfjs.GlobalWorkerOptions.workerSrc =
//         "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.3.31/build/pdf.worker.min.mjs";
//     });
//   }, []);

//   const onDocumentLoadError = (error: Error) => {
//     setError(error.message);
//   };

//   return (
//     <section
//       id="resume"
//       className="bg-background text-foreground px-6 py-16 flex flex-col items-center min-h-screen"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mb-10 relative z-10"
//       >
//         <h2
//           title="My Resume"
//           className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent tracking-tight mb-4"
//         >
//           My Resume
//         </h2>
//         <p className="text-lg text-muted-foreground">
//           View my professional qualifications and experience as a DevOps and
//           Cloud Engineer.
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.98 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="w-full max-w-4xl bg-card border border-border rounded-lg shadow-lg overflow-hidden"
//       >
//         <div className="relative w-full overflow-y-auto">
//           {error ? (
//             <p className="text-destructive text-center text-lg p-4">
//               Failed to load PDF: {error}
//             </p>
//           ) : (
//             <Document
//               file="/resume.pdf"
//               onLoadError={onDocumentLoadError}
//               className="flex justify-center w-full"
//             >
//               <Page
//                 pageNumber={1}
//                 className="flex justify-center"
//                 renderTextLayer
//                 renderAnnotationLayer
//                 width={Math.min(
//                   890,
//                   typeof window !== "undefined" ? window.innerWidth - 20 : 1200
//                 )}
//                 scale={1}
//               />
//             </Document>
//           )}
//         </div>
//       </motion.div>

//       <motion.a
//         href="/resume.pdf"
//         download
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
//       >
//         <FaDownload className="text-base" />
//         Download Resume
//       </motion.a>
//     </section>
//   );
// };

// export default ResumeSection;

"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, useCallback } from "react";
import { FaDownload, FaCalendarCheck } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";

// Dynamic imports to keep the initial bundle lean
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false, loading: () => <div className="h-[600px] flex items-center justify-center"><FaSpinner className="animate-spin text-3xl text-primary" /></div> }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const ResumeSection = () => {
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(800);

  // Responsive Width Handler
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setPageWidth(width - 40);
    else if (width < 1024) setPageWidth(width - 100);
    else setPageWidth(850);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Configure Worker
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section id="resume" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decor - Signaling 'Infrastructure' */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Review my track record in **Cloud Infrastructure** and **Enterprise API Integrations**.
          </p>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-5xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-2 md:p-6"
        >
          <div className="bg-secondary/30 rounded-xl overflow-hidden border border-border/50 flex justify-center min-h-[500px]">
            {error ? (
              <div className="flex flex-col items-center justify-center p-20 text-center">
                <p className="text-destructive font-bold mb-4">Pipeline Error: {error}</p>
                <a href="/resume.pdf" download className="text-blue-500 underline">Download directly instead</a>
              </div>
            ) : (
              <Document
                file="/resume.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(err) => setError(err.message)}
                className="shadow-inner"
              >
                <Page
                  pageNumber={1}
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="max-w-full h-auto"
                />
              </Document>
            )}
          </div>
        </motion.div>

        {/* Strategic CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-2xl border border-border hover:bg-secondary/80 transition-all w-full sm:w-auto justify-center"
          >
            <FaDownload /> Download PDF
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all w-full sm:w-auto justify-center"
          >
            <FaCalendarCheck /> Book Discovery Call
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;