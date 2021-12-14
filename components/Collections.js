import { list_collection } from '@/fake_data';
import React from 'react';
import { Button, Container, NFTItem } from '.';

const Collections = () => {
  return (
    <Container className={'mb-44'}>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>Colleaction</h2>
        <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5'>
        <Button>Art</Button>
        <Button variant={'primary'}>Sport</Button>
        <Button>Photography</Button>
        <Button>Pattern</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {list_collection.map((item, i) => (
          <NFTItem key={i} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default Collections;
