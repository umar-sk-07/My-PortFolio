"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from '@nextui-org/react';


export function CardDemo() {
  const projects = [
    {
      image: "/images/Web.jpeg", // Image path
      title: <span className="text-violet-600">Travel Planner Website Using Web Scraping and Gemini AI Integration</span>,
      description:
        "Web scraping and use Bright Data's scraping browser to scrape live data for our travel planner app built using Next.js 14, Next UI, TailwindCSS, Zustand, Typescript, Redis, BullMQ, Puppeteer, Stripe, Prisma, PostgreSQL. Artificial Intelligence integration using Gemini AI API",
      link: "https://github.com/umar-sk-07/Travel-Planner-Using-Web-Scraping",
    },
    {
      image: "/images/cloud.jpeg", // Image path
      title: <span className="text-violet-600">LapTop Price Prediction Using Machine Learning</span>,
      description:
        "This project aims to predict laptop prices using machine learning techniques, addressing a significant challenge in the consumer electronics market.",
      link: "https://github.com/umar-sk-07/LapTop-Price_Prediction-ML",
    },
    {
      image: "/images/software.jpeg", // Image path
      title: <span className="text-violet-600">Orphanage Management System Using PHP</span>,
      description:
        "Provides information and management solution in an Orphanage. Fully Dynamic Website with User and Admin Panel. Schedule an Appointment in related to Adoption. Fund Raiser, Donations, Payments ",
      link: "https://github.com/umar-sk-07/Orphanage-Management-System",
    },
  ];

  return (
    <div id="projects">
      <div className="flex justify-center">
        <h2 className="text-lg md:text-4xl mb-4 pb-3 pl-3 text-white dark:text-white max-w-4xl rounded-lg border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          PROJECTS
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <HoverEffect
          items={projects}
          className="grid grid-cols-1 md:grid-cols-3 gap-24"
        />
      </div>
      <div className="d-grid gap-2 d-md-flex flex justify-center text-white dark:text-white">
        <Button
          as="a"
          href="https://github.com/umar-sk-07?tab=repositories"
          color="secondary"
          variant="shadow"
          className="bg-indigo-500 p-4 rounded-lg font-bold pb-10"
        >
          View All Projects
        </Button>
      </div>

    </div>
  );
}
