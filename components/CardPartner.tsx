import React from 'react';
import Image from 'next/image';
import { Box, Center, Stack, Flex, Heading, GridItem } from '@chakra-ui/react';

type Props = {
  src: string;
};

export const CardPartner: React.FC<Props> = ({ src, ...rest }) => {
  return (
    <GridItem bg='brand.ultraLightGray'
      borderRadius='2rem' p={8} w='100%'
      alignItems='center' justifyContent='center'{...rest}>
      < Flex sx={{ opacity: 0.5 }}
        w='100%' h='100%' 
        align='center' justify='center' >
        <Image src={`/logos/hotels/${src}.svg`} alt={src} width={200} height={200} />
      </Flex >
    </GridItem >);
};
