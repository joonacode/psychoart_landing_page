import React from 'react';
import { Button, Container } from '.';

const Hero = () => {
  return (
    <Container className={'flex  mt-20 mb-32'}>
      <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-5 lg:mt-10'>
        <h1 className='text-3xl lg:text-6xl font-bold mb-5'>
          Create, Sell & Collect Your Own Creative NFT
        </h1>
        <p className='mb-8 opacity-50'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <div className='flex mb-10'>
          <Button className={'mr-3'} variant={'primary'}>
            Explore Now
          </Button>
          <Button>Sell NFT</Button>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <div>
            <p className='font-bold text-2xl mb-1'>37k+</p>
            <p className='opacity-50 '>Artworks</p>
          </div>
          <div>
            <p className='font-bold text-2xl mb-1'>20k+</p>
            <p className='opacity-50 '>Artists</p>
          </div>
          <div>
            <p className='font-bold text-2xl mb-1'>99k+</p>
            <p className='opacity-50 '>Auctions</p>
          </div>
        </div>
      </div>
      <div className='flex-1 hidden sm:block'>
        <img src='/hero/heroimage.png' alt='hero' />
      </div>
    </Container>
  );
};

export default Hero;
