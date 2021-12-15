import { keyframes } from '@emotion/react';

export const fadeInUp = keyframes`
0% {
    -webkit-transform: translate3d( 0, 100%, 0 );
    opacity: 0;
    transform: translate3d( 0, 100 %, 0 )
}

to {
    -webkit-transform: translateZ( 0 );
    opacity: 1;
    transform: translateZ( 0 )
}`;

export const fadeInRight = keyframes`
0% {
    -webkit-transform: translate3d(100%,0,0);
    opacity: 0;
    transform: translate3d(100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInLeft = keyframes`
0% {
    -webkit-transform: translate3d(-100%,0,0);
    opacity: 0;
    transform: translate3d(-100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;
export const fadeInDownShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,-50px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`;
export const fadeInDownShorter2 = keyframes`
from {
    opacity: 0;
    transform: translate(0,-30px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`;

export const maskRight = keyframes`{
  from {
      transform: translate(-100%,0)
  }
  to {
      transform: translate(0,0)
  }
}`;

export const slideInUp = keyframes`{
  0% {
      transform: translate3d(0, 100%, 0);
      visibility: visible
  }

  to {
      transform: translateZ(0)
  }
}`;

export const slideInDown = keyframes`{
  0% {
      transform: translate3d(0, -100%, 0);
      visibility: visible
  }

  to {
      transform: translateZ(0)
  }
}`;
