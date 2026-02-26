import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Globe2, Shapes } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { GradientText } from "@/components/ui/GradientText";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Human-Centric AI",
      description:
        "We believe AI should empower people, not replace them. Our solutions are designed with empathy and ethical considerations at their core.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Precision & Excellence",
      description:
        "From fine-tuning LLMs to architecting neural networks, we strive for the highest level of accuracy and performance in every line of code.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-primary" />,
      title: "Sovereign Innovation",
      description:
        "We are committed to building AI that respects data sovereignty and cultural nuances, specifically tailored for the Indian landscape.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Inception",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      year: "2024",
      title: "IndicLLM Launch",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      year: "2025",
      title: "Development",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      year: "2026",
      title: "Global Recognition",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-visible">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-transparent -z-10" />

        {/* Rotating Mandala */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] z-0 opacity-[0.3] dark:opacity-[0.25]">
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full text-primary/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="4 4"
            />
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
            {[...Array(18)].map((_, i) => (
              <path
                key={i}
                d="M100 10 Q115 50 100 90 Q85 50 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                transform={`rotate(${i * 20} 100 100)`}
              />
            ))}
            {[...Array(36)].map((_, i) => (
              <circle
                key={i}
                cx="100"
                cy="30"
                r="1.2"
                fill="currentColor"
                transform={`rotate(${i * 10} 100 100)`}
              />
            ))}
          </motion.svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Empowering Bharat
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Innovation Rooted in <br />
              <GradientText
                colors={["#f97316", "#f59e0b", "#ec4899", "#ec4888"]}
                animationSpeed={4}
              >
                Indian Heritage
              </GradientText>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              We are building the sovereign AI layer for India, blending ancient
              wisdom with future-ready neural intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">
                Legacy & Vision
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, turpis et commodo pharetra, est eros bibendum
                elit, nec luctus magna felis sollicitudin mauris. Integer in
                mauris eu nibh euismod gravida.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-orange-500/20 rounded-[2rem] -z-10 rotate-3" />
            <div className="absolute -inset-4 border border-emerald-500/20 rounded-[2rem] -z-10 -rotate-3" />

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                alt="Innovation at Rivinity"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-4">
              <Shapes className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              The <span className="gradient-text">Rivinity Ideals</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-[0.2em] text-sm font-bold">
              Guiding principles for the next billion users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[3rem] hover:border-orange-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors" />
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center mb-8 border border-orange-200 dark:border-orange-900 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Behind Our Product */}
      <section className="py-32 px-4 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-display">
                The <span className="text-primary">Team</span> Behind Our
                Product
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                At Rivinity, our Bharat-driven team is dedicated to building
                sovereign AI that respects our heritage while leading global
                innovation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "XYZ",
                role: "Software Engineer",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
              },
              {
                name: "ABC",
                role: "Product Designer",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
              {
                name: "DEF",
                role: "AI Research",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              },
              {
                name: "GHI",
                role: "Marketing Lead",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800 p-3">
                  <div className="absolute inset-x-3 inset-y-3 rounded-2xl overflow-hidden">
                    <img
                      src={`${member.img}?auto=format&fit=crop&q=80&w=600`}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <p className="font-bold text-lg">{member.name}</p>
                    <p className="text-sm text-white/70">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight">
                Meet The Visionary <br />
                <span className="gradient-text italic pr-2">Founders</span>
              </h2>
              <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs font-bold">
                The dynamic team driving innovation for Bharat
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "ABC",
                role: "Founder Rivinity",
                img: "/assets/founder_aryan.png",
              },
              {
                name: "XYZ",
                role: "Co-Founder Rivinity",
                img: "/assets/founder_kiara.png",
              },
            ].map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="space-y-8 text-center flex flex-col items-center">
                  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 border border-white/5">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-tight">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs">
                      {founder.role}
                    </p>
                    <div className="h-0.5 w-12 bg-primary mx-auto rounded-full mt-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-32 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Milestones</h2>
        </div>
        <div className="space-y-12">
          {milestones.map((ms, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-primary/20 pl-8 relative"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="text-4xl font-bold text-primary/40 font-mono tracking-tighter w-24">
                {ms.year}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{ms.title}</h4>
                <p className="text-muted-foreground text-lg">
                  {ms.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
