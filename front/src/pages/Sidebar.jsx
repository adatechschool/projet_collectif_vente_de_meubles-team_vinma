import { useState } from "react";
import {
  ShoppingBagIcon
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (

          <button
            className=" text-4xl text-white cursor-pointer z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >        
            x
          </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className=" z-30 absolute flex items-center cursor-pointer right-4 top-5"
          // fill="#2563EB"
          viewBox="0 0 110 80"
          width="35"
          height="40"
        >
        <ShoppingBagIcon className="h-6 w-6 text-slate-900 cursor-pointer mr-7 -m-2 p-2 text-gray-400 hover:text-gray-500"/>
          {/* <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect> */}
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-gray-300  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
      </div>
    </>
  );
};

export default Sidebar;