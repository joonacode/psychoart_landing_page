import Link from 'next/link';
import React from 'react';

const Button = ({
  className = '',
  variant,
  isLink,
  href,
  onClick,
  children,
}) => {
  let rootClass = 'py-2 px-5 text-center rounded-xl ';
  if (variant === 'primary') {
    rootClass += 'btn_primary text-white shadow-sm';
  } else if (variant === 'outlinePrimary') {
    rootClass += 'btn_primary_outline text-white shadow-sm';
  } else {
    rootClass += 'bg-[#ffffff1A] text-white';
  }
  if (isLink) {
    return (
      <Link href={href}>
        <a className={rootClass + ' ' + className}>{children}</a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={rootClass + ' ' + className}>
      {children}
    </button>
  );
};

export default Button;
