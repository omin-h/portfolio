"use client";

import Link from 'next/link';
import { socialLinks } from "../../constants/index";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <p>
          © 2024 <strong>Omin Hemapriya</strong>. All rights reserved.
        </p>
        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.link} target='_blank' rel='noopener noreferrer'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
