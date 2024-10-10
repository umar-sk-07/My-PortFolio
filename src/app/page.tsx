import { TimelineDemo } from "./components/timeline";
import { BackgroundBeamsWithCollisionDemo } from "./components/background-beams";
import { FloatingNavDemo } from "./components/navbar";
import { IconCloudDemo } from "./components/iconcloud";
import { Proggress } from "./components/progress";
import Hero from "./components/hero";
import { CardDemo } from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="bg-black sm:bg-black md:bg-black lg:bg-black">
      {/* Floating Navbar */}
      <div>
        <FloatingNavDemo />
      </div>

      {/* Background Effects */}
      <BackgroundBeamsWithCollisionDemo />

      {/* Hero Section */}
      <section id="about-section">
        <Hero />
      </section>

      {/* Centered SKILLS heading */}
      <div id="skills" className="flex justify-center mt-10">
        <h2 className="text-lg md:text-4xl mb-4 pb-3 pl-3 text-black dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          SKILLS
        </h2>
      </div>

      {/* Grid layout for IconCloud and Progress bars */}
      <section id="skills-section" className="dark:bg-black grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 py-8">
        {/* Left side: IconCloud */}
        <IconCloudDemo />

        {/* Right side: Progress Bars */}
        <div className="flex items-center justify-center rounded-lg p-6 md:p-10">
          <Proggress />
        </div>
      </section>

      {/* Projects and Timeline */}
      <section id="projects-section">
        <CardDemo />
      </section>


      <section id="education-section">
        <TimelineDemo />
      </section>

      <section id="contact-section">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}