import React from 'react';
import { Box, Stack, Text, Heading, Tag, Center, Divider, Flex, useDisclosure, Button } from '@chakra-ui/react';
import {
  Modal, ModalOverlay, ModalContent,
  // ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
// import Link from "next/link";
import Sal from "./Sal";

type Props = {
  title: string;
  percentage: number;
  totalQuantity: number;
  restQuantity: number;
  passPrice: number;
  passDescription: string;
  ctaLink: string;
  highlighted?: boolean;
};

export const CardPass: React.FC<Props> = ({
  title, percentage = 0, totalQuantity, restQuantity,
  ctaLink, passPrice, passDescription, highlighted = false, }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  const textColor = highlighted ? 'white' : 'brand.darkGray';
  const reverseTextColor = highlighted ? 'brand.darkGray' : 'white';
  const bgColor = highlighted ? 'white' : 'brand.primary';
  const cardPadding = highlighted ? [10, 12, 12, 16] : [6, 8, 10];
  const cardPaddingY = highlighted ? 24 : '';



  return (
    <>
    <Sal animation='slide-up'>
    <Box w="100%" h="100%"
      shadow='xl' borderWidth='2px'
      borderRadius='2rem' display='flex' alignItems='center'
      bg={highlighted ? 'brand.primary' : ''}
          p={cardPadding} py={cardPaddingY}
        >
          <Stack align='center' justify='center' spacing={[4, 4, 6, 8]} height='100%' width={[null, null, '100%']}>
            < Heading color={textColor} fontWeight={100} textAlign="center">{title}</Heading >
          <Flex
            direction={['column', 'column', 'column', 'column', 'row']}
            gap={4}
            justify='center'
            align='center'
              textAlign='center'
            color={textColor} >
              <Heading fontSize={['8xl', '8xl', '8xl', '6xl', '4xl']} pr={2}>{percentage}%</Heading>
          <Heading size='md' fontWeight={400}>Booking fees
            for a lifetime!</Heading>
        </Flex>
            <Tag size='md' bg={highlighted ? 'brand.accent1' : 'cyan.500'}>
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
              <Text textAlign='center'>
            {`Buy before it' s too late!`}
          </Text>
        </Stack >
            <Button rounded={'full'} size='lg'
              bg='white' color={highlighted ? 'brand.primary' : 'brand.darkGray'}
              _hover={{ backgroundColor: 'brand.lightgray' }}
              variant={highlighted ? 'solid' : 'solid'}
              onClick={onOpen}>Learn More</Button>
          </Stack>
        </Box >
      </Sal>

      {/* -------------- Modal ------------- */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          w="100%" maxW={850} mx={4}
          shadow='2xl' borderWidth='1px'
          borderRadius='2rem' display='flex' alignItems='center'
          bg={highlighted ? 'brand.primary' : 'white'}
          p={cardPadding} py={[16, 16, 20, 40]}
        >
          <ModalCloseButton rounded={'full'} sx={{
            position: 'absolute',
            top: [5, 5, 10], right: [5, 5, 10],
            transform: 'scale(1.4)'
          }}
            color={highlighted ? 'white' : 'brand.primary'} />
          <Stack align={['center', 'center', 'flex-start']}
            justify='center' spacing={[4, 4, 6, 8]}
            maxWidth={420}
            width={[null, null, '100%']} >
            < Heading color={textColor} fontWeight={100}
              textAlign="center">{title}<span style={{ fontWeight: '500' }}> €{passPrice}</span></Heading >
            <Flex
              direction={['column', 'column', 'row', 'row', 'row']}
              gap={4}
              justify='center'
              align='center'
              maxW={240}
              color={textColor} >
              <Heading
                fontSize={['6xl', '5xl', '6xll', '6xl', '5xl']} pr={2}>{percentage}%</Heading>
              <Heading size='md' fontWeight={400} textAlign={['center',]}>Booking fees
                for a lifetime!</Heading>
            </Flex>
            <Tag size='md' bg={highlighted ? 'brand.accent1' : 'cyan.500'}>
              <Text color={reverseTextColor}>
                {totalQuantity} pieces
              </Text>
            </Tag>
            <Stack color={textColor}>
              <Text
                textAlign={['center', 'center', 'start']}
              >
                {passDescription}
              </Text>
            </Stack >
            <Button rounded={'full'} size='lg'
              color={highlighted ? 'brand.primary' : 'white'}
              bg={highlighted ? 'white' : 'brand.primary'}
              w='100%'
              _hover={{ background: 'brand.lightgray' }}
              variant={highlighted ? 'solid' : 'solid'}
              onClick={onOpen}>Buy {title} here!</Button>
          </Stack>
        </ModalContent>
      </Modal>

    </>
  );
};;
