import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../utils/theme';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/800.css';
import { extendTheme } from "@chakra-ui/react";


const customTheme = extendTheme({
  ...theme
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} >
    <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
