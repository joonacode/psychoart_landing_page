import React from 'react';
import { Button, Container } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container className={'flex flex-col sm:flex-row mt-20 mb-32'}>
      <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10'>
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className='text-3xl lg:text-6xl font-bold mb-5'>
            Create, Sell & Collect Your Own Creative NFT
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className='mb-8 opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit.
          </p>
        </Reveal>

        <div className='flex mb-10'>
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <Button
              isLink
              href={'/#about'}
              className={'mr-3'}
              variant={'primary'}
            >
              Explore Now
            </Button>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
            <Button isLink href={'/#collections'}>
              Sell NFT
            </Button>
          </Reveal>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className='font-bold text-2xl mb-1'>37k+</p>
              <p className='opacity-50 '>Artworks</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className='font-bold text-2xl mb-1'>20k+</p>
              <p className='opacity-50 '>Artists</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className='font-bold text-2xl mb-1'>99k+</p>
              <p className='opacity-50 '>Auctions</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className='flex-1 mt-14 sm:mt-0'>
        <JackInTheBox delay={200} triggerOnce>
          <div className='relative w-full h-[400px] lg:h-[500px]'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src='/hero/heroimage.png'
              alt='hero'
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
