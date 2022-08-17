import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Sal from "./Sal";

type Props = {
  children: React.ReactNode;
  padding: string | number[];
};

export const CardQuote: React.FC<Props> = ({ padding, children, ...rest }) => {
  return (
    <Box bg='brand.ultraLightGray'
      borderRadius='2rem' w={600} p={padding}
      {...rest}
      sx={{ position: 'relative' }}>
      <Box sx={{
        position: 'absolute',
        top: [-5, -5, -10], left: [-2, -4, -10],
        width: [50, 50, 100],
        zIndex: '2'
      }}>
        <Sal animation='flip-left'>
        <Image src='/icons/quote-mark.svg' alt='Quote Symbol' width='100px' height='100px'
        />
        </Sal>
      </Box>
      {children}
    </Box>);
};
