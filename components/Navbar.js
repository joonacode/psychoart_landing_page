import Link from 'next/link';
import React from 'react';
import { Button, Container, Input, Logo } from '.';

const Navbar = () => {
  return (
    <div className='py-4'>
      <Container className={'flex justify-between items-center'}>
        <Logo />
        <div className='items-center hidden sm:flex '>
          <div className='hidden lg:block'>
            <Input />
          </div>
          <Link href='/'>
            <a className='ml-7'>Collections</a>
          </Link>
          <Link href='/'>
            <a className='ml-7'>Feature</a>
          </Link>
          <Link href='/'>
            <a className='ml-7 mr-7'>FAQ</a>
          </Link>
          <Button variant={'primary'}>Select Wallet</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
