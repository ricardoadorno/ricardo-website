import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

import { useRef, RefObject } from "react";

export default function Home() {
  // Scroll to section
  const HeaderRef: RefObject<HTMLDivElement> = useRef(null);
  const ProjectRef: RefObject<HTMLDivElement> = useRef(null);
  const SkillsRef: RefObject<HTMLDivElement> = useRef(null);
  const AboutMeRef: RefObject<HTMLDivElement> = useRef(null);

  const handleClick = (sectionScroll: string) => {
    switch (sectionScroll) {
      case "Projects":
        ProjectRef.current &&
          ProjectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        SkillsRef.current &&
          SkillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "AboutMe":
        AboutMeRef.current &&
          AboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="bg-gray-800">
      {/* Navbar */}
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <a
            className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 "
            href="#"
          >
            Ricardo Dev.
          </a>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col mt-4 space-y-2 text-center  lg:visible lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
          <a
            className="text-gray-700 dark:text-gray-200 lg:px-6 cursor-pointer dark:hover:text-blue-400 hover:text-blue-500"
            onClick={() => {
              handleClick("Projects");
            }}
          >
            Projects
          </a>
          <a
            className="text-gray-700 dark:text-gray-200 lg:px-6 cursor-pointer dark:hover:text-blue-400 hover:text-blue-500"
            onClick={() => {
              handleClick("Skills");
            }}
          >
            Skills
          </a>

          <a
            className="text-gray-700  dark:text-gray-200 lg:px-6 cursor-pointer dark:hover:text-blue-400 hover:text-blue-500"
            onClick={() => {
              handleClick("AboutMe");
            }}
          >
            About Me
          </a>
        </div>

        {/* Socials Links */}
        <div className="flex items-center gap-6 justify-between  mt-4 lg:mt-0">
          <a
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-4xl"
            href="https://github.com/ricardoadorno"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>{" "}
          <a
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-4xl"
            href="https://linkedin.com/in/ricardo-adorno"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>{" "}
        </div>
      </nav>
      <div ref={HeaderRef}>
        <Header />
      </div>

      <div ref={ProjectRef}>
        <Project />
      </div>

      <div ref={SkillsRef}>
        <Skills />
      </div>
      <div ref={AboutMeRef}>
        <AboutMe />
      </div>
    </div>
  );
}
