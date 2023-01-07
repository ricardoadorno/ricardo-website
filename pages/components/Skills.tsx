import React from "react";
import { useTranslation } from "next-i18next";

function Skills() {
  const { t } = useTranslation("home");

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
              <div className="text-gray-500">{t("HTML")}</div>
            </div>
          </div>
        </div>
        {/* React */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/react-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">React</h4>
              <div className="text-gray-500">{t("React")}</div>
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
              <div className="text-gray-500">{t("JavaScript")}</div>
            </div>
          </div>
        </div>
        {/* Node */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/nodejs-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Node</h4>
              <div className="text-gray-500">{t("Node")}</div>
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
              <div className="text-gray-500">{t("SQL/PostgreSQL")}</div>
            </div>
          </div>
        </div>
        {/* Figma */}
        <div className="w-full md:w-1/2 xl:w-1/3 px-6 py-3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <img src="/logos/figma-svg.svg" width={80} height={80} />
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Figma</h4>
              <div className="text-gray-500">{t("Figma")}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
