import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import logoFlatwhite from '../../../public/assets/images/flatwhitelogo_white.svg';
import Menu from '../../..//public/assets/images/menu.svg';

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
              <img src={Menu} alt="Menu" />
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
