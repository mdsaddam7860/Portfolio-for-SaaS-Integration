import { Mic, Database } from "lucide-react";

export const PROJECTS_DATA = {
  "intermedia-gong": {
    slug: "intermedia-gong",
    title: "Intermedia ↔ Gong Voice Intelligence Sync",
    badge: "Voice Ops / AI",
    type: "Sales Enablement",
    description:
      "Architected a full-lifecycle Node.js utility to sync call recordings from Intermedia to Gong. Managed complex user mapping and automated media uploads.",
    techStack: ["Node.js 18+", "Gong API", "Intermedia API", "Winston Logger"],
    icon: <Mic className="w-5 h-5 text-blue-500" />,
    metrics: ["Automated user mapping", "99.9% Sync Integrity"],
    imageURL: "/intermedia-architecture.jpg",
    fullDetail: {
      problem:
        "Fragmented call data between Intermedia storage and Gong analysis.",
      solution:
        "A Node.js orchestrator that automates the download, mapping, and upload lifecycle.",
      features: [
        "Maps Intermedia users to Gong IDs via local JSON",
        "Fail-safe execution logic prevents orphaned temp files",
        "Centralized logging for API traceability",
      ],
    },
  },
  "nikohealth-crm": {
    slug: "nikohealth-crm",
    title: "NikoHealth ↔ CRM Patient Automation",
    badge: "MedTech",
    type: "Healthcare SaaS",
    description:
      "Designed a dual-layer integration using webhooks and fallback polling for zero data loss.",
    techStack: ["TypeScript", "Node.js", "Webhook Listeners"],
    icon: <Database className="w-5 h-5 text-blue-500" />,
    metrics: ["Fault-tolerant polling", "Sync automation"],
    imageURL: "/medtech-sync.jpg",
    fullDetail: {
      problem: "Unreliable syncs leading to patient data inconsistencies.",
      solution: "Resilient middleware with idempotency-aware processing.",
      features: ["Webhook ACK optimization", "Fallback polling recovery"],
    },
  },
};
