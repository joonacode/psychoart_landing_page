import useWindowSize from '@/hooks/useWindowSize;';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Input, Logo } from '.';
import { Fade } from 'react-awesome-reveal';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const refMenu = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refMenu.current) {
        if (refMenu.current.contains(e.target)) {
          return;
        }
      }
      closeMenu();
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className='py-4 relative'>
      <Container className={'flex justify-between items-center'}>
        <Logo />
        <div className='hidden sm:block'>
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        <div className='block sm:hidden cursor-pointer'>
          <Image
            onClick={toggleMenu}
            src='/icons/menu.svg'
            alt='menu'
            width={30}
            height={30}
          />
        </div>
        {menu && width < 640 && (
          <Fade
            duration={300}
            delay={100}
            className='rounded-b-3xl absolute py-20 top-0 flex justify-center items-center  left-0 right-0 bg-[#000000E6] z-20'
          >
            <div ref={refMenu}>
              <ContentSidebar toggleMenu={toggleMenu} />
            </div>
          </Fade>
        )}
      </Container>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className='items-center flex-col sm:flex-row flex'>
      <div className='block sm:hidden lg:block'>
        <Input />
      </div>
      <Link href='/#collections'>
        <a
          onClick={toggleMenu}
          className='mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-7'
        >
          Collections
        </a>
      </Link>
      <Link href='/#feature'>
        <a onClick={toggleMenu} className='mb-3 sm:mb-0 ml-0 sm:ml-7'>
          Feature
        </a>
      </Link>
      <Link href='/#faq'>
        <a
          onClick={toggleMenu}
          className='mb-3 sm:mb-0 ml-0 sm:ml-7 mr-0 sm:mr-7'
        >
          FAQ
        </a>
      </Link>
      <Button variant={'primary'}>Select Wallet</Button>
    </div>
  );
};

export default Navbar;
