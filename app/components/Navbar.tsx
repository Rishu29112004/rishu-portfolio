"use client"
import { ArrowDownToLine } from 'lucide-react'

const Navbar = () => {

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  h-16 flex items-center justify-between">
        <p className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 tracking-wide">
          Ree
        </p>

     
        <a 
          href="https://drive.google.com/file/d/17qZ97uYmNowHmLPEPErOplU2Dzg6KPze/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full 
          border border-white/30 text-white font-semibold 
          hover:shadow-lg transition"
        >
          Download CV <ArrowDownToLine size={18} strokeWidth={2.5} />
        </a>

        {/* Mobile Button */}
        <a 
          href="https://drive.google.com/file/d/17qZ97uYmNowHmLPEPErOplU2Dzg6KPze/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden flex items-center gap-1 font-semibold px-3 py-2 rounded-full 
          border border-white/30 text-white
          hover:bg-white hover:text-[#020617] transition"
        >
          CV
          <ArrowDownToLine size={18} strokeWidth={2.5} />
        </a>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse opacity-50"></div>
    </header>
  )
}

export default Navbar