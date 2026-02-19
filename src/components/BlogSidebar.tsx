import React from "react";
import { Search, ChevronRight, Tag, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the sidebar
const categories = [
    { name: "AI Strategy", count: 12 },
    { name: "Machine Learning", count: 8 },
    { name: "Infrastructure", count: 5 },
    { name: "Security", count: 4 },
    { name: "DevOps", count: 3 },
    { name: "Trends", count: 6 },
];

const recentPosts = [
    {
        id: 1,
        title: "The Future of Sovereign AI in India",
        date: "Feb 18, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Optimizing LLMs for Indic Languages",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Edge Computing: AI Beyond the Cloud",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    },
];

const tags = [
    "AI", "India", "LLM", "Cloud", "Future", "Data", "Security", "Tech", "Innovation", "Sovereignty"
];

const BlogSidebar = () => {
    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-background/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to="#"
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 group transition-colors border border-transparent hover:border-primary/10"
                        >
                            <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                                {category.name}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs bg-white/5 px-2 py-1 rounded-full text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                    {category.count}
                                </span>
                                <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                <div className="space-y-4">
                    {recentPosts.map((post) => (
                        <Link key={post.id} to="#" className="flex gap-4 group">
                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                                    <Calendar size={10} /> {post.date}
                                </span>
                                <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags Widget */}
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Link
                            key={index}
                            to="#"
                            className="bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-primary transition-all"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter/Ad Space */}
            <div className="relative overflow-hidden rounded-2xl p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 opacity-90 z-0" />
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" alt="bg" className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-overlay opacity-50" />

                <div className="relative z-10">
                    <h3 className="text-white font-bold text-xl mb-2">Join the Revolution</h3>
                    <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for exclusive AI insights.</p>
                    <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm hover:bg-white/90 transition-colors">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
