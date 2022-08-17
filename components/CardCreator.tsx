import React from 'react';
import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';
import { Box, Stack, Text, Heading, Avatar, Icon, Square, Link, Flex } from '@chakra-ui/react';

type Props = {
  imageSrc: string;
  name: string;
  role: string;
  linkedInUrl: string;
  description: string;
};

export const CardCreator: React.FC<Props> = ({ imageSrc, name, linkedInUrl, role, description }) => {
  return (
    <Box bg='brand.ultraLightGray'
      borderRadius='2rem'
      maxW={700} w='100%'
      // maxH={300} h='100%'
      p={[10, 10, 20]}>
      <Flex gap={6} direction={['column', 'column', 'row']}>
        <Avatar size='xl' src={imageSrc} name={name} sx={{ 'background': 'none' }} />
        <Stack>
          <Flex align='center' justify='space-between' gap={4}>
            <Stack pb={2}>
              <Heading color='brand.darkGray' size='lg'>{name}</Heading>
              <Heading fontWeight='medium' color='brand.mediumGray' size='md'>{role}</Heading>
            </Stack>
            {linkedInUrl && <Link href={linkedInUrl} isExternal>
              <Box bg='brand.primary' borderRadius='50%' width={50} h={50} p={2.5}>
                <Icon as={FiLinkedin} color='white' w='100%' h='100%' />
              </Box>
            </Link>}
          </Flex>
          <Text >{description}</Text>
        </Stack>
      </Flex >
    </Box >
  );
};
