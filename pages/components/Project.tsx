import Image from "next/image";
import React from "react";

function Project() {
  return (
    <section className="bg-gray-800">
      <h2
        className="text-4xl font-bold text-white text-center mt-2  pt-4
      "
      >
        My Projects
      </h2>
      {/* Project 1 */}
      <article className="flex flex-wrap  text-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full text-left">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">
            Project: Movies API
          </p>
          <p className="mt-4 max-w-sm text-xl text-gray-300  border-t-2 border-orange-500 p-2">
            Using the API from The Movie DB, I created a app that allows you to
            search for movies and get information about them.
          </p>
          <a
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50"
            href="https://movie-db-project-ten.vercel.app/"
            target="_blank"
          >
            Take a Look!
          </a>
        </div>

        <Image
          className="p-4 sm:w-1/2  w-full shadow-2xl border-2 border-slate-400 "
          src="/images/project1.png"
          width={400}
          height={400}
          alt="prject 1"
        />
      </article>
      {/* Project 2 */}
      <article className="flex flex-wrap text-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full text-left lg:order-2">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Project: States of Notion
          </p>
          <p className="mt-4 max-w-sm text-xl text-gray-300 border-t-2 border-cyan-400 p-2">
            A case study of the Notions toolings to manage states and
            functionalities.
          </p>
          <a
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50"
            href="https://notion-states-project.vercel.app/"
            target="_blank"
          >
            Take a Look!
          </a>
        </div>

        <Image
          className="p-4 sm:w-1/2  w-full lg:order-1 shadow-2xl border-2 border-slate-400 "
          src="/images/project2.png"
          width={500}
          height={400}
          alt="prject 3"
        />
      </article>
      {/* Project 3 */}
      <article className="flex flex-wrap  text-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className=" p-4 sm:w-1/2 lg:w-1/3 w-full text-left">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Project: Drag and Drop Week
          </p>
          <p className="mt-4 max-w-sm text-xl text-gray-300 border-t-2 border-orange-500 p-2">
            Using React, I created a drag and drop app that allows you to plan
            each hour of the week. With ease
          </p>
          <a
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50"
            href="https://weekly-drag-app.vercel.app/"
            target="_blank"
          >
            Take a Look!
          </a>
        </div>
        <Image
          className="p-4 sm:w-1/2 w-full shadow-2xl border-2 border-slate-400 "
          src="/images/project3.png"
          width={500}
          height={400}
          alt="prject 3"
        />
      </article>
      <div className="border-b-4 border-cyan-400"></div>
    </section>
  );
}

export default Project;
