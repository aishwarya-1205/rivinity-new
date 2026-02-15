import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Search,
  Code2,
  BarChart3,
  Mic,
  Globe,
  FileText,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { GradientText } from "./ui/GradientText";

const tabs = [
  { id: "intelligence", label: "Intelligence" },
  { id: "development", label: "Development" },
  { id: "analytics", label: "Analytics" },
  { id: "voice", label: "Voice & Media" },
  { id: "automation", label: "Automation" },
];

const tabContent: Record<
  string,
  { icon: any; title: string; description: string }[]
> = {
  intelligence: [
    {
      icon: Brain,
      title: "RS-1 LLM",
      description:
        "12B parameter proprietary language model with Extreme Mode reasoning",
    },
    {
      icon: Search,
      title: "Augmented Search",
      description:
        "Web-integrated reasoning with source-backed outputs and citations",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description:
        "Cross-document reasoning, PDF analysis, and compliance workflows",
    },
  ],
  development: [
    {
      icon: Code2,
      title: "AI Coder",
      description:
        "Web application generation, code assistance, and website scaffolding",
    },
    {
      icon: Sparkles,
      title: "Code Debugger",
      description: "Error detection, correction, and optimization suggestions",
    },
    {
      icon: Globe,
      title: "Workflow Creator",
      description:
        "Multi-step automation logic and prompt-to-execution pipelines",
    },
  ],
  analytics: [
    {
      icon: BarChart3,
      title: "Big Data Analysis",
      description:
        "Structured and unstructured data interpretation with pattern analysis",
    },
    {
      icon: Brain,
      title: "Trend Detection",
      description: "Decision-support output with contextual continuity",
    },
    {
      icon: ShieldCheck,
      title: "Contextual Memory",
      description:
        "Ongoing analytical sessions with institutional memory retention",
    },
  ],
  voice: [
    {
      icon: Mic,
      title: "Text-to-Speech",
      description:
        "Studio-grade voice synthesis with modulation and customization",
    },
    {
      icon: Mic,
      title: "Speech-to-Text",
      description:
        "Accurate multi-language transcription and voice recognition",
    },
    {
      icon: Sparkles,
      title: "Image Enhancement",
      description: "Visual quality improvement and clarity optimization",
    },
  ],
  automation: [
    {
      icon: Globe,
      title: "AI Browser",
      description:
        "AI-native browser with multi-step task execution across websites",
    },
    {
      icon: Sparkles,
      title: "Reiti Content Suite",
      description:
        "Blogs, emails, SEO content, translation, and course generation",
    },
    {
      icon: ShieldCheck,
      title: "Deepfake Detection",
      description:
        "Media authenticity analysis and misinformation risk mitigation",
    },
  ],
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("intelligence");

  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden bg-[#fafafa]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="flex justify-center mb-6">
            <span className="px-5 py-2 rounded-full bg-primary/10 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase border border-primary/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <span className="opacity-40 mr-1">「</span> How it works{" "}
              <span className="opacity-40 ml-1">」</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-[1.2] lg:leading-[1.1] tracking-tight">
            How Our AI Brings{" "}
            <GradientText
              colors={["#f97316", "#fb923c", "#f97316"]}
              className="italic font-light pr-4"
            >
              Your
            </GradientText>{" "}
            <br className="hidden sm:block" /> Vision To Life
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-20"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-white text-foreground border-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] scale-105 z-20"
                  : "bg-white/20 backdrop-blur-xl text-foreground/60 border-white/20 hover:bg-white/40 z-10"
              }`}
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] shrink-0 ${
                    activeTab === tab.id ? "bg-black/5" : "bg-black/5"
                  }`}
                >
                  {i + 1}.
                </span>
                <span className="whitespace-nowrap">
                  {tab.label.toUpperCase()}
                </span>
              </span>
            </button>
          ))}
        </motion.div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {tabContent[activeTab]?.map((item, idx) => (
            <div
              key={item.title}
              className="clean-card p-8 group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-primary/5 bg-white/40 backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles size={16} className="text-primary/40" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
