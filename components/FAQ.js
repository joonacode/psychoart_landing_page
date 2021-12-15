import { list_FAQ } from '@/fake_data';
import React, { useState } from 'react';
import { Container } from '.';
import { Reveal, Fade } from 'react-awesome-reveal';
import { fadeInDownShorter2, fadeInLeft, fadeInRight } from '@/keyframes';
const FAQ = () => {
  const [faq, setFaq] = useState(
    list_FAQ.map((item) => ({ ...item, status: false })),
  );

  const toggleFaq = (data) => {
    const newData = faq.map((item) => {
      return {
        ...item,
        status: data.id === item.id ? !data.status : false,
      };
    });
    setFaq(newData);
  };

  return (
    <Container className={'mb-44 scroll-mt-10'} id='faq'>
      <div className='text-center mb-10'>
        <h2 className='font-bold mx-auto leading-snug w-full sm:w-[400px] text-3xl mb-2'>
          Freaquently Asked Question
        </h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50'>Wanna Ask Something?</p>
        </Reveal>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {faq.map((item, i) => (
          <Reveal
            key={i}
            keyframes={(i + 1) % 2 === 0 ? fadeInLeft : fadeInRight}
            duration={800}
            delay={100}
          >
            <AccordionItem toggleFaq={toggleFaq} data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

const AccordionItem = ({ data, toggleFaq }) => {
  return (
    <div
      onClick={() => toggleFaq(data)}
      className='mb-4 pb-2 border-b-2 border-b-gray-500'
    >
      <div className='flex pb-3 cursor-pointer justify-between items-center'>
        <p className={data.status ? 'opacity-90' : 'opacity-50'}>
          {data.title}
        </p>
        <p className={data.status ? 'opacity-90' : 'opacity-50'}>
          {data.status ? '-' : '+'}
        </p>
      </div>
      {data.status && (
        <Fade>
          <p className={data.status ? 'opacity-90' : 'opacity-50'}>
            {data.desc}
          </p>
        </Fade>
      )}
    </div>
  );
};

export default FAQ;
