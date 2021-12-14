import { list_top_creator } from '@/fake_data';
import React from 'react';
import { Button, Container, CreatorItem } from '.';

const TopCreator = () => {
  return (
    <Container className={'mb-44'}>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>Top Creator</h2>
        <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {list_top_creator.map((item, i) => (
          <CreatorItem key={i} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default TopCreator;
