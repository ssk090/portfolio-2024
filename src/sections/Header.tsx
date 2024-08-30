"use client";

import { handleScroll } from "@/utils";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-3xl bg-white/10 backdrop-blur">
        <a href="#/" className="nav-item" onClick={handleScroll}>
          Home
        </a>
        <a href="#project" className="nav-item" onClick={handleScroll}>
          Project
        </a>
        <a href="#about" className="nav-item" onClick={handleScroll}>
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          onClick={handleScroll}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
