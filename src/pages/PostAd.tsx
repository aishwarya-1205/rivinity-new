import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Sparkles,
  Target,
  BarChart3,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PostAd = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    industry: "",
    objective: "Awareness",
    budget: "5000",
    audience: "India",
    description: "",
  });

  const objectives = ["Awareness", "Leads", "Sales", "Install"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none select-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <main className="container-custom pt-40 lg:pt-48 pb-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 tracking-tight"
            >
              Launch Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]">
                Campaign
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Reach millions through our AI-powered advertising network.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-8">
                {/* Section: Basics */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles size={18} />
                    <h3 className="font-bold uppercase tracking-widest text-xs">
                      Campaign Basics
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase ml-1">
                        Campaign Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Summer Launch 2026"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.campaignName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            campaignName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase ml-1">
                        Industry
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Technology"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Objective */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Target size={18} />
                    <h3 className="font-bold uppercase tracking-widest text-xs">
                      Campaign Objective
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {objectives.map((obj) => (
                      <button
                        key={obj}
                        onClick={() =>
                          setFormData({ ...formData, objective: obj })
                        }
                        className={`px-4 py-3 rounded-2xl border text-xs font-bold transition-all ${
                          formData.objective === obj
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                            : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        {obj}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section: Budget & Reach */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <BarChart3 size={18} />
                    <h3 className="font-bold uppercase tracking-widest text-xs">
                      Budget & Reach
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center mb-1 px-1">
                        <label className="text-xs font-bold text-muted-foreground uppercase">
                          Monthly Budget
                        </label>
                        <span className="text-sm font-bold text-primary">
                          ₹{formData.budget}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        className="w-full accent-primary bg-white/10 h-1.5 rounded-full cursor-pointer transition-all"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground/60 px-1 pt-1">
                        <span>₹1,000</span>
                        <span>₹1,00,000+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full bg-foreground text-background font-bold py-4 rounded-3xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  Initialize Campaign
                  <Send size={18} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>

            {/* Summary / Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl sticky top-32">
                <h3 className="text-lg font-bold mb-6">Estimated Impact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                        Estimated Reach
                      </p>
                      <p className="text-xl font-bold">
                        {(parseInt(formData.budget) / 10).toLocaleString()}+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Monthly impressions
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-xs font-medium text-primary mb-2 italic">
                      Pro Tip:
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Adding descriptive campaign details can increase
                      conversion rates by up to 24% using our neural targeting
                      algorithm.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      System Status: Optimal
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground/40 leading-relaxed italic">
                    Your campaign data will be processed by Rivinity Governance
                    AI before deployment to ensure 100% brand safety.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostAd;
