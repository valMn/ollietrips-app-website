import React from 'react';
import Image from 'next/image';
import { Box, Stack, Text, Heading } from '@chakra-ui/react';

type Props = {
  imageSrc: string;
  stepNumber: number;
  title: string;
  subtitle: string;
};

export const CardStep: React.FC<Props> = ({ imageSrc, stepNumber, title, subtitle, ...rest }) => {
  return (
    <Box {...rest}>
      <Stack align='center' pb={3} w='100%'>
        <Image src={imageSrc} alt={`Step ${stepNumber}`}
          width={270} height={546} />
        <Stack direction='row' pt={25}>
          <Heading color='brand.lightGray' fontSize='6xl' fontWeight='extrabold' pr={2}>/0{stepNumber}</Heading>
          <Heading color='brand.darkGray' fontSize='xl' fontWeight='extrabold' pt={3}>{title}</Heading>
        </Stack>
        <Text color='brand.mediumGray'>{subtitle}</Text>
      </Stack>
    </Box>);
};
