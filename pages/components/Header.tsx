import React from "react";

function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Ricardo Dev.
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
          <a
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            Skills
          </a>

          <a
            className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"
            href="#"
          >
            About Me
          </a>
        </div>

        <a
          className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
          href="#"
        >
          Contact
        </a>
      </nav>
      {/* Hero */}
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-red-400 uppercase text-center">
            Welcome to my website
          </p>
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome to my website
          </h1>

          <div className="flex justify-center mt-6 gap-4">
            <p className="mt-6 max-w-lg text-md text-gray-300 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              libero exercitationem natus voluptatum, quod, quia, voluptatem
              quas voluptates quibusdam quae quidem. Quisquam, quae.
            </p>
          </div>

          <div className="flex justify-center mt-12 pt-6 ">
            <img
              className="w-1/2 rounded-2xl shadow-2xl object-cover object-center transform hover:scale-105 transition duration-10 ease-in-out cursor-pointer hover:shadow-xl hover:opacity-80 hover:animate-pulse animate-boun"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt="Workflow"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
