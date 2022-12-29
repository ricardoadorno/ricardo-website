import React from "react";

function Contacts() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <div>
        <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">
          <i className="fas fa-envelope text-3xl text-white"></i>
          Email: ricardo.castrorc1998@gmail.com
        </a>
        <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500">
          <i className="fas fa-phone text-3xl text-white"></i>
          Phone: (75) 99242-0658
        </a>
      </div>
      <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
        <i className="fab fa-linkedin text-3xl text-white"></i>
        <i className="fab fa-github text-3xl text-white"></i>
      </div>
    </footer>
  );
}

export default Contacts;
