import { motion } from "framer-motion";
import abstractShape1 from "@/assets/abstract-shape-1.png";
import abstractShape2 from "@/assets/abstract-shape-2.png";
import { ArrowRight } from "lucide-react";

const products = [
  {
    image: abstractShape1,
    label: "Core Intelligence",
    title: "RS-1 Language Model",
    description:
      "Proprietary 12B parameter LLM with Extreme Mode for multi-step reasoning. Text-to-text reasoning designed for enterprise and institutional deployment.",
    features: ["Extreme Mode", "12B Parameters", "Enterprise Ready"],
  },
  {
    image: abstractShape2,
    label: "Privacy Architecture",
    title: "CLOS-AI: Closed Intelligence",
    description:
      "Incognito-style AI environment where interactions are never used for public model training. Built for privacy-sensitive institutional environments.",
    features: ["Zero Data Leakage", "Governance-Aware", "Audit Trail"],
  },
];

const ProductShowcase = () => {
  return (
    <section id="platform" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Platform</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Powering India's AI infrastructure
          </h2>
        </motion.div>

        <div className="space-y-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`clean-card overflow-hidden grid md:grid-cols-2 gap-0 ${i % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
            >
              {/* Image */}
              <div className="bg-secondary/50 flex items-center justify-center p-8 sm:p-10 md:p-16 md:[direction:ltr]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-[320px] h-auto animate-float"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center md:[direction:ltr]">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  {product.label}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
