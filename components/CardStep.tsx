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
      <Stack align='center' pb={3}>
        <Image src={imageSrc} alt={`Step ${stepNumber}`}
          width={270} height={546} />
        <Stack direction='row' pt={25}>
          <Heading color='gray.300' fontSize='6xl' fontWeight='extrabold' pr={1}>/0{stepNumber}</Heading>
          <Heading color='gray.700' fontSize='2xl' fontWeight='extrabold' pt={2.5}>{title}</Heading>
        </Stack>
        <Text color='gray.600'>{subtitle}</Text>
      </Stack>
    </Box>);
};
