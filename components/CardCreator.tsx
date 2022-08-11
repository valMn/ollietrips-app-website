import React from 'react';
import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';
import { Box, Stack, Text, Heading, Avatar, Icon, Square } from '@chakra-ui/react';

type Props = {
  imageSrc: string;
  name: string;
  linkedInUrl: string;
  description: string;
};

export const CardCreator: React.FC<Props> = ({ imageSrc, name, linkedInUrl, description }) => {
  return (
    <Box color='gray.100' bg='tomato' borderRadius='2rem' w={600} minH={300}>
      <Avatar size='xl' name={name} />
      <Box bg='brand.primary' borderRadius='50%' w={50} h={50} p={2}>
        <Icon as={FiLinkedin} w='100%' h='100%' />
      </Box>
    </Box >
  );
};;
