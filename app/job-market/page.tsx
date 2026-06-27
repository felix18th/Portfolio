import Image from "next/image";

export default function Page() {
    return (
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-10 px-4 py-10 font-sans">
            <Image
                src="/assets/project3.jpeg"
                alt="Data Analyst Job Market & Skills Demand Dashboard"
                className="h-auto w-full rounded-xl"
                width={960}
                height={540}
            />

            <div className="space-y-8 leading-7 text-zinc-300">
                <h1 className="text-2xl font-bold text-white">
                    📊 Data Analyst Job Market & Skills Demand Dashboard
                </h1>

                <p>
                    The data analytics industry is evolving rapidly, but one question remains important:
                </p>

                <p className="italic text-zinc-400">
                    Which analytics skills, roles, and markets are creating the biggest opportunities?
                </p>

                <p>
                    I analyzed the global data analyst job market to understand hiring trends, in-demand roles, key technical skills, and where opportunities are concentrated.
                </p>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        🔎 Here is what the data reveals:
                    </h2>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>Data analytics demand continues to grow, with thousands of opportunities across multiple industries.</li>
                        <li>Business Intelligence, Data Analytics, Marketing Analytics, Financial Analytics, and Product Analytics are among the most valuable career paths.</li>
                        <li>
                            Companies are increasingly looking for professionals skilled in:
                            <ul className="mt-1 list-disc space-y-1 pl-6">
                                <li>SQL</li>
                                <li>Python</li>
                                <li>Excel</li>
                                <li>Power BI</li>
                                <li>Tableau</li>
                                <li>Data Visualization</li>
                            </ul>
                        </li>
                        <li>Technology, Finance, Healthcare, Retail, and Consulting remain some of the strongest industries hiring analytics talent.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        🌍 Why does this matter?
                    </h2>
                    <p>
                        Organizations are becoming more data-driven. Companies are no longer just collecting data — they need professionals who can transform data into insights that improve revenue, customer experience, operations, and decision-making.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        💡 What can be done?
                    </h2>
                    <p>
                        Companies should continue investing in analytics talent to improve decision making, while analysts should focus on building practical skills aligned with real business needs.
                    </p>
                </section>
            </div>
        </section>
    );
}
