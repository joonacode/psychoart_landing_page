import React from 'react';
import { Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInUp } from '@/keyframes';
import Image from 'next/image';
const Sponsor = () => {
  return (
    <Container className={'grid grid-cols-3 gap-5 mb-32 items-center'}>
      <Reveal keyframes={fadeInUp} duration={800} delay={200}>
        <div className='flex items-center justify-center relative w-full h-[60px]'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition={'center'}
            src='/sponsor/binance.svg'
            alt='binance'
          />
        </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} duration={800} delay={400}>
        <div className='flex items-center justify-center relative w-full h-[60px]'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition={'center'}
            src='/sponsor/ethereum.svg'
            alt='ethereum'
          />
        </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} duration={800} delay={600}>
        <div className='flex items-center justify-center relative w-full h-[60px]'>
          <Image
            layout='fill'
            objectFit='contain'
            objectPosition={'center'}
            src='/sponsor/blockchainio.svg'
            alt='blockchainio'
          />
        </div>
      </Reveal>
    </Container>
  );
};

export default Sponsor;
