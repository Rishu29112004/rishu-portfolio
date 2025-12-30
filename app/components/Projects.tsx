"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MessageSquare, Users, ShoppingCart } from "lucide-react";
import { assets } from "@/assets/assets";

export const projects = [
  {
    id: 1,
    name: "DevHire",
    description:
      "DevHire is a modern job hiring platform designed to connect developers with recruiters efficiently. Built using HTML, CSS, Tailwind CSS, and React.js with Git for version control. It features job listings, role-based access, and a clean, user-friendly interface that is easy to navigate compared to complex hiring platforms.",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    img: assets.work,
  },
  {
    id: 2,
    name: "Ree Chat",
    description:
      "Ree Chat is a real-time chat application built using HTML, CSS, React.js, and JavaScript. It provides instant messaging with a simple and distraction-free UI, making communication smooth and easier than many heavy chat applications.",
    icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
    img: assets.chat,
  },
  {
    id: 3,
    name: "Engineer Management System",
    description:
      "A web-based management system developed with HTML, CSS, Tailwind CSS, React.js, and Next.js. It helps track engineers, roles, and project assignments through a clean and structured UI, improving efficiency and usability.",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    img: assets.engineer,
  },
  {
    id: 4,
    name: "Quick Kart",
    description:
      "Quick Kart is an e-commerce frontend application built using HTML, CSS, Tailwind CSS, React.js, and Next.js. It focuses on a simple shopping experience with easy navigation, making it more user-friendly than cluttered e-commerce websites.",
    icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
    img: assets.cart,
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Projects
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl">
            A collection of projects where I focused on clean UI, user-friendly design,
            and modern frontend technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-900 border cursor-pointer border-gray-700 rounded-xl overflow-hidden shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
