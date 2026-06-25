const toolCategories = [
    {
        category: "Databases",
        items: ["PostgreSQL", "Microsoft SQL Server (MSSQL)"],
    },
    {
        category: "Spreadsheet & Data Analysis",
        items: ["Microsoft Excel", "Google Sheets"],
    },
    {
        category: "Business Intelligence",
        items: ["Microsoft Power BI"],
    },
    {
        category: "Statistical Analysis",
        items: ["IBM SPSS", "GraphPad Prism"],
    },
    {
        category: "Presentation & Design",
        items: ["Microsoft PowerPoint", "Canva", "Google Slides"],
    },
];

export default function Tools() {
    return (
        <section className="mt-12 border-t border-zinc-800 pt-8">
            <h1 className="mb-6 font-mono text-white">Tools</h1>
            <div className="space-y-4">
                {toolCategories.map((group) => (
                    <div key={group.category} className="flex gap-4">
                        <span className="w-64 shrink-0 font-mono text-sm text-zinc-400">
                            {group.category}
                        </span>
                        <span className="font-mono text-sm text-zinc-300">
                            {group.items.join(", ")}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
