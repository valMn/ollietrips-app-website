import React from 'react';
import FutureImage from 'next/future/image';
import { FiLinkedin } from 'react-icons/fi';
import { Box, Stack, Text, Heading, Avatar, Icon, Square, Link, Flex } from '@chakra-ui/react';

type Props = {
  imageSrc: string;
  label: string;
};

export const HeaderService: React.FC<Props> = ({ imageSrc, label }) => {
  return (
    <Box w='100%' h='auto' position='relative'>
      <FutureImage
        priority
        width={250}
        height={250}
        style={{
          backgroundSize: '150% 150%',
          maxWidth: '800px',
          width: '100%',
          height: '100%'
        }}
        src={`/images/${imageSrc}.jpg`} alt={label} />
      <Heading size={['lg', 'lg', 'md']} fontWeight='medium' color='white'
        data-swiper-parallax="-300"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >{label}</Heading>
    </Box >
  );
};
