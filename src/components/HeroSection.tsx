import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import indiaSilhouette from "@/assets/india-silhouette.png";


const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[100vh] bg-background">
      {/* 1. Background & Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Base warm hazy gradient */}
        <div className="absolute inset-0 warm-section opacity-20" />

        {/* Gradient Top part */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-transparent" />

        {/* Mobile Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="absolute inset-x-0 bottom-0 h-[60vh] sm:h-full flex flex-col justify-end z-0 overflow-hidden"
        >
          <img
            src={indiaSilhouette}
            alt="Indian architectural skyline"
            className="w-full h-full object-cover object-bottom opacity-70 dark:opacity-60 filter brightness-[1.02] contrast-[1.05] scale-[1.7] sm:scale-100 origin-bottom transition-transform duration-1000"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-60 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Bottom transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="container-custom relative z-10 text-center pt-32 sm:pt-32 md:pt-40 lg:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 mx-auto shadow-sm"
        >
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 900 600"
              className="w-4 h-[11px] rounded-[1px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="900" height="600" fill="#128807" />
              <rect width="900" height="400" fill="#fff" />
              <rect width="900" height="200" fill="#f4c430" />
              <g transform="translate(450,300)">
                <circle r="92.5" fill="#000080" />
                <circle r="80" fill="#fff" />
                <circle r="16" fill="#000080" />
                <path
                  d="M0-80V80M-20.7-77.3L20.7 77.3M-40-69.3L40 69.3M-56.6-56.6L56.6 56.6M-69.3-40L69.3 40M-77.3-20.7L77.3 20.7M-80 0H80M-77.3 20.7L77.3-20.7M-69.3 40L40-69.3M-56.6 56.6L56.6-56.6M-40 69.3L40-69.3M-20.7 77.3L20.7-77.3"
                  stroke="#000080"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              Powered by Bharattech
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-heading text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
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

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative mt-8 py-10 border-y border-border/50 overflow-hidden"
        >
          <div className="marquee-wrapper">
            <div className="flex animate-marquee gap-12 sm:gap-16 md:gap-24">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground/40 dark:text-foreground/20 uppercase tracking-tighter whitespace-nowrap transition-colors hover:text-foreground/60"
                >
                  Built for India's leading institutions
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;