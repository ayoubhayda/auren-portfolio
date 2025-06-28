// Home page
import SectionSeparator from "@/components/general/SectionSeparator";
import ServicesBar from "@/components/general/ServicesBar";
import ContactMe from "@/components/sections/ContactMe";
import Hero from "@/components/sections/Hero";
import MyWork from "@/components/sections/MyWork";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import React from "react";

function page() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>

      {/* Services bar */}
      <section id="services-bar" className="scroll-mt-20">
        <ServicesBar />
      </section>

      {/* My Work Section */}
      <section id="mywork" className="scroll-mt-20">
        <MyWork />
      </section>

      <SectionSeparator />

      {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      <SectionSeparator />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <SectionSeparator />

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      <SectionSeparator />

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactMe />
      </section>
    </main>
  );
}

export default page;