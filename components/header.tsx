"use client";

import {
    LinkedinLogoIcon,
    XLogoIcon,
    EnvelopeIcon,
    GithubLogoIcon,
} from "@phosphor-icons/react";

const links = [
    {
        href: "https://www.linkedin.com/in/felix-adedokun-556a652b6",
        label: "LinkedIn",
        Icon: LinkedinLogoIcon,
    },
    {
        href: "https://x.com/FelixAdedo62811",
        label: "X(Twitter)",
        Icon: XLogoIcon,
    },
    {
        href: "mailto:felixadedokun89@gmail.com",
        label: "Email",
        Icon: EnvelopeIcon,
    },
    {
        href: "https://github.com/felix18th",
        label: "GitHub",
        Icon: GithubLogoIcon,
    },
];

export default function Header() {
    return (
        <header className="font-sans">
            <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Felix Adedokun
            </h1>
            <p className="mb-3 text-base text-zinc-400">
                A data analyst focused on uncovering hidden patterns by turning
                raw datasets into clear, actionable, and data-driven business
                solutions
            </p>
            <div className="flex flex-wrap gap-3">
                {links.map(({ href, label, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 font-mono text-sm text-zinc-300 transition-colors hover:bg-zinc-700"
                    >
                        <Icon size={18} />
                        {label}
                    </a>
                ))}
            </div>
        </header>
    );
}
