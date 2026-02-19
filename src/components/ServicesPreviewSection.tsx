import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Custom AI Development",
        description: "Tailored AI solutions designed to meet your specific business needs.",
    },
    {
        icon: <Database className="w-8 h-8 text-primary" />,
        title: "Data Infrastructure",
        description: "Robust and scalable data pipelines ensuring your AI models are fed with high-quality data.",
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Sovereign Cloud",
        description: "Secure, compliant, and localized cloud infrastructure for sensitive data.",
    },
    {
        icon: <Lock className="w-8 h-8 text-primary" />,
        title: "Enterprise Security",
        description: "Military-grade encryption and security protocols to protect your IP.",
    },
];

const ServicesPreviewSection = () => {
    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Empowering your digital transformation with cutting-edge AI and infrastructure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                        >
                            <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 mx-auto hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            View All Services <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreviewSection;
