import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Lock, Cpu, BarChart, Check, Zap, Shield, Users, Quote, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const services = [
    {
        icon: <Code className="w-6 h-6 text-primary" />,
        title: "Development",
        description: "We build tailored AI solutions that integrate seamlessly into your existing infrastructure. From custom LLMs to computer vision systems, our development process is agile and security-focused.",
        link: "#"
    },
    {
        icon: <Database className="w-6 h-6 text-primary" />,
        title: "Neural Network Infrastructure",
        description: "Robust and scalable data pipelines ensuring your AI models are fed with high-quality, real-time data. We handle the complexity of big data alignment and processing.",
        link: "#"
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-primary" />,
        title: "AI Strategy & Consulting",
        description: "Navigating the AI landscape can be complex. We provide strategic roadmaps, feasibility studies, and use-case identification to ensure your AI investment delivers real ROI.",
        link: "#"
    },
    {
        icon: <Cpu className="w-6 h-6 text-primary" />,
        title: "Custom AI Model Development",
        description: "Beyond off-the-shelf models, we train and fine-tune architectures specifically for your domain data, ensuring higher accuracy and relevance for your business needs.",
        link: "#"
    },
    {
        icon: <Globe className="w-6 h-6 text-primary" />,
        title: "Sovereign Cloud Solutions",
        description: "Secure, compliant, and localized cloud infrastructure designed for sensitive data. Keep your data within borders without sacrificing performance or scalability.",
        link: "#"
    },
    {
        icon: <BarChart className="w-6 h-6 text-primary" />,
        title: "Predictive Analytics",
        description: "Transform raw data into future insights. Our predictive models help you anticipate market trends, customer behavior, and operational risks before they happen.",
        link: "#"
    },
];

const features = [
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Increased Efficiency",
        description: "Automate complex workflows and reduce operational costs with intelligent agents."
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Scalable Solutions",
        description: "Architecture that grows with your business, from pilot to enterprise-scale."
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Data-Driven Decisions",
        description: "Turn intuition into evidence-based strategy with deep learning analytics."
    },
    {
        icon: <Lock className="w-5 h-5" />,
        title: "Secure Processing",
        description: "Enterprise-grade security protocols ensuring your proprietary data remains safe."
    }
];

const testimonials = [
    {
        quote: "Partnering with Rivinity has completely transformed our data infrastructure. Their Sovereign Cloud solution gave us the security we needed with the speed we dreamed of.",
        author: "Priya Menon",
        role: "CTO, FinTech India",
        rating: 5
    },
    {
        quote: "The custom LLM they developed for our customer support reduced response times by 60%. The team's expertise in Indic languages is unmatched in the industry.",
        author: "Rahul Verma",
        role: "Director of Operations, EdTech Solutions",
        rating: 5
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            <Navbar />

            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full -z-10 opacity-50" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                            Empowering Business Transformation With <span className="text-foreground font-semibold">Neural Network Solutions</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-1 px-4 relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col gap-4 ${index % 2 !== 0 ? "md:translate-y-12" : ""}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-card border border-white/10 flex items-center justify-center shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <a href={service.link} className="text-primary font-medium text-sm flex items-center hover:underline mt-2">
                                View Detail <ArrowRight className="ml-1 w-3 h-3" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Rivinity Section */}
            <section className="py-32 px-4 relative z-10 mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Why Choose <span className="text-foreground">Rivinity</span></h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Pioneering the future of AI with solutions that are secure, scalable, and tailored to your unique challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Left Column Features */}
                        <div className="space-y-8 lg:text-right">
                            {features.slice(0, 2).map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-card/50 transition-colors"
                                >
                                    <div className="lg:ml-auto w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 lg:mb-0 lg:float-right lg:ml-4">
                                        {feature.icon}
                                    </div>
                                    <div className="clear-both">
                                        <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Central Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full flex items-center justify-center my-8 lg:my-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-30" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-black/40">
                                <img
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                                    alt="AI Future"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                    <p className="text-sm font-mono text-primary/80">RIVINITY INTELLIGENCE</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column Features */}
                        <div className="space-y-8">
                            {features.slice(2, 4).map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-card/50 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Big Headline Separator */}
            <section className="py-20 px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-light text-muted-foreground/30 uppercase tracking-widest">
                    Redefining Tomorrow
                </h2>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-4 relative z-10 bg-white/5 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">Hear What Our Clients Say</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-card/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative"
                            >
                                <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <div key={starIndex} className="w-4 h-4 bg-orange-500 rounded-sm" />
                                    ))}
                                </div>
                                <p className="text-lg leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold text-foreground">{t.author}</div>
                                    <div className="text-sm text-muted-foreground">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default Services;
