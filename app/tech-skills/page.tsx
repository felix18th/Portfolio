import Image from "next/image";

export default function Page() {
    return (
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-10 px-4 py-10 font-sans">
            <Image
                src="/assets/project2.jpeg"
                alt="Global Tech Skills Demand Analytics Dashboard"
                className="h-auto w-full rounded-xl"
                width={960}
                height={540}
            />

            <div className="space-y-8 leading-7 text-zinc-300">
                <h1 className="text-2xl font-bold text-white">
                    🚀 Global Tech Skills Demand Analytics Dashboard | 2024–2025
                </h1>

                <p>
                    The technology industry is changing faster than ever.
                </p>

                <p>
                    With the rapid growth of Artificial Intelligence, cloud computing, automation, and digital transformation, one major question stands out:
                </p>

                <p className="italic text-zinc-400">
                    &ldquo;Which skills are shaping the future of the global tech workforce?&rdquo;
                </p>

                <p>
                    To explore this, I built a Global Tech Skills Demand Analytics Dashboard to analyze hiring trends, in-demand skills, salary patterns, and workforce opportunities across the technology industry.
                </p>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        📌 The Business Problem
                    </h2>
                    <p>
                        Companies are facing a challenge: How do they identify the right talent, understand changing skill requirements, and make smarter hiring decisions in a fast-moving technology landscape?
                    </p>
                    <p className="mt-2">
                        At the same time, professionals and aspiring tech talents need to understand which skills are most valuable to remain competitive.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        📊 Key Insights from the Analysis
                    </h2>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>Technology job opportunities continue to show strong growth between 2024 and 2025, highlighting increasing demand for digital skills.</li>
                        <li>Technical skills such as Python, SQL, JavaScript, AWS, React, and Power BI remain among the most requested skills by employers.</li>
                        <li>Data-related roles continue to gain attention as organizations rely more on analytics and data-driven decision-making.</li>
                        <li>Remote work opportunities continue to expand, showing a shift in how companies approach modern hiring.</li>
                        <li>Salary trends reveal that specialized technical skills and advanced roles often create stronger earning opportunities.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        💡 Why This Matters
                    </h2>
                    <p className="mb-2 font-medium text-zinc-200">For businesses:</p>
                    <p>Understanding talent trends helps companies improve recruitment strategies, identify skill gaps, and build teams prepared for the future.</p>
                    <p className="mb-2 mt-3 font-medium text-zinc-200">For professionals:</p>
                    <p>The data highlights the importance of continuously learning and aligning skills with real market demand.</p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        🎯 What Can We Do About It?
                    </h2>
                    <p>
                        Organizations should use data to guide workforce planning instead of relying only on assumptions.
                    </p>
                </section>
            </div>
        </section>
    );
}
