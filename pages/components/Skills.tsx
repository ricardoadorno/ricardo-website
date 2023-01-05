import React from "react";

function Skills() {
  return (
    <main className="bg-gray-800 mx-auto px-3 py-5">
      <h3 className="text-4xl font-bold text-white text-center mt-2  pt-4">
        Skills
      </h3>

      <div className="flex flex-wrap mt-4 ">
        {/* HTML */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/html-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                HTML & CSS
              </h4>
              <div className="text-gray-500">
                A deep base on web technologies like HTML, CSS and Browser APIs.
                The fetch API, creating responsive layouts and knowledge of CSS
                frameworks like Bootstrap and
                <strong> Tailwind</strong>.
              </div>
            </div>
          </div>
        </div>
        {/* React */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/react-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">React</h4>
              <div className="text-gray-500">
                The powerful JavaScript library for building user interfaces. I
                have experience with React Hooks, State Management
                <strong> (Redux)</strong>, and <strong>Next</strong>.
              </div>
            </div>
          </div>
        </div>
        {/* Jasvacript */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/javascript-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                Javascript
              </h4>
              <div className="text-gray-500">
                Extensive knowledge of JavaScript and its core principles.
                Additionally, experience with <strong>Typescript</strong> and
                clean code pratices.
              </div>
            </div>
          </div>
        </div>
        {/* Node */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/nodejs-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Node</h4>
              <div className="text-gray-500">
                The back-end technology that uses JavaScript on the server.
                Authetentication, REST API's, and Database intergration are some
                of my skills on regards to Node.
              </div>
            </div>
          </div>
        </div>
        {/* SQL */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/postgresql-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                SQL/Postgress
              </h4>
              <div className="text-gray-500">
                The most popular relational database management system. I have a
                good understanding of SQL and how to use it to create, read,
                update, and delete data from a database.
              </div>
            </div>
          </div>
        </div>
        {/* Figma */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/figma-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Figma</h4>
              <div className="text-gray-500">
                The most popular design tool for creating user interfaces. As a
                developter, I find useful to have a good understanding of design
                tools and design principles.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
