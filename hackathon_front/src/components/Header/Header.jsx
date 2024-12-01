import React from "react";
import { Navigate, Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vw] border-b-2 border-yellow-400"></div>
      <div className="grid grid-cols-2 px-16 py-4">
        <div className="flex items-center gap-2 justify-end col-span-2">
          <Link to={"/Tracking"}>
            <button className="bg-yellow-400 rounded-3xl text-white">
              Tracking Mes Colis
            </button>
          </Link>
          <Link to={"/Login"}>
            <button className="bg-blue-400 rounded-3xl text-white">
              login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
