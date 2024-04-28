import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import logoFlatwhite from '../../../public/assets/images/flatwhitelogo_white.svg';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navbarBgColor, setNavbarBgColor] = useState<string>('bg-primary');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const aboutSection = document.getElementById('about');
      if (heroSection && aboutSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();

        const isHeroVisible =
          heroRect.top >= 0 && heroRect.bottom <= window.innerHeight;
        const isAboutVisible =
          aboutRect.top >= 0 && aboutRect.bottom <= window.innerHeight;
        if (isHeroVisible && isAboutVisible) {
          setNavbarBgColor('bg-primary');
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const suscribeSection = document.getElementById('suscribe');
      if (suscribeSection) {
        const suscribeRect = suscribeSection.getBoundingClientRect();
        const isSuscribeVisible =
          suscribeRect.top >= -50 &&
          suscribeRect.bottom <= window.innerHeight + 50;
        if (isSuscribeVisible) {
          setNavbarBgColor('bg-secondary');
        } else {
          setNavbarBgColor('bg-primary');
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`h-[10vh] sticky top-0 z-20 py-3  ${navbarBgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img
              className="h-2"
              src={logoFlatwhite}
              alt="Logo"
              height={55}
            />
          </div>

          {/* Mobile menu button (shown on small screens) */}
          <div className="md:hidden block">
            <button
              onClick={toggleMenu}
              className="text-white px-3 py-2 rounded-md text-lg font-bold absolute top-5 md:top-10 right-10 "
            >
              <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2059 2.875H1.79412C1.66499 2.875 1.53123 2.82091 1.42519 2.70825L0.879039 3.22227L1.42519 2.70825C1.3177 2.59404 1.25 2.42994 1.25 2.25C1.25 2.07006 1.3177 1.90596 1.42519 1.79175C1.53123 1.67909 1.66499 1.625 1.79412 1.625H21.2059C21.335 1.625 21.4688 1.67909 21.5748 1.79175C21.6823 1.90596 21.75 2.07006 21.75 2.25C21.75 2.42994 21.6823 2.59404 21.5748 2.70825C21.4688 2.82091 21.335 2.875 21.2059 2.875ZM21.2059 11.125H1.79412C1.66499 11.125 1.53123 11.0709 1.42519 10.9582C1.3177 10.844 1.25 10.6799 1.25 10.5C1.25 10.3201 1.3177 10.156 1.42519 10.0418C1.53123 9.92909 1.66499 9.875 1.79412 9.875H21.2059C21.335 9.875 21.4688 9.92909 21.5748 10.0418C21.6823 10.156 21.75 10.3201 21.75 10.5C21.75 10.6799 21.6823 10.844 21.5748 10.9583C21.4688 11.0709 21.335 11.125 21.2059 11.125ZM21.2059 19.375H1.79412C1.66498 19.375 1.53123 19.3209 1.42519 19.2082C1.3177 19.094 1.25 18.9299 1.25 18.75C1.25 18.5701 1.3177 18.406 1.42519 18.2918C1.53123 18.1791 1.66498 18.125 1.79412 18.125H21.2059C21.335 18.125 21.4688 18.1791 21.5748 18.2918C21.6823 18.406 21.75 18.5701 21.75 18.75C21.75 18.9299 21.6823 19.094 21.5748 19.2083C21.4688 19.3209 21.335 19.375 21.2059 19.375Z" fill="#111928" stroke="#111928" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Right side - Navigation options */}
          <div className="hidden md:flex space-x-4">
            <Link href="/#about">
              <a
                className={
                  router.pathname === '/#about'
                    ? 'text-white'
                    : 'text-white px-3 py-2 rounded-md text-lg font-bold hover:underline'
                }
              >
                Acerca de
              </a>
            </Link>
            <Link href="/#suscribe">
              <a
                className={
                  router.pathname === '/#suscribe'
                    ? 'text-white'
                    : 'text-white px-3 py-2 rounded-md text-lg font-bold hover:underline'
                }
              >
                Inscribete
              </a>
            </Link>
          </div>

          {/* Mobile dropdown menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2 w-48 bg-white rounded-md shadow-lg fixed right-2 top-10 z-[9999]">
              <Link href="/#about">
                <a
                  onClick={toggleMenu}
                  className={
                    router.pathname === '/#about'
                      ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                  }
                >
                  Acerca de
                </a>
              </Link>
              <Link href="/#suscribe">
                <a
                  onClick={toggleMenu}
                  className={
                    router.pathname === '/#suscribe'
                      ? 'block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      : 'block px-4 py-2 text-gray-600 hover:bg-gray-200'
                  }
                >
                  Inscribete
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
