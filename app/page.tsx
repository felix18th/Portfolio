import Header from "@/components/header";
import Projects from "@/components/projects";
import Expertise from "@/components/expertise";
import Tools from "@/components/tools";

export default function Home() {
    return (
        <section className="mx-auto max-w-3xl p-4 py-12">
            <Header />
            <Projects />
            <Tools />
            <Expertise />
        </section>
    );
}
