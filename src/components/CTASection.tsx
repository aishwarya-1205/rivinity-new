import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const NeuralSphere = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-50">
      <svg className="w-[800px] h-[800px]" viewBox="0 0 100 100">
        <defs>
          <linearGradient
            id="sphere-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Rotating Rings */}
        {[...Array(6)].map((_, i) => (
          <motion.ellipse
            key={i}
            cx="50"
            cy="50"
            rx="45"
            ry={15 + i * 5}
            fill="none"
            stroke="url(#sphere-gradient)"
            strokeWidth="0.15"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * -2,
            }}
            style={{ transformOrigin: "center" }}
          />
        ))}
        {/* Cross Axis Rings */}
        {[...Array(6)].map((_, i) => (
          <motion.ellipse
            key={`cross-${i}`}
            cx="50"
            cy="50"
            rx={15 + i * 5}
            ry="45"
            fill="none"
            stroke="url(#sphere-gradient)"
            strokeWidth="0.15"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * -2,
            }}
            style={{ transformOrigin: "center" }}
          />
        ))}
      </svg>
    </div>
  );
};

const CTASection = () => {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-center bg-background py-20 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Neural Sphere */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden scale-75 sm:scale-100">
        <NeuralSphere />
      </div>

      <div className="relative z-10 w-[90%] max-w-[90rem] mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={wordVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md">
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Limitless Potential
              </span>
            </div>
          </motion.div>

          {/* Headline - Word by Word with Line Breaks */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 sm:mb-8 tracking-tighter leading-[1.1] sm:leading-[0.95]">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
                {["Build", "the", "future", "of", "India's", "AI"].map((word, i) => (
                  <motion.span key={`line1-${i}`} variants={wordVariants}>
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
                {["with", "Rivinity."].map((word, i) => (
                  <motion.span
                    key={`line2-${i}`}
                    variants={wordVariants}
                    className={
                      word === "Rivinity."
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]"
                        : ""
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </h2>

          <motion.p
            variants={wordVariants}
            className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-16 leading-relaxed px-4"
          >
            Join India's most ambitious institutions building on sovereign, <br className="hidden md:block" />
            governed AI infrastructure.
          </motion.p>

          {/* Magnetic Glow Button */}
          <motion.div variants={wordVariants} className="w-full max-w-[280px] sm:max-w-none">
            <Magnetic strength={0.4} radius={250}>
              <button className="group relative w-full sm:w-64 h-14 sm:h-20 rounded-full bg-foreground text-background font-heading font-bold text-base sm:text-xl overflow-hidden transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.5)]">
                {/* Gradient Border */}
                <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-foreground rounded-full h-full w-full" />
                </div>

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Early Access
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>

                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
