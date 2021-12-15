import { list_top_creator } from '@/fake_data';
import React from 'react';
import { Container, CreatorItem } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInDownShorter2 } from '@/keyframes';
const TopCreator = () => {
  return (
    <Container className={'mb-44'}>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>Top Creator</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {list_top_creator.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (i + 1)}
          >
            <CreatorItem key={i} data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default TopCreator;
