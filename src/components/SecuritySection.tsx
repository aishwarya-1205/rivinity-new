import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Governance-First",
    description: "Accountability embedded at the system level",
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Your data never leaves your control",
  },
  {
    icon: Eye,
    title: "Full Traceability",
    description: "Complete audit trail for every interaction",
  },
  {
    icon: Server,
    title: "Institutional Grade",
    description: "Built for regulated and government environments",
  },
];

const environments = [
  "Government Departments",
  "Public-Sector Institutions",
  "Enterprise Environments",
  "Regulated Industries",
  "AI-Native Developers",
];

const SecuritySection = () => {
  return (
    <section id="security" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label">Security</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Enterprise-grade security,{" "}
            <span className="gradient-text">built from day one</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Privacy isn't a feature — it's the architecture. Every layer is
            designed for institutional accountability and compliance.
          </p>
        </motion.div>

        {/* Security badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="clean-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <badge.icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1.5">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
            Built for your enterprise's most critical requirements
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {environments.map((env) => (
              <span
                key={env}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground bg-secondary border border-border"
              >
                {env}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
