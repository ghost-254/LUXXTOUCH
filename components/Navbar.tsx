"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/constants';

// Manually creating a mock object for useRouter
const mockRouter = {
  push: () => {},
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-customTeal font-mono flex justify-between items-center max-container padding-container relative z-30 py-10">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="ml-4 text-white font-mono first-letter:text-xl font-bold">Lux Touch</span>
        </Link>  

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={
                link.key === 'contact_us' ? '/contact-us' :
                link.key === 'about' ? '/about' :
                link.key === 'services' ? '/services' :
                link.href
              }
              key={link.key}
              className="regular-16 text-white flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <Image 
              src={isMenuOpen ? '/close-icon.svg' : '/menu.svg'}
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
            />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
