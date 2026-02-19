import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data (subset of Blog.tsx)
const blogPosts = [
    {
        id: 1,
        title: "The Future of Sovereign AI in India",
        date: "Feb 18, 2026",
        category: "AI Strategy",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Optimizing LLMs for Indic Languages",
        date: "Feb 15, 2026",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Edge Computing: AI Beyond the Cloud",
        date: "Feb 10, 2026",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    },
];

const BlogPreviewSection = () => {
    return (
        <section className="py-24 px-4 bg-[#fafafa]/50 dark:bg-background/50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#ec4899]">Insights</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground max-w-xl"
                        >
                            Stay updated with our latest research, industry news, and technical breakdowns.
                        </motion.p>
                    </div>

                    <Link to="/blog" className="hidden md:block">
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center text-primary font-semibold hover:underline"
                        >
                            View All Articles <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/blog/${post.id}`} className="block h-full">
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Calendar size={14} /> {post.date}
                                </div>

                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center md:hidden">
                    <Link to="/blog">
                        <button className="px-6 py-3 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors">
                            View All Articles
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreviewSection;
