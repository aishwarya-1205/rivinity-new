import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Sovereign AI in India",
        excerpt: "Exploring how India is building its own AI infrastructure to ensure data sovereignty and technological independence.",
        date: "Feb 18, 2026",
        author: "Aditya Sharma",
        category: "AI Strategy",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Optimizing LLMs for Indic Languages",
        excerpt: "Technical deep dive into the challenges and solutions for training Large Language Models on diverse Indian languages.",
        date: "Feb 15, 2026",
        author: "Priya Patel",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Edge Computing: AI Beyond the Cloud",
        excerpt: "Why the future of AI lies at the edge, and how to deploy efficient models on resource-constrained devices.",
        date: "Feb 10, 2026",
        author: "Vikram Singh",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Data Security in the Age of Generative AI",
        excerpt: "Best practices for protecting sensitive enterprise data while leveraging the power of generative AI models.",
        date: "Feb 05, 2026",
        author: "Neha Gupta",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        title: "Scaling AI Infrastructure",
        excerpt: "How to build resilient and scalable infrastructure to support growing AI workloads.",
        date: "Jan 28, 2026",
        author: "Rohan Das",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        title: "The Rise of Agentic AI",
        excerpt: "Understanding the shift from passive AI tools to autonomous agents that can execute complex tasks.",
        date: "Jan 15, 2026",
        author: "Ananya Roy",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    },
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-4 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10" />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                >
                    Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]">Updates</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                    Latest news, technical deep dives, and industry trends from the Rivinity team.
                </motion.p>
            </section>

            {/* Main Content Area */}
            <section className="px-4 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar - Left Side */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="sticky top-24"
                        >
                            <BlogSidebar />
                        </motion.div>
                    </div>

                    {/* Blog Posts Grid - Right Side */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex flex-col h-full bg-card/30 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    {/* Image */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col p-6">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-white/5">
                                            <Link to="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                                                Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
