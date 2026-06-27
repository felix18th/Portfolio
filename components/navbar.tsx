"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateTime() {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Africa/Lagos",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            setTime(`${formatter.format(now)} WAT`);
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-8 font-mono">
            <h1 className="text-xs text-zinc-500">{time}</h1>
            <div className="flex items-center gap-4">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={
                            pathname === href ? "text-white" : "text-zinc-500"
                        }
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
