import Image from "next/image";

export default function Page() {
    return (
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-10 px-4 py-10 font-sans">
            <Image
                src="/assets/project1.jpeg"
                alt="Personal Finance Dashboard Analysis"
                className="h-auto w-full rounded-xl"
                width={960}
                height={540}
            />

            <div className="space-y-8 leading-7 text-zinc-300">
                <h1 className="text-2xl font-bold text-white">
                    📊 Personal Finance Dashboard Analysis | Power BI Project
                </h1>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        🎯 Problem Statement
                    </h2>
                    <p className="mb-3">
                        This project was designed to answer key business questions:
                    </p>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>How does income compare to expenses?</li>
                        <li>Which categories contribute most to spending?</li>
                        <li>Are savings targets being achieved?</li>
                        <li>What trends exist across financial activities?</li>
                        <li>How can financial performance be improved?</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        📈 Key Insights
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            ✅ Income consistently exceeded expenses, resulting in positive net savings.
                        </li>
                        <li>
                            ✅ Salary and Investments were the largest contributors to total income, indicating diversified income sources.
                        </li>
                        <li>
                            ✅ Healthcare, Travel, and Dining emerged as major spending categories and represent opportunities for cost optimization.
                        </li>
                        <li>
                            ✅ Financial activity showed monthly fluctuations, highlighting seasonal spending behaviors and varying cash flow patterns.
                        </li>
                        <li>
                            ✅ Savings performance remained healthy, with a positive savings rate and strong potential for long-term wealth accumulation.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        💡 Recommendations
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            🔹 Implement category-based spending limits for discretionary expenses.
                        </li>
                        <li>
                            🔹 Automate monthly savings contributions to improve consistency.
                        </li>
                        <li>
                            🔹 Expand investment allocations to strengthen long-term financial growth.
                        </li>
                        <li>
                            🔹 Develop real-time budget monitoring and alert systems.
                        </li>
                        <li>
                            🔹 Track KPIs such as Savings Rate, Budget Variance, Net Savings, and Expense-to-Income Ratio for continuous financial oversight.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        🛠️ Tools Used:
                    </h2>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>Power BI</li>
                        <li>Excel</li>
                        <li>SQL</li>
                        <li>Data Modeling</li>
                        <li>DAX</li>
                        <li>Data Visualization</li>
                    </ul>
                </section>

                <p className="text-sm text-zinc-500">
                    This project demonstrates how data analytics can transform raw financial data into actionable insights that support smarter decision-making.
                </p>
            </div>
        </section>
    );
}
