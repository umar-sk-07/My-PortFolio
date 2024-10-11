"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconCode, IconFolder, IconSchool } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "About Me",
      link: "#about",
      onClick: () => scrollToSection("about-section"),
      icon: <IconUser  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Skills",
      link: "#skills",
      onClick: () => scrollToSection("skills-section"),
      icon: <IconCode  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Projects",
      link: "#projects",
      onClick: () => scrollToSection("projects-section"),
      icon: <IconFolder  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Certificates",
      link: "#certificates",
      onClick: () => scrollToSection("projects-section"),
      icon: <IconFolder  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Education",
      link: "#education",
      onClick: () => scrollToSection("education-section"),
      icon: <IconSchool  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact Me",
      link: "#contact",
      onClick: () => scrollToSection("contact-section"),
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div>
    </div>
  );
};
