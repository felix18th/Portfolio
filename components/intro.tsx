"use client";

import { motion } from "motion/react";

export default function Intro() {
    const fadeUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div>
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center text-3xl"
            >
                2026 FRONTEND TEMPLATE
            </motion.h1>
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                className="mt-4 text-center text-3xl"
            >
                Let's cook
            </motion.p>
        </div>
    );
}
