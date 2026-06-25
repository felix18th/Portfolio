"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-8 font-sans">
            <h1 className="text-white">Time</h1>
            <div className="flex items-center gap-4">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={
                            pathname === href
                                ? "text-white"
                                : "text-zinc-500"
                        }
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
