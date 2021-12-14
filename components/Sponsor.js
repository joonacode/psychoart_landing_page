import React from 'react';
import { Container } from '.';

const Sponsor = () => {
  return (
    <Container className={'grid grid-cols-3 gap-5 mb-32'}>
      <div className='mx-auto'>
        <img src='/sponsor/binance.svg' alt='binance' />
      </div>
      <div className='mx-auto'>
        <img src='/sponsor/ethereum.svg' alt='ethereum' />
      </div>
      <div className='mx-auto'>
        <img src='/sponsor/blockchainio.svg' alt='blockchainio' />
      </div>
    </Container>
  );
};

export default Sponsor;
