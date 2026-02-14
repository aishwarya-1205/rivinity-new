import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 320 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-10 w-auto", className)}
            style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#FB7185" />
                </linearGradient>
            </defs>

            {/* Hand-tuned 'liquid' R Mark */}
            <g transform="translate(10, 10) scale(0.65)">
                <path
                    d="M45 10V110"
                    stroke="url(#logo-gradient)"
                    strokeWidth="18"
                    strokeLinecap="round"
                />
                <path
                    d="M45 10H80C105 10 120 25 120 45C120 65 105 80 80 80H65L110 125"
                    stroke="url(#logo-gradient)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>

            {/* 'ivinity' Text Label */}
            <text
                x="100"
                y="68"
                fill="currentColor"
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "52px",
                    fontWeight: "700",
                    letterSpacing: "-0.02em"
                }}
            >
                ivinity
            </text>
        </svg>
    );
};

export default Logo;
