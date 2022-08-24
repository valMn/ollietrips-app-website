import React from 'react';
import Image from 'next/image';
import { Box, Stack, Text, Heading } from '@chakra-ui/react';
import Sal from "./Sal";

type Props = {
  imageSrc: string;
  stepNumber: number;
  title: string;
  subtitle: string;
};

export const CardStep: React.FC<Props> = ({ imageSrc, stepNumber, title, subtitle, ...rest }) => {
  return (
    <Box {...rest} flex={1} alignSelf='flex-start' w='100%'>
      <Stack align='center' pb={3} w='100%'>
        <Image src={imageSrc} alt={`Step ${stepNumber}`}
          width={240}
          height={500}
          layout='intrinsic'
        />
        <Sal animation='slide-up' duration='1200' delay='300'>
          <Stack direction={['row', 'row', 'column', 'row']} pt={5}
            alignItems={['center', 'center', 'flex-start']} justifyContent={['center', 'flex-start']}>
            <Sal animation='slide-left'>
              <Heading color='brand.lightGray' fontSize={['6xl', '7xl', '6xl']}
                fontWeight='extrabold'
                pr={2}>/0{stepNumber}</Heading>
            </Sal>
            <Heading color='brand.darkGray'
              fontSize={['2xl', '2xl', 'xl']}
              maxW={[300, 300, '100%']} fontWeight='extrabold' pt={3}>{title}</Heading>
        </Stack>
        </Sal>
        <Text textAlign={['center', 'center', 'start']} color='brand.mediumGray' maxW={[400, 400, '100%']} pt={[5]}>{subtitle}</Text>
      </Stack>
    </Box>);
};
