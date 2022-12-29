import React from "react";

function Project() {
  return (
    <>
      {/* Project 1 */}
      <main className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <div className="text-left">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                  Project: Movies API
                </p>
                <p className="mt-4 max-w-sm text-xl text-gray-300 ">
                  Using the API from The Movie DB, I created a app that allows
                  you to search for movies and get information about them.
                </p>
                <button className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50">
                  Take a Look!
                </button>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <img
                className="block h-80 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </main>
      {/* Project 2 */}
      <main className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <img
                className="block h-80 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <div className="text-left">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                  Project: States of Notion
                </p>
                <p className="mt-4 max-w-sm text-xl text-gray-300 ">
                  A case study of the Notions toolings to manage states and
                  functionalities.
                </p>
                <button className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50">
                  Take a Look!
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Project 3 */}
      <main className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <div className="text-left">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                  Project: Drag and Drop Week
                </p>
                <p className="mt-4 max-w-sm text-xl text-gray-300 ">
                  Using React, I created a drag and drop app that allows you to
                  plan each hour of the week. With ease
                </p>
                <button className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-gray-700 hover:bg-gray-50">
                  Take a Look!
                </button>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full ">
              <img
                className="block h-80 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
