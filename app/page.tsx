import { Navbar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Studies } from "@/components/Studies";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getFeaturedProjects } from "@/db/queries";

export default async function Home() {
  const featured = await getFeaturedProjects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects projects={featured} />
        <Studies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
