import React from 'react';
import { Button, Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter2, fadeInLeft } from '@/keyframes';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <Container className={'mb-44 scroll-mt-10'} id='about'>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>About Us</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50 w-full  sm:w-[400px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>
      </div>
      <div className='flex items-center'>
        <div className='w-[44%] hidden sm:block'>
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className='relative w-full h-[700px] rounded-2xl overflow-hidden'>
              <Image
                layout='fill'
                objectFit='cover'
                objectPosition={'center'}
                src='/aboutus.png'
                alt='about us'
              />
            </div>
          </Reveal>
        </div>
        <div className='flex-1 ml-0 sm:ml-10 lg:ml-20'>
          <h3 className='font-bold text-2xl mb-3'>Get Popular NFT</h3>
          <p className='mb-3 opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{' '}
          </p>
          <p className='mb-3 opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{' '}
          </p>
          <p className='hidden lg:block mb-3 opacity-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{' '}
          </p>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
            <Button variant={'primary'}>Show more</Button>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
