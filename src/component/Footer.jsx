import React from "react";
import { useContext } from 'react'
import { AppContext } from '../App'

function Footer() {
  const {navigateTo} = useContext(AppContext)

  return (
    <footer className="py-8 border-t-[1px] border-gray-700">
      <div className="grid md:grid-cols-2 gap-4 place-content-center text-start md:text-center md:mb-8">
        <ul className="gap-2 md:gap-4 lg:gap-10 grid grid-cols-4 md:flex md:text-center text-sm lg:text-base">
          <li onClick={() => navigateTo("home")}>Home</li>

          <li onClick={() => navigateTo("about")}>About</li>

          <li onClick={() => navigateTo("projects")}>Project</li>

          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jmtdelremedio@gmail.com"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
        <p className="opacity-70 -tracking-tighter text-[12px] text-center text-gray-400">
          &copy; 2023 Jean Maica del Remedio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
