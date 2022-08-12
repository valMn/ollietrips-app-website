import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { creators } from '../data/creators';
import { Text, Box, Stack, Flex, Heading, Spacer, Divider } from '@chakra-ui/react';
import { Section, CardPass, CardStep, CardCreator } from "../components"; 

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ollie App - An all in one travel app for your dream holiday</title>
        <meta name="description" content="Homepage for Ollie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Section height={200} primaryBg>
        <h1 className={styles.title}>
            Welcome to <a href="#">OllieApp</a>
        </h1>
        </Section>

        <Section>
          <Text color='gray.700' fontSize='5xl' align='center'
            // maxWidth={580}
            fontWeight='bold' pb={14}>
            Your perfect holiday is just a few clicks away.
          </Text>
          <Stack direction='row' align='center' w='100%' spacing={10}>
            <CardStep stepNumber={1} imageSrc='/step-01.png' title='Find the best deals end-to-end' subtitle="Less fees and frictions between you and your destination. Skip the middleman and avoid unnecessary booking steps." />
            <CardStep stepNumber={2} imageSrc='/step-02.png' title='Plan your entire trip with Ollie' subtitle="Plan all your journey (transportation, accommodation and activities) in only one app. Enjoy more switch less." />
            <CardStep stepNumber={3} imageSrc='/step-03.png' title='Save pretious time while searching' subtitle="Get personalized itineraries based on your profile and previous trips in an ever-improving AI-based platform." />
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
          <Flex direction='row' width='100%' align='flex-start' justify='space-between'>
            <Box >
              <Heading>Ollie Creators</Heading>
            </Box>
            <Stack spacing={8} className='scrollable-content' pr={2}>
              {creators.map((creator, i) => (
                <CardCreator key={i} imageSrc={creator.imageSrc} name={creator.name} linkedInUrl={creator.linkedInUrl} description={creator.description} />
              ))}
              <Divider sx={{ border: '3px solid black' }} />
              <Box w='100%' minH='50px' bg='white' ></Box>
            </Stack>
            <Box sx={{ 'pointer-events': 'none' }} w='100%' h='300px' bgGradient='linear(to-t, white 20%, brand.transparent)' position="absolute" bottom={0} />
          </Flex>
        </Section>
      </main>
    </div>
  );
};

export default Home;
