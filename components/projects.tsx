import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Personal Finance Dashboard Analysis | Power BI Project",
        image: "/assets/project1.jpeg",
        link: "/finance",
    },
    {
        id: 2,
        title: "Global Tech Skills Demand Analytics Dashboard | 2024–2025",
        image: "/assets/project2.jpeg",
        link: "/tech-skills",
    },
    {
        id: 3,
        title: "Data Analyst Job Market & Skills Demand Dashboard",
        image: "/assets/project3.jpeg",
        link: "/job-market",
    },
    {
        id: 4,
        title: "Strategic Marketing & Financial Analytics Report: Turning Data Into Business Decisions",
        image: "/assets/project4.jpg",
        link: "/Marketing_Financial_Analysis_Report_Final.docx",
    },
];

export default function Projects() {
    return (
        <section className="mt-12 border-t border-zinc-800 pt-8">
            <h1 className="mb-6 font-mono text-white">Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        href={project.link}
                        key={project.id}
                        className="flex flex-col overflow-hidden rounded-xl bg-zinc-800"
                    >
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                                width={400}
                                height={200}
                            />
                        )}
                        <div className="flex flex-1 flex-col justify-between p-4">
                            <h2 className="font-sans text-base font-semibold text-zinc-100">
                                {project.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
