import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <section className=" bg-gray-800">
      <h3 className="text-4xl font-bold text-white text-center mt-2  pt-4">
        About Me
      </h3>
      <article className="flex flex-wrap  text-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full text-left">
          <p className="mt-2 max-w-sm text-lg text-gray-300  border-t-2 border-orange-500 ">
            I'm a Information Systems grad student, currently working my way to
            software engineering. I'm passionate about learning new technologies
            and solving problems. I'm seeking new challenges and opportunities
            to improve my skills. My dream job is to be a lead engineer at
            Notion. My biggest interests are:
          </p>
          <ul className="flex flex-col gap-2 p-4">
            <li className="flex items-center gap-2 text-white font-bold">
              <i className="fas fa-check text-blue-500"></i> Web tecnologies and
              digital products
            </li>
            <li className="flex items-center gap-2 text-white font-bold">
              <i className="fas fa-check text-blue-500"></i> Teamwork and
              leadership
            </li>
            <li className="flex items-center gap-2 text-white font-bold">
              <i className="fas fa-check text-blue-500"></i> Creating reliable
              and optimal software
            </li>
          </ul>
        </div>

        <Image
          className="rounded-md lg:max-w-2xl pl-8"
          src="/images/me.jpg"
          width={400}
          height={400}
          alt="ricardo-dev"
        />
      </article>

      <footer className="flex flex-col items-center justify-center w-full border-t h-40">
        <h3 className="text-4xl font-bold text-white pt-4 pb-4">Contact Me</h3>
        <div className="flex items-center gap-6 justify-between  mt-4 pb-8  lg:mt-0">
          <a className="text-gray-700 dark:text-gray-200 lg:px-4 dark:hover:text-blue-400 hover:text-blue-500">
            <i className="fas fa-envelope text-3xl text-white pr-4"></i>
            ricardo.castrorc1998@gmail.com
          </a>
          <a className="text-gray-700 dark:text-gray-200 lg:px-4 dark:hover:text-blue-400 hover:text-blue-500">
            <i className="fas fa-phone text-3xl text-white pr-4"></i>
            (75) 99242-0658
          </a>
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
      </footer>
    </section>
  );
}

export default AboutMe;
