import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "cursor-pointer bg-white px-4 py-2 text-[#241F1F] transition-all duration-150 ease-in-out",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
