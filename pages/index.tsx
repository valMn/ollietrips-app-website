import type { NextPage } from 'next';
import Image from 'next/image';
import FutureImage from 'next/future/image';
import Head from 'next/head';
import { theme } from '../utils/theme';
import styles from '../styles/Home.module.css';
import { creators } from '../data/creators';
import { hotels } from '../data/hotels';
import { passes } from '../data/passes';
import { headerServices } from "../data/headerServices";
import {
  Text, Box, Stack, Flex, Heading, Divider, Link,
  Center, HStack, Circle, Grid,

} from '@chakra-ui/react';
import { Section, CardPass, CardStep, CardCreator, CardPartner, HeaderService, Sal, NewsletterSubscribe } from "../components";
import sal, { Options } from 'sal.js';
import 'sal.js/dist/sal.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

import { FiLinkedin } from 'react-icons/fi';

sal({ once: true } as Options);

const navLinks = [{
  label: 'About',
  link: '#about'
}, {
  label: 'Partners',
  link: '#partners'
}, {
  label: 'Team',
  link: '#team'
}]

const Home: NextPage = () => {
  return (<>
      <Head>
      <title>{`The only travel app you’ll ever need`}</title>
        <meta name="description" content="Homepage for Ollie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className={styles.container}>
      <Section hero
        style={{
          paddingTop: 6,
          paddingBottom: 6
        }}
      >
        <nav>
          <Flex align='center' gap={8}>
            <Image src='/ollie-logo.svg' alt='Ollie logo'
              height={45} width={45}
            />
            {navLinks.map(link => <Link
              _hover={{ textDecoration: 'underline' }}
              key={link.label}
              href={link.link}>{link.label}</Link>)}
          </Flex>
        </nav>
      </Section>

        <Section>
          <Sal animation='slide-up' duration='1200' delay='300'>
          <Stack textAlign='center' spacing={6}>
            <Heading size='lg'>Plan your dream vacation at the speed of light</Heading >
            <Text >Everything you need for a perfect holiday in one <span style={{ fontWeight: 'bold' }}>app</span></Text>
            </Stack>
          </Sal>
        <Sal animation='slide-down' delay='500'>
          <Heading
            textAlign='center'
            color='brand.primary'
            size={['xl', 'xl', '2xl']}
            position='relative'
            top={12}
          >Launching soon</Heading>
        </Sal>
      </Section>

      <Section>

      </Section>
      <Section hero fullWidth
        style={{
          paddingBottom: 100,
        }}
      >
        <Sal animation='slide-up'>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              aspectRatio: 1,
              maskImage: 'url(/images/curve-mask-mobile.png)',
              maskSize: '100% 100%'
            }}>
            <Flex width='100%' height='100%'
              justifyContent='center' gap={4}
              display={['flex', 'flex', 'none']}
            >
              <Swiper loop={true}
                pagination={{
                  clickable: true,
                }} modules={[Pagination]}
                className="mySwiper">
                {headerServices.map((service, i) => <SwiperSlide key={i}  >
                  <HeaderService imageSrc={service.imageSrc} label={service.label} />
                </SwiperSlide>)}
              </Swiper>
            </Flex>
          </Box>

          <Box
            sx={{
              width: '100%',
              height: '100%',
              maskImage: 'url(/images/curve-mask.png)',
              maskSize: '100% 100%'
            }}>
            <Flex width='100%' height='100%'
              justifyContent='center' gap={4}
              display={['none', 'none', 'flex']}
            >
              {headerServices.map((service, i) => <HeaderService key={i} imageSrc={service.imageSrc} label={service.label} />)}
            </Flex>

          </Box>
        </Sal>
        </Section>

      <Section primaryBg hero rounded
      >

          <Flex direction={['column', 'column', 'row']}
            justifyContent='space-between'
            alignItems='center' gap={10}
          >

            <Flex direction='column' align='center' justify='center'
            maxW={['100%', 400]} color='white' h='auto'
            py={[16, 16, 15, 0]}
            >
            <Heading size='lg' pb={10} >Get up to 20% discount on your first reservation!</Heading >
            <Text >Be one of our first users. The first 2000 travelers who subscribe to our waiting list will receive <span style={{ fontWeight: 'bold' }}>PREMIUM</span> benefits.</Text>
            </Flex>
            <Sal animation='slide-up'>
              <form>
              <Box
                shadow='lg'
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  bottom: -15,
                  height: '100%',
                  width: '100%',
                  boxShadow: '0px 31px 38px -46px rgba(0,0,0,0.2)',
                }}
              >
                <Image src='/images/iphone-outline.svg' alt='Iphone 13 outline'
                  width={400}
                  height={450}
                />
                <Stack spacing={7}
                  px={10} w='100%'
                  alignItems='center'
                  sx={{ top: '30%' }}
                  position='absolute' >

                    <NewsletterSubscribe
                      inputProps={{
                        variant: 'filled', rounded: 'full',
                        size: 'lg', width: '100%',
                      mb: 2
                      }}
                      buttonProps={{
                        bgColor: 'brand.primary', color: 'white',
                        rounded: 'full', size: 'lg', maxW: 40, my: 'auto',
                        label: 'Let\'s go'
                      }} />

                </Stack>
              </Box>
              </form>
            </Sal>
          </Flex>
        </Section>

      <Section id='about' fullWidth>
        <Heading color='brand.darkGray' fontSize={['4xl', '4xl', '5xl', '6xl']} textAlign={['center', 'center', 'start', 'start']} py={[5, 10, 20]} fontWeight='bold' pb={14}>
            Your perfect holiday is just a few clicks away.
        </Heading>
        <Sal animation='slide-up'>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            initialSlide={0}
            breakpoints={{
              500: {
                slidesPerView: 1.7,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                initialSlide: 1,
                enabled: false
              },
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
              overflow: 'hidden',
              verticalAlign: 'middle',
            }}>
            <SwiperSlide >
              <CardStep stepNumber={1} imageSrc='/mocks/mock-1.png' title='Find the best deals end-to-end' subtitle="Less fees and frictions between you and your destination. Skip the middleman and avoid unnecessary booking steps." />
            </SwiperSlide>
            <SwiperSlide >
              <CardStep stepNumber={2} imageSrc='/mocks/mock-2.png' title='Plan your entire trip with Ollie' subtitle="Plan all your journey (transportation, accommodation and activities) in only one app. Enjoy more switch less." />
            </SwiperSlide>
            <SwiperSlide >
              <CardStep stepNumber={3} imageSrc='/mocks/mock-3.png' title='Save precious time while searching' subtitle="Get personalized itineraries based on your profile and previous trips in an ever-improving AI-based platform." />
            </SwiperSlide>
          </Swiper>
        </Sal>
        </Section>

      <Section>
        <Stack spacing={[16]}>
          <Sal animation='slide-left'>
            <Heading textAlign='center' size={['2xl', '2xl', '3xl']}>Travel <span style={{ color: theme.colors.brand.primary }}>more, for less</span> money</Heading>
          </Sal>

          <Sal animation='slide-up'>
            <Stack spacing={[10]} textAlign='center' alignItems='center'>
              <Heading size='md'>Other platforms are charging between 14% - 30% in booking fees.</Heading>
              <Center w='100%'>
                <FutureImage
                  priority
                  width={500}
                  height={500}
                  style={{
                    backgroundSize: '150% 150%',
                    maxWidth: '600px',
                    width: '100%',
                    height: '100%'
                  }}
                  src='/images/discount-comparison-mock.png'
                  alt='Phone price comparison'
                />
              </Center>
              <Heading size='lg'>How about <span style={{ fontWeight: 'bold', color: theme.colors.brand.primary }}>0% platform fee?</span></Heading>
              <Text maxW={600}>Be our VIP member to reduce your booking fees as low as 0% for a lifetime with our precious lifetime passes.</Text>
            </Stack>
          </Sal>
        </Stack>
      </Section>

      <Section fullWidth>
        <Sal animation='slide-up'>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            initialSlide={1}
            breakpoints={{
              500: {
                slidesPerView: 1.7,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                enabled: false
              },
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
              overflow: 'hidden',
              verticalAlign: 'middle',
            }}
          >
            {passes.map((pass, i) => (
              <SwiperSlide key={i}>
                <Box my={10}>
                  <CardPass title={pass.title} percentage={pass.percentage}
                    totalQuantity={pass.totalQuantity} highlighted={i === 1}
                    imageSrc={pass.imageSrc}
                    paymentLink={pass.paymentLink}
                    passPrice={pass.passPrice}
                    passDescription={pass.passDescription} />
                </Box>
              </SwiperSlide>
            ))}

          </Swiper>
        </Sal>

        </Section>

        <Section>
          <Flex direction='column' align='center' justify='center' width='100%' gap='80px'>
          <Heading textAlign='center' size={['3xl', '3xl', '4xl']}>One <span style={{ color: theme.colors.brand.primary }}>App</span> to rule them all!</Heading>
          <Box position='relative'>
            <FutureImage src='/mocks/mock-desktop.jpg' alt='desktop view of the app' width={1200} height={700} />
          </Box>
          </Flex>
        </Section>

      <Section id='partners'>
          <Flex direction='column' gap={20}>
            <Sal animation='slide-up' duration='2000'>
              <Heading size={['3xl', '3xl', '4xl']}>Your favorite Hotels on <span style={{ color: theme.colors.brand.primary }}>Ollie</span></Heading>
            </Sal>

          <Grid gap={[6, 8, 10]} templateColumns={['repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}>
              {hotels.map((hotel, i) => (
                <CardPartner key={i} src={hotel} />
              ))}
            </Grid>
          </Flex>
        </Section>

      <Section id='team'>
          <Flex direction={['column', 'column', 'row']} width='100%' align='flex-start' justify='space-between' gap={6}
          position='relative' pr={[10, 10, 15, 0]}>
            <Box maxW={300}>
              <Sal animation='slide-left'>
                <Heading fontWeight='semibold' size='2xl'>Ollie Creators</Heading>
              </Sal>
            </Box>
          <Stack spacing={8} className='scrollable-content'
            pr={2} >
              {creators.map((creator, i) => {
                const { name, position, description, imageSrc, linkedInUrl } = creator;
                return <CardCreator key={i} imageSrc={imageSrc} name={name} role={position} linkedInUrl={linkedInUrl} description={description} />;
              })}
              <Divider sx={{ border: '3px solid black' }} />
              <Box w='100%' minH='50px' bg='white' ></Box>
              <Box sx={{ pointerEvents: 'none' }} w='100%' h='300px' bgGradient='linear(to-t, white 20%, brand.transparent)' position="absolute" bottom={0} />
            </Stack>
          </Flex>
        </Section>

        <Section primaryBg
          style={{ borderRadius: '40px 40px 0 0' }}>
          <footer>
            <Flex color='white' width='100%s' gap={16}
            align='center' justify='center' w='100%'
            direction={['column', 'column', 'row']}>

            <Stack flex={[0, 0, 1]} display={['none', 'none', 'flex']}
              spacing={6} alignItems='end'>
              <Heading size='md'>Site map</Heading>
              {navLinks.map(link => <Link key={link.label}
                href={link.link}>{link.label}</Link>)}
            </Stack>

            <Stack flex='2' align='center' w='100%' maxW={500} spacing={7}>
                <Heading size='md'>Be the first!</Heading>
                <Text>Enter Your Details To Get Premium Bonuses</Text>

                <NewsletterSubscribe
                  inputProps={{
                    variant: 'filled', rounded: 'full',
                  size: 'lg', color: 'brand.mediumGray',
                  mb: [5, 5, 8],
                  _focus: { backgroundColor: 'white', color: 'brand.darkgray' }
                  }}
                  buttonProps={{
                    bgColor: 'brand.primary',
                    color: 'white', variant: 'outline',
                    rounded: 'full', size: 'lg', maxW: 40, my: 'auto', colorScheme: "whiteAlpha",
                    label: 'Get Bonuses'
                  }} />

            </Stack>

            <Stack flex={[0, 0, 1]} w='100%'
              alignItems={['center', 'center', 'flex-start']}
                spacing={6}>
                <Heading size='md'>Contact</Heading>
                <Text>Bucharest, RO</Text>
                <a href='mailto:aloha@ollieapp.travel' >
                  <span style={{ textDecoration: 'underline' }}>aloha@ollieapp.travel</span>
                </a>
                <HStack>
                <a href='https://www.linkedin.com/company/ollie-travel-engine/' target='_blank' rel="noreferrer" >
                    <Circle
                      bg='white'
                      color='brand.primary'
                      p={2}
                    ><FiLinkedin /></Circle>
                  </a>

                </HStack>
            </Stack>

            </Flex>
          </footer >
        </Section >

      </main>
  </>);
}

export default Home;
