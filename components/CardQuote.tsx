import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Sal from "./Sal";

type Props = {
  children: React.ReactNode;
  p: string;
};

export const CardQuote: React.FC<Props> = ({ p, children, ...rest }) => {
  return (
    <Box bg='brand.ultraLightGray'
      borderRadius='2rem' w={600} p={p}
      {...rest}
      sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: -10, left: -10, zIndex: '2' }}>
        <Sal animation='flip-left'>
        <Image src='/icons/quote-mark.svg' alt='Quote Symbol' width='100px' height='100px'
        />
        </Sal>
      </Box>
      {children}
    </Box>);
};
