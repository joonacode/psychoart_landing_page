import React from 'react';

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1320px] mx-auto px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
