import { flattenTokens } from "@chakra-ui/styled-system";
import React from 'react';
import { useMemo } from 'react';

// Don't forget the imports and to initialize
// sal, when the application first mounts.
// Don't do it in this file.

// import sal from 'sal.js';
// import 'sal.js/dist/sal.css';
// sal();

type Animation =
  'fade' |
  'slide-up' |
  'slide-down' |
  'slide-left' |
  'slide-right' |
  'zoom-in' |
  'zoom-out' |
  'flip-up' |
  'flip-down' |
  'flip-left' |
  'flip-right';

type Props = {
  animation: Animation;
  duration?: string;
  delay?: string;
  easing?: string;
  inline?: boolean;
  repeat?: boolean;
  once?: boolean;
  style?: any;
  children: React.ReactNode;
};

export const Sal: React.FC<Props> = ({
  animation = 'fade',
  duration = '500',
  delay = '0',
  easing = 'ease-out-bounce',
  repeat = false,
  once = true,
  inline = false,
  style,
  children,
}) => {

  return inline ? (<span style={style}
    data-sal={animation}
    data-sal-duration={duration}
    data-sal-delay={delay}
    data-sal-easing={easing}
    data-sal-repeat={repeat}
    data-sal0-once={once}
  >
    {children}
  </span>) : (<div style={style}
    data-sal={animation}
    data-sal-duration={duration}
    data-sal-delay={delay}
    data-sal-easing={easing}
      data-sal-repeat={repeat}
      data-sal0-once={once}
  >
    {children}
  </div>);
};

export default Sal;