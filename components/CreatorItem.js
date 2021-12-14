import React from 'react';
import { Button } from '.';

const CreatorItem = ({ data }) => {
  const { image, bgimage, username, price, product_name } = data;
  return (
    <div className='bg-[#ffffff1a] overflow-hidden rounded-lg shadow-lg'>
      <div className='rounded-lg overflow-hidden mb-3'>
        <img
          src={bgimage}
          className='object-cover object-center'
          alt={username}
        />
      </div>
      <div className='pb-8 pl-8 pr-8 flex flex-col justify-center items-center mt-[-60px]'>
        <div className='w-[100px] h-[100px] mb-3'>
          <img
            src={image}
            className='object-cover object-center w-full h-full'
            alt={username}
          />
        </div>
        <p className='font-bold text-xl text-center mb-4'>{username}</p>
        <p className='opacity-50 text-center text-sm mb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Button className='w-full' variant={'primary'}>
          + Follow
        </Button>
      </div>
    </div>
  );
};

export default CreatorItem;
