import type { NextPage } from 'next';
import Image from 'next/image';
import FutureImage from 'next/future/image';
import Head from 'next/head';
import { theme } from '../utils/theme';
import styles from '../styles/Home.module.css';
import { creators } from '../data/creators';
import { hotels } from '../data/hotels';
import { headerServices } from "../data/headerServices";
import { Text, Box, Stack, Flex, Heading, Divider, Center, Spacer, Input, Button } from '@chakra-ui/react';
import { Section, CardPass, CardStep, CardCreator, CardQuote, CardPartner, HeaderService, Sal } from "../components";
import sal, { Options } from 'sal.js';
import 'sal.js/dist/sal.css';
sal({ once: true } as Options);

const Home: NextPage = () => {
  return (

    <div className={styles.container}>

      <Head>
        <title>Ollie App - An all in one travel app for your dream holiday</title>
        <meta name="description" content="Homepage for Ollie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Section height={100} primaryBg>
        <h1 className={styles.title}>
            Welcome to <a href="#">OllieApp</a>
        </h1>
        </Section>

        <Section >
          <Box
            sx={{
              width: '100%', height: '100%',
              maskImage: 'url(/images/curve-mask.png)',
              maskSize: '100% 100%'
            }}>
            <Flex width='100%' height='100%'
              justifyContent='center' gap={4}
            >
              {headerServices.map((service, i) => <HeaderService key={i} imageSrc={service.imageSrc} label={service.label} />)}
            </Flex>
          </Box>
        </Section>

        <Section primaryBg hero>
          <Flex direction='row'
            justifyContent='space-between'>

            <Flex direction='column'
              maxW={400} color='white' h='auto' align='center' justify='center'>
              <Heading size='lg' pb={10}>Just join now and start saving tomorrow!</Heading >
              <Text >Be one of our first users. The first 2000 travelers who subscribes to our waiting list will receive <span style={{ fontWeight: 'bold' }}>PREMIUM</span> benefits</Text>
            </Flex>
            <Sal animation='slide-up'>
              <Box
                style={{
                  position: 'relative',
                  bottom: -48,
                  height: '100%',
                  maxWidth: 400
                }}
              >
                <Image src='/images/iphone-outline.svg' alt='Iphone 13 outline'
                  width={400} height={450}
                />
                <Stack spacing={5} px={20} alignItems='center'
                  sx={{ top: '35%' }}
                  position='absolute' >
                  <Input placeholder='First Name' variant='filled' size='lg' />
                  <Input placeholder='Email' variant='filled' size='lg' type='email' />
                  <Button bgColor='brand.primary'
                    color='white'
                    size='lg'
                    maxW={40}>{`Let's go`}</Button>
                </Stack>
              </Box>
            </Sal>
          </Flex>
        </Section>

        <Section>
          <Text color='brand.darkGray' fontSize='5xl' align='center'
            fontWeight='bold' pb={14}>
            Your perfect holiday is just a few clicks away.
          </Text>
          <Stack direction='row' align='center' w='100%' spacing={10}>
            <CardStep stepNumber={1} imageSrc='/mocks/mock-1.png' title='Find the best deals end-to-end' subtitle="Less fees and frictions between you and your destination. Skip the middleman and avoid unnecessary booking steps." />
            <CardStep stepNumber={2} imageSrc='/mocks/mock-2.png' title='Plan your entire trip with Ollie' subtitle="Plan all your journey (transportation, accommodation and activities) in only one app. Enjoy more switch less." />
            <CardStep stepNumber={3} imageSrc='/mocks/mock-3.png' title='Save pretious time while searching' subtitle="Get personalized itineraries based on your profile and previous trips in an ever-improving AI-based platform." />
          </Stack>
        </Section>

        <Section>
          <Flex>
            <Heading size='4xl' color='brand.darkGray' flex='2'>Travel more, for less money</Heading>
            <Box flex='1'></Box>
          </Flex>
        </Section>

        <Section>
          <Flex justifyContent='center'>
            <CardQuote p='20'>
              <Heading size='md' pb='10'>Other booking platforms are charging between 14% and 30% booking fees. </Heading >
              <Text>Be our VIP user and reduce your booking fees to as low as 0%. For a lifetime. With our precious Lifetime Passes.</Text>
            </CardQuote>
          </Flex>
        </Section>

        <Section>
          <Stack align='center'>
            <Heading size='4xl' fontWeight='medium'>So what about <Sal inline animation='zoom-out' duration='2000' style={{ fontSize: 110, color: theme.colors.brand.darkGray, fontWeight: 'bold' }}>0%</Sal></Heading> <br />
            <Heading size='4xl' fontWeight='medium'>platform fees?</Heading>
          </Stack>
        </Section>


        <Section>
          <Stack direction="row" w='100%' align='center' justify='center' spacing={10}>
            <CardPass title="Gold Pass" percentage={5} totalQuantity={500} restQuantity={115} ctaLink="#" />
            <CardPass title="Deluxe Pass" percentage={0} totalQuantity={100} restQuantity={37} ctaLink="#" highlighted />
            <CardPass title="Pro Pass" percentage={7} totalQuantity={1000} restQuantity={340} ctaLink="#" />
          </Stack>
        </Section>

        <Section>
          <Flex>
            <Box flex='3'>
              <Sal animation='slide-left' inline>
              <Heading size="3xl">
                {`You're still not sure?`}
                </Heading>
              </Sal>
            </Box>
            <Stack flex='2'>
              <Heading size='md' pb='4'>How much can you save with our Lifetime Passes? </Heading >
              <Sal animation='slide-right' inline>
              <Text>{`Let’s imagine that you are spending around €2000 on travel in a year:
                While another booking platforms are charging between 14% and 30% booking fees, Ollie only charges 11-12%.
                If you use the Ollie free account you are saving on average €100 on your annual plan.`}
              </Text>
              </Sal>
            </Stack>
          </Flex>
        </Section>

        <Section>
          <Flex>
            <Heading size='2xl' color='brand.darkGray' flex='5'>It’s not an idea anymore.<br />
              Starts to look like the future.
            </Heading>
            <Box flex='2'></Box>
          </Flex>
        </Section>

        <Section>
          <Flex justifyContent='center'>
            <CardQuote p='20'>
              <Text>{`You don't need 100 apps to check the best travel deals, you only need one. `}</Text>
              <Heading size='md' pt='2'>Ollie</Heading >
            </CardQuote>
          </Flex>
        </Section>

        <Section>
          <Flex direction='column' gap='80px'>
            <Heading size="4xl">One <span style={{ color: theme.colors.brand.primary }}>App</span> to rule them all!</Heading>
            <Image src='/mocks/mock-desktop.png' alt='desktop view of the app' width={1200} height={700} />
          </Flex>
        </Section>

        <Section>
          <Flex direction='column' gap={20}>
            <Sal animation='slide-up' duration='2000'>
              <Heading size="4xl">Your favorite Hotels on <span style={{ color: theme.colors.brand.primary }}>Ollie</span></Heading>
            </Sal>
            <Flex alignItems='center'
              justifyContent='center' style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {hotels.map((hotel, i) => (
              <CardPartner key={i} src={hotel} />
            ))}
          </Flex>
          </Flex>
        </Section>

        <Section>
          <Flex direction='row' width='100%' align='flex-start' justify='space-between'
            position='relative'>
            <Box >
              <Sal animation='slide-left'>
              <Heading>Ollie Creators</Heading>
              </Sal>
            </Box>
            <Stack spacing={8} className='scrollable-content' pr={2}>
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

      </main>
    </div>
  );
};

export default Home;
