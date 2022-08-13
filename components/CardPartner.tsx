import React from 'react';
import Image from 'next/image';
import { Box, Stack, Text, Heading } from '@chakra-ui/react';

type Props = {
  src: string;
};

export const CardPartner: React.FC<Props> = ({ src, ...rest }) => {
  console.log(src);
  return (
    <Box bg='brand.ultraLightGray'
      borderRadius='2rem' p={20}
      {...rest}>
      <Box>
        <Image src={src} width={200} height={200} alt='hotel logo'
        />
      </Box>
    </Box>);
};
