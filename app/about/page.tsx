import Image from "next/image";

export default function Page() {
    return (
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-10 px-4 py-10 font-sans">
            <Image
                src="/felix.jpeg"
                alt="Felix Adedokun"
                className="h-auto w-full max-w-md rounded-lg"
                width={960}
                height={1280}
            />
            <article className="space-y-6 leading-7 text-zinc-300">
                <p>
                    I am Felix Adedokun, a Data Analytics professional with two
                    years of experience using data to support business
                    decision-making, improve processes, and drive measurable
                    growth. I am passionate about data, analytics, and research,
                    and I focus on developing practical, insight-driven
                    solutions to real-world business problems.
                </p>
                <p>
                    My skill set includes data analysis, data visualization,
                    statistical analysis, and reporting automation. These
                    capabilities allow me to convert complex datasets into
                    clear, actionable insights. I have delivered analytics
                    projects across multiple sectors such as healthcare, sales,
                    e-commerce, e-learning, and marketing, working with teams
                    and clients across different regions.
                </p>
                <p>
                    In addition to project work, I am committed to teaching and
                    capacity development. I have trained and mentored learners
                    in tools like Microsoft Excel, Power BI, SQL, and SPSS,
                    helping them build hands-on analytics skills and advance
                    their careers.
                </p>

                <p>
                    I remain open to networking, collaboration, and partnerships
                    with individuals, organizations, and businesses 'that are
                    interested in using data, analytics, and research to drive
                    innovation and achieve success.
                </p>
            </article>
        </section>
    );
}
