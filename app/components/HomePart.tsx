import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SparklesCore } from "@/components/ui/sparkles"

export function SparklesPreview() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 h-screen w-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Profile + Glow */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Multi-layer halo */}
        <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 opacity-20 blur-4xl animate-ping"></div>

        {/* Image */}
        <Image
          src={assets.pic}
          alt="Rishu profile picture"
          priority
          className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center text-center gap-4 max-w-xl">
        <p className="font-semibold text-white text-lg md:text-xl animate-fadeIn flex gap-2 items-center">Hi, I’m <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 font-bold text-2xl md:text-4xl ">Kumar Rishu Ritik</span></p>
        <p className="font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fadeIn delay-200">Frontend Web Developer</p>
        <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed animate-fadeIn delay-400">
          I’m a passionate frontend developer focused on building clean, responsive, and user-friendly web interfaces using modern technologies.
        </p>
      </div>

      {/* Social Buttons */}
  <div className="flex gap-4 items-center pt-5">
  <a
    href="https://github.com/Rishu29112004"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
  >
    <Github className="w-6 h-6 text-white hover:text-gray-400" />
  </a>

  <a
    href="https://www.linkedin.com/in/rishu321"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
  >
    <Linkedin className="w-6 h-6 text-white hover:text-blue-400" />
  </a>

  <a
    href="mailto:rishu@example.com"
    className="transition transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
  >
    <Mail className="w-6 h-6 text-white hover:text-red-400" />
  </a>
</div>

    </div>
  )
}
