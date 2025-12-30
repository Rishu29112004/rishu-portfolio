"use client";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import type { StaticImageData } from "next/image";


export type Experience = {
  role: string;
  company: string;
  date: string;
  location: string;
  image: StaticImageData;
  description: string[];
  techStack: string[];
};

type ExperienceCardProps = {
  exp: Experience;
};
// Experience Data
const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "StamperHR Pvt. Ltd.",
    date: "Jan 2025 - Oct 2025",
    location: "Bengaluru, India",
    image: assets.co,
    description: [
      "Developed landing pages and reusable components with 25% performance improvement",
      "20+ PRs merged on GitHub, ranked 4th top contributor",
      "Worked with modern frontend tools and best practices",
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Git"],
  },
];

// Experience Card (same structure as ProjectCard)
const ExperienceCard = ({ exp }:ExperienceCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 shadow-lg">

      {/* Image Section */}
      <div className="w-full md:w-[300px] h-[280px] md:h-[320px] flex-shrink-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white">
          <Image
            src={exp.image}
            alt={exp.company}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {exp.role}
          </h2>

          <p className="text-gray-300 text-lg mt-1">
            {exp.company}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4 text-gray-400">
            <p className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {exp.date}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {exp.location}
            </p>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-6">
            {exp.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {exp.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-lg border border-gray-600 text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center cursor-pointer gap-14">

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Work Experience
        </h1>

        <div className="w-full flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
