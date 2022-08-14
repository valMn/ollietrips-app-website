import React from 'react';
import { Box, Stack, Text, Heading, Tag, Center, Divider, Flex } from '@chakra-ui/react';
import Link from "next/link";
import Sal from "./Sal";

type Props = {
  title: string;
  percentage: number;
  totalQuantity: number;
  restQuantity: number;
  ctaLink: string;
  highlighted?: boolean;
};

export const CardPass: React.FC<Props> = ({
  title, percentage = 0, totalQuantity, restQuantity,
  ctaLink, highlighted = false, }) => {

  const textColor = highlighted ? 'white' : 'brand.darkGray';
  const reverseTextColor = highlighted ? 'brand.darkGray' : 'white';
  const bgColor = highlighted ? 'white' : 'brand.primary';
  const cardPadding = highlighted ? 16 : 8;
  const cardPaddingY = highlighted ? 24 : ''

  return (
    <Sal animation='slide-up'>
    <Box w="100%" h="100%"
      shadow='xl' borderWidth='2px'
      borderRadius='2rem' display='flex' alignItems='center'
      bg={highlighted ? 'brand.primary' : ''}
      p={cardPadding} py={cardPaddingY}>
      <Stack align='center' justify='center' spacing={10} height='100%'>
        < Heading color={textColor} fontWeight={100}>{title}</Heading >
        <Flex gap={4} justifyContent='center' alignItems='center' color={textColor} >
          <Heading size='2xl' pr={2}>{percentage}%</Heading>
          <Heading size='md' fontWeight={400}>Booking fees
            for a lifetime!</Heading>
        </Flex>
        <Tag size='lg' bg={bgColor}>
          <Text color={reverseTextColor}>
            {totalQuantity} pieces
          </Text>
        </Tag>
        <Center height='10px' width='50px'>
          <Divider size='lg' bg={bgColor} orientation='horizontal' borderWidth={1} />
        </Center>
        <Stack color={textColor}>
          <Stack direction='row' align='center' justify='center'>
            <Text fontWeight='bold'>{restQuantity}
            </Text>
            <Text>
              pieces left
            </Text>
          </Stack>
          <Text>
            {`Buy before it' s too late!`}
          </Text>
        </Stack >
        <Tag size='3xl' borderRadius='full' variant='solid'
          bg='white' color='brand.darkGray' py={3} px={6}>
          <Text as={highlighted ? undefined : 'u'}>
            <Link href={ctaLink} target='_blank'>
              Learn More
            </Link>
          </Text>
        </Tag>
      </Stack>
      </Box >
    </Sal>
  );
};;
