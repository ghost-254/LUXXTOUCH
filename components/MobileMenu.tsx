// MobileMenu.tsx

import Image from 'next/image';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white h-full w-64 p-8 shadow-lg">
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
