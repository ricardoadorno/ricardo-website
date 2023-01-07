import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

import { useRef, RefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation("home");

  // Redirect to pt-BR
  useEffect(() => {
    navigator.languages.map((lang) => {
      if (lang === "pt-BR" || lang === "pt") {
        router.push("/pt");
      }
    });
  }, []);

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
        <a
          className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 "
          href="#"
        >
          Ricardo Dev.
        </a>

        {/* Nav Items */}
        <div className="flex flex-col mt-4 space-y-2 text-center  lg:visible lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0 font-bold text-xl">
          <a
            className=" text-white lg:px-6 cursor-pointer  hover:text-blue-500 "
            onClick={() => {
              handleClick("Projects");
            }}
          >
            {t("Projects")}
          </a>
          <a
            className=" text-white lg:px-6 cursor-pointer  hover:text-blue-500"
            onClick={() => {
              handleClick("Skills");
            }}
          >
            {t("Skills")}
          </a>

          <a
            className="  text-white lg:px-6 cursor-pointer  hover:text-blue-500"
            onClick={() => {
              handleClick("AboutMe");
            }}
          >
            {t("About Me")}
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
          </a>
          <a
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-4xl"
            href="https://linkedin.com/in/ricardo-adorno"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <select
            className="text-white bg-transparent outline-none cursor-pointer hover:bg-slate-700 p-1 rounded-md leading-tight "
            onChange={(e) => {
              router.push(router.pathname, router.pathname, {
                locale: e.target.value,
              });
            }}
            value={locale}
          >
            <option
              className="bg-transparent  font-bold py-2 px-4  "
              value="en"
            >
              English
            </option>
            <option
              className="bg-transparent  font-bold py-2 px-4  "
              value="pt"
            >
              Português
            </option>
          </select>
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default Home;
