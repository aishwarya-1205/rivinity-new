import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
}

export const GradientText = ({
    children,
    className,
    colors = ["hsl(var(--primary))", "hsl(var(--accent))", "#fb923c", "hsl(var(--primary))"],
    animationSpeed = 4,
}: GradientTextProps) => {
    const gradientString = colors.join(", ");

    return (
        <span
            className={cn(
                "bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer",
                className
            )}
            style={{
                backgroundImage: `linear-gradient(to right, ${gradientString})`,
                animationDuration: `${animationSpeed}s`,
            }}
        >
            {children}
        </span>
    );
};
