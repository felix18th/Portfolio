const expertise = [
    "Data Cleaning",
    "Data Analysis",
    "Data Visualization",
    "Research",
    "Dashboarding & Reporting",
    "Automation",
];

export default function Expertise() {
    return (
        <section className="mt-12 border-t border-zinc-800 pt-8">
            <h1 className="mb-6 font-mono text-white">Expertise</h1>
            <ul className="list-disc space-y-4 pl-5">
                {expertise.map((item) => (
                    <li key={item} className="font-mono text-sm text-zinc-300">
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}
