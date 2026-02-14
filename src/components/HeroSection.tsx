import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import indiaSilhouette from "@/assets/india-silhouette.png";

const logos = [
  "Government of India",
  "DRDO",
  "ISRO",
  "Infosys",
  "TCS",
  "Wipro",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[100vh] bg-background">
      {/* 1. Background Atmosphere & Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Base warm hazy gradient */}
        <div className="absolute inset-0 warm-section opacity-20" />

        {/* Gradient overlays for better text readability - Top part */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-transparent" />

        {/* Centered Indian Silhouette as background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="absolute inset-x-0 bottom-0 h-auto flex flex-col justify-end z-1"
        >
          <img
            src={indiaSilhouette}
            alt="Indian architectural skyline"
            className="w-full h-auto object-contain opacity-70 dark:opacity-60 filter brightness-[1.02] contrast-[1.05]"
          />
          {/* Subtle bottom fade gradient to match reference and blend with section below */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Bottom wash for transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 text-center pt-32 sm:pt-40 lg:pt-48 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 mx-auto shadow-sm"
        >
          <span className="text-xs font-medium text-muted-foreground tracking-wide">
            🇮🇳 Powered by Bharattech
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
        >
          AI for all, from India
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
        >
          Rivinity is a governed AI intelligence platform integrating language models,
          augmented search, development, analytics, and privacy — built for
          India's sovereign future.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-12"
        >
          <a href="#platform" className="btn-primary">
            Explore the Platform
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-0"
        >
          <p className="text-xs text-muted-foreground mb-5 uppercase tracking-widest">
            Built for India's leading institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {logos.map((logo) => (
              <span key={logo} className="text-sm font-heading font-semibold text-foreground whitespace-nowrap">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;