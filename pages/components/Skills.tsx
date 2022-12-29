import React from "react";

function Skills() {
  return (
    <div>
      <main className="bg-gray-800">
        <div className="container mx-auto px-6 py-8">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl text-center">
            Skills
          </h3>
          <div className="flex flex-wrap mt-4 -mx-6">
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-opacity-75">
                  <i className="fab fa-js text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    HTML,CSS,JS
                  </h4>
                  <div className="text-gray-500">
                    Get a better understanding of where your traffic is coming
                    from.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-opacity-75">
                  <i className="fab fa-react text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    React
                  </h4>
                  <div className="text-gray-500">
                    Speak directly to your customers in a more meaningful way.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full  bg-opacity-75">
                  <i className="fab fa-react text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    Redux
                  </h4>
                  <div className="text-gray-500">
                    Your customers data will be safe and secure.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 -mx-6">
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full  bg-opacity-75">
                  <i className="fab fa-js text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">Node</h4>
                  <div className="text-gray-500">
                    Get a better understanding of where your traffic is coming
                    from.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full  bg-opacity-75">
                  <i className="fab fa-js text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    SQL/Postgress
                  </h4>
                  <div className="text-gray-500">
                    Speak directly to your customers in a more meaningful way.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full  bg-opacity-75">
                  <i className="fab fa-figma text-6xl "></i>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    Figma
                  </h4>
                  <div className="text-gray-500">
                    Your customers data will be safe and secure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skills;
