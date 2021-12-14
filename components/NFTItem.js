import React from 'react';
import { Button } from '.';

const NFTItem = ({ data }) => {
  const { image, username, price, product_name } = data;
  return (
    <div className='hover:bg-[#ffffff66] bg-[#ffffff1a] p-5 rounded-lg shadow-lg'>
      <div className='rounded-lg overflow-hidden mb-3'>
        <img src={image} alt={username} />
      </div>
      <div className='flex flex-wrap justify-between items-center opacity-50 mb-2'>
        <p>@{username}</p>
        <p>Current Bid</p>
      </div>
      <div className='flex flex-wrap justify-between items-center font-bold mb-5'>
        <p>{product_name}</p>
        <p>{price} ETH</p>
      </div>
      <Button className='w-full' variant={'primary'}>
        Place a bid
      </Button>
    </div>
  );
};

export default NFTItem;
