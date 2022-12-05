import React from 'react';

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
  inline = false,
  style,
  children,
  ...rest
}) => {

  return inline ? (<span style={style}
    data-sal={animation}
    data-sal-duration={duration}
    data-sal-delay={delay}
    data-sal-easing={easing}
    {...rest}
  >
    {children}
  </span>) : (<div style={style}
    data-sal={animation}
    data-sal-duration={duration}
    data-sal-delay={delay}
    data-sal-easing={easing}
      {...rest}
  >
    {children}
  </div>);
};

export default Sal;