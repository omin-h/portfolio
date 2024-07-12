import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '../constants';

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
            <Link key={link.name} href={link.link} legacyBehavior>
              <a target='_blank'>
                <Image
                  src={link.iconUrl}
                  alt={link.name}
                  width={24} // Set your desired width
                  height={24} // Set your desired height
                  className='object-contain'
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
