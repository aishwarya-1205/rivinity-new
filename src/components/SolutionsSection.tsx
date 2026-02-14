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

const tabs = [
  { id: "intelligence", label: "Intelligence" },
  { id: "development", label: "Development" },
  { id: "analytics", label: "Analytics" },
  { id: "voice", label: "Voice & Media" },
  { id: "automation", label: "Automation" },
];

const tabContent: Record<string, { icon: any; title: string; description: string }[]> = {
  intelligence: [
    { icon: Brain, title: "RS-1 LLM", description: "12B parameter proprietary language model with Extreme Mode reasoning" },
    { icon: Search, title: "Augmented Search", description: "Web-integrated reasoning with source-backed outputs and citations" },
    { icon: FileText, title: "Document Intelligence", description: "Cross-document reasoning, PDF analysis, and compliance workflows" },
  ],
  development: [
    { icon: Code2, title: "AI Coder", description: "Web application generation, code assistance, and website scaffolding" },
    { icon: Sparkles, title: "Code Debugger", description: "Error detection, correction, and optimization suggestions" },
    { icon: Globe, title: "Workflow Creator", description: "Multi-step automation logic and prompt-to-execution pipelines" },
  ],
  analytics: [
    { icon: BarChart3, title: "Big Data Analysis", description: "Structured and unstructured data interpretation with pattern analysis" },
    { icon: Brain, title: "Trend Detection", description: "Decision-support output with contextual continuity" },
    { icon: ShieldCheck, title: "Contextual Memory", description: "Ongoing analytical sessions with institutional memory retention" },
  ],
  voice: [
    { icon: Mic, title: "Text-to-Speech", description: "Studio-grade voice synthesis with modulation and customization" },
    { icon: Mic, title: "Speech-to-Text", description: "Accurate multi-language transcription and voice recognition" },
    { icon: Sparkles, title: "Image Enhancement", description: "Visual quality improvement and clarity optimization" },
  ],
  automation: [
    { icon: Globe, title: "AI Browser OS", description: "AI-native browser with multi-step task execution across websites" },
    { icon: Sparkles, title: "Reiti Content Suite", description: "Blogs, emails, SEO content, translation, and course generation" },
    { icon: ShieldCheck, title: "Deepfake Detection", description: "Media authenticity analysis and misinformation risk mitigation" },
  ],
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("intelligence");

  return (
    <section id="solutions" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Solutions</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            See it in action
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {tabContent[activeTab]?.map((item) => (
            <div
              key={item.title}
              className="clean-card p-7 text-center hover:border-primary/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                <item.icon size={26} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
