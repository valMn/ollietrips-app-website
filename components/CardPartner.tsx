import React from 'react';
import Image from 'next/image';
import { Box, Center, Stack, Flex, Heading } from '@chakra-ui/react';

type Props = {
  src: string;
};

export const CardPartner: React.FC<Props> = ({ src, ...rest }) => {
  return (
    <Box bg='brand.ultraLightGray'
    borderRadius='2rem' p={8}
      {...rest}>
    <Box minW={200} minH={200} sx={{ opacity: 0.5 }}>
      <Image src={`/logos/hotels/${src}.svg`} alt={src} width={200} height={200} />
      </Box>
    </Box>);
};
