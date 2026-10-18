"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost" | "destructive" | "white";
type Size = "default" | "sm" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible-ring";

const variants: Record<Variant, string> = {
  default: "bg-teal-600 text-white shadow-sm hover:bg-teal-700",
  outline:
    "border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  white: "bg-white text-teal-700 shadow-sm hover:bg-teal-50",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-5 py-2",
  sm: "h-9 px-3 text-xs",
  lg: "h-12 px-8 text-base",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button };
