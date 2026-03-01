"use client";
import HeroContent from "../sub/HeroContent";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section
      id="about"
      // Semantic 'bg-background' ensures it follows your toggle
      className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10">
        {/* Architectural Grid: Adapts opacity based on theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Dynamic Glow Orbs: Uses 'primary' variable from your theme */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <HeroContent title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
