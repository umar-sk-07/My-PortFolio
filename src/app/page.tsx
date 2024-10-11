import { TimelineDemo } from "./components/timeline";
import { BackgroundBeamsWithCollisionDemo } from "./components/background-beams";
import { FloatingNavDemo } from "./components/navbar";
import { IconCloudDemo } from "./components/iconcloud";
import { Proggress } from "./components/progress";
import Hero from "./components/hero";
import { CardDemo } from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { FocusCardsDemo } from "./components/focus-cards";

export default function Home() {
  return (
    <div className="text-black dark:bg-black">
      {/* Floating Navbar */}
      <div>
        <FloatingNavDemo />
      </div>

      {/* Background Effects */}
      <BackgroundBeamsWithCollisionDemo />

      {/* Hero Section */}
      <section id="about-section" className="min-h-screen">
        <Hero />
      </section>

      {/* Centered SKILLS heading */}
      <div id="skills" className="flex justify-center mt-10">
        <h2 className="text-lg md:text-4xl mb-4 pb-3 pl-3 text-white dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          SKILLS
        </h2>
      </div>

      {/* Skills Section */}
      <section
        id="skills-section"
        className="dark:bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 py-8"
      >
        <IconCloudDemo />
        <div className="flex items-center justify-center rounded-lg p-6 md:p-10">
          <Proggress />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="min-h-screen">
        <CardDemo />
      </section>

      {/* Certificates Section */}
      <section id="certificates-section" className="min-h-screen">
        <FocusCardsDemo />
      </section>

      {/* Education Section */}
      <section id="education-section" className="min-h-screen">
        <TimelineDemo />
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="min-h-screen">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
