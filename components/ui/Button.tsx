import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'massive';
    children: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-black pop-border uppercase tracking-widest focus:outline-none transition-all Group pop-shadow active:translate-y-2 active:translate-x-2 active:shadow-none";

    const variants = {
        primary: "bg-primary text-background hover-invert",
        secondary: "bg-secondary text-background hover:bg-warning hover:text-foreground",
        accent: "bg-accent text-background hover:-rotate-2 hover:bg-warning hover:text-foreground hover:pop-shadow-deep",
        outline: "bg-background text-foreground hover:bg-warning",
    };

    const sizes = {
        sm: "px-6 py-3 text-sm",
        md: "px-10 py-5 text-lg",
        lg: "px-16 py-8 text-2xl",
        massive: "px-24 py-12 text-5xl",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <span className="animate-wiggle inline-block">{children}</span>
        </button>
    );
}
