"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiFigma,
  SiVercel
} from "react-icons/si";

// ✅ Skills Data
const skillsData = [
  { name: "HTML", description: "Markup Language", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
  { name: "CSS", description: "Styling Language", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
  { name: "JavaScript", description: "Programming Language", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
  { name: "ReactJS", description: "UI Library", icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
  { name: "Git", description: "Version Control", icon: <SiGit className="w-8 h-8 text-red-500" /> },
  { name: "TypeScript", description: "Typed JavaScript", icon: <SiTypescript className="w-8 h-8 text-blue-400" /> },
  { name: "Tailwind CSS", description: "CSS Framework", icon: <SiTailwindcss className="w-8 h-8 text-teal-400" /> },
  { name: "MongoDB", description: "NoSQL Database", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
  { name: "Next.js", description: "JavaScript Framework", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
  { name: "Figma", description: "Design Tool", icon: <SiFigma className="w-8 h-8 text-pink-500" /> },
  {
    name: "Vercel",
    description: "Deployment Platform",
    icon: <SiVercel className="w-8 h-8 text-white" />,
  },
  {
    name: "AWS",
    description: "Cloud Platform",
    icon: (
      <Image
        src={assets.aws}
        alt="AWS Logo"
        width={32}
        height={32}
      />
    ),
  },
];

type skillcard = {
  icon: React.ReactNode,
  name: String,
  description: String
}
// ✅ SkillCard Component
const SkillCard = ({ icon, name, description }: skillcard) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-start gap-2 p-4 bg-gray-900 border border-gray-700 rounded-xl shadow-md transition-all duration-300"
  >
    <div>{icon}</div>
    <h3 className="text-white font-semibold">{name}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

// ✅ Introduction Component
const Introduction = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-12">

        {/* Left Column: About Me */}
        <div className="w-full md:w-[38%] flex flex-col items-center md:items-start gap-6">
          <h1 className="font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            About Me
          </h1>

          {/* Image with halo */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-40 h-56 md:w-48 md:h-60 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>

            <div className="relative w-32 h-44 md:w-40 md:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
              <Image
                src={assets.pic}
                alt="Profile Picture"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* About Text */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose max-w-md mt-4 text-center md:text-left">
            I’m a passionate Frontend Developer focused on building clean, responsive, and user-friendly web interfaces.
            I enjoy turning ideas into real-world products using modern frontend technologies and continuously improving my skills.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
            My Skills & Tech
          </h2>
          <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skillsData.map((skill, idx) => (
              <SkillCard key={idx} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
