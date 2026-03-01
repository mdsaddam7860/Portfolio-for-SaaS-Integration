import { BlogsSection } from "@/components/main/Blogs";
import ContactUs from "@/components/main/ContactUs";
import Hero from "@/components/main/Hero";
import CaseStudies from "@/components/main/CaseStudies";
import ResumeSection from "@/components/main/Resume";
import Skills from "@/components/main/Skills";
import Timeline from "@/components/main/Timeline";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import CertificationsSection from "@/components/main/Certifications";
import { AnalyticsDebug } from "@/components/analytics/AnalyticsDebug";
import InteractiveWrapper from "@/components/main/InteractiveWrapper";
import OpenSourceContribution from "@/components/main/OpenSourceContribution";

export const metadata: Metadata = {
  title:
    "Mohammad Saddam - Integration Architect | HubSpot & CRM Automation Expert",
  description:
    "Specialist in architecting fault-tolerant API middleware, HubSpot CRM synchronizations, and resilient MedTech data pipelines. Expert in Node.js, TypeScript, and high-integrity data mapping.",
  alternates: {
    canonical: "https://mohammadsaddam.vercel.app",
  },
};

// export default function Home() {
//   return (
//     <div className="min-h-screen min-w-screen">
//       {/* Hidden SEO content for better indexing */}
//       <div className="sr-only">
//         <h1>Hasan Ashab - DevOps Engineer and Cloud Specialist Portfolio</h1>
//         <p>
//           Welcome to my professional portfolio. I am a DevOps engineer and cloud
//           specialist with expertise in AWS, Kubernetes, Docker, CI/CD pipelines,
//           infrastructure automation, and scalable cloud solutions. Browse my
//           projects, skills, and professional experience.
//         </p>
//       </div>

//       <InteractiveWrapper>
//         {/* <Hero /> */}
//         {/* <Skills /> */}
//         <ResumeSection />
//         <Timeline />
//         {/* <CertificationsSection /> */}
//         <Projects />
//         <BlogsSection />
//         <ContactUs />
//         <Toaster position="bottom-right" />
//       </InteractiveWrapper>

//       {/* Temporary test components for analytics - remove in production */}
//       {/* <AnalyticsDebug /> */}
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen">
      {/* SEO Optimized for HubSpot/CRM Integration Leads */}
      <div className="sr-only">
        <h1>Mohammad Saddam - HubSpot & CRM Integration Specialist</h1>
        <p>
          Expert in building bulletproof, bi-directional syncs between HubSpot
          and SaaS platforms like Healthie, Filevine, and ServiceM8.
          Specializing in Node.js, webhook reliability, and automated data
          mapping for US and European SaaS companies.
        </p>
      </div>

      <InteractiveWrapper>
        {/* Focus on ROI, not just tech */}
        <Hero
          title="Bulletproof HubSpot Integrations for Scaling SaaS"
          subtitle="I build high-reliability syncs that eliminate manual data entry and ensure your CRM remains your single source of truth."
        />
        {/* <Hero
          title="Bulletproof HubSpot Integrations for Scaling SaaS"
          subtitle="I build high-reliability syncs that eliminate manual data entry and ensure your CRM remains your single source of truth."
        /> */}

        {/* Group by "Core Competencies" rather than just a list */}
        <Skills />

        {/* Showcase the 'HubSpot Toolkit' as your authority piece */}
        <OpenSourceContribution />

        {/* The 'ResumeSection' should focus on your transition to Agency ownership */}
        <ResumeSection />

        <Timeline />

        {/* Crucial: Change 'Projects' to 'Case Studies' */}
        <CaseStudies />

        <ContactUs cta="Book a Technical Discovery Call" />
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
    </div>
  );
}
