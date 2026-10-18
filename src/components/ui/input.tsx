"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400",
        "focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900",
        "focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Select.displayName = "Select";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400",
        "focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Input, Select, Textarea };
