// MobileMenu.tsx file

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle touch events for swiping
  useEffect(() => {
    function handleTouchStart(event: TouchEvent) {
      touchStartXRef.current = event.touches[0].clientX;
    }

    function handleTouchMove(event: TouchEvent) {
      if (touchStartXRef.current !== null) {
        const touchEndX = event.touches[0].clientX;
        const touchDiff = touchStartXRef.current - touchEndX;

        // If swipe is more than 50px to the left, close the menu
        if (touchDiff > 50) {
          onClose();
        }
      }
    }

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div ref={menuRef} className="bg-white h-full w-64 p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button onClick={onClose}>
            <Image src="/close-icon.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Lux</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
