import React from 'react';
import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';
import { Box, Stack, Text, Heading, Avatar, Icon, Square, Link, Flex } from '@chakra-ui/react';

type Props = {
  imageSrc: string;
  name: string;
  linkedInUrl: string;
  description: string;
};

export const CardCreator: React.FC<Props> = ({ imageSrc, name, linkedInUrl, description }) => {
  return (
    <Box bg='gray.50'
      borderRadius='2rem' w={700} h={300} p={20}>
      <Flex gap={6}>
        <Avatar size='xl' src={imageSrc} name={name} />
        <Stack>
          <Flex align='center' justify='space-between' gap={4}>
            <Heading color='gray.600' size='lg'>{name}</Heading>
            {linkedInUrl && <Link href={linkedInUrl} isExternal>
              <Square bg='brand.primary' borderRadius='50%' w={50} h={50} p={2.5}>
                <Icon as={FiLinkedin} color='white' w='100%' h='100%' />
              </Square>
            </Link>}
          </Flex>
          <Text >{description}</Text>
        </Stack>
      </Flex >
    </Box >
  );
};;
