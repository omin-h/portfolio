"use client";

import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer font-poppins  mb-4'>
      <hr className='border-slate-200' />
      <div className='footer-container flex justify-between items-center pb-4'>
        <p className="">
          © 2024 <strong>Omin Hemapriya</strong>. All rights reserved.
        </p>

        <div className="flex gap-5 pt-2 mb-4">
          <a href='https://github.com/omin-h' aria-label="GitHub">
            <FaSquareGithub size={30} />
          </a>

          <a href='https://linkedin.com/in/omin-hemapriya' aria-label="LinkedIn">
            <IoLogoLinkedin size={30} />
          </a>

          <a href='https://x.com/ominduln' aria-label="X">
            <FaSquareXTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
