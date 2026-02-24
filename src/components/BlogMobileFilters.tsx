import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
    { name: "All", count: 0 },
    { name: "AI Strategy", count: 12 },
    { name: "Machine Learning", count: 8 },
    { name: "Infrastructure", count: 5 },
    { name: "Security", count: 4 },
    { name: "DevOps", count: 3 },
    { name: "Trends", count: 6 },
];

const tags = [
    "AI", "India", "LLM", "Cloud", "Future", "Data", "Security", "Tech", "Innovation", "Sovereignty"
];

const BlogMobileFilters = () => {
    return (
        <div className="space-y-4 mb-8 lg:hidden">

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/5 rounded-lg border border-white/5">
                    <SlidersHorizontal className="w-3 h-3 text-muted-foreground" />
                </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${index === 0
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                            : "bg-card/30 border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30"
                            }`}
                    >
                        {category.name}
                        {category.count > 0 && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${index === 0 ? "bg-white/20 text-white" : "bg-white/5 text-muted-foreground"
                                }`}>
                                {category.count}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/20 transition-colors cursor-pointer"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BlogMobileFilters;
