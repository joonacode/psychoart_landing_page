import Image from 'next/image';
import React from 'react';

const Input = () => {
  return (
    <div className='relative'>
      <div className='absolute top-[10px] left-3'>
        <Image src='/icons/search.svg' alt='search' width={20} height={20} />
      </div>
      <input
        type={'text'}
        placeholder='Search items and collections'
        className='bg-[#ffffff1a] outline-none py-2 pl-10 pr-5 rounded-xl '
      />
    </div>
  );
};

export default Input;
