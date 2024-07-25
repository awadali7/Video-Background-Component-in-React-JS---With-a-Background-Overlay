"use client";

import React, { useEffect, useRef } from "react";

interface CircularTextProps {
    text: string;
    radius?: number;
    className?: string;
    duration?: number;
}

const CircularText: React.FC<CircularTextProps> = ({
    text,
    radius = 100,
    className = "",
    duration = 10,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const chars = text.split("");
        container.innerHTML = "";

        chars.forEach((char, i) => {
            const span = document.createElement("span");
            const angle = (i / chars.length) * 360;
            span.innerText = char;
            span.className = "absolute origin-[0_100%]";
            span.style.transform = `rotate(${angle}deg) translateY(-${radius}px)`;
            container.appendChild(span);
        });
    }, [text, radius]);

    return (
        <div
            ref={containerRef}
            className={`w-[${radius * 2}px] h-[${
                radius * 2
            }px] rounded-full relative animate-spin ${className}`}
            style={{ animationDuration: `${duration}s` }}
        />
    );
};

export default CircularText;
