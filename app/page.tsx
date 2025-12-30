"use client"
import Connect from "./components/Connect";
import Experience from "./components/Experience";
import { SparklesPreview } from "./components/HomePart";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        {/* <HomePart/> */}
        <SparklesPreview/>
        <Introduction/>
        <Experience/>
        <Projects/>
        <Connect/>
      </div>
    </>
  );
}
