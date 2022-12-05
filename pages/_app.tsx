import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../utils/theme';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/800.css';
import { extendTheme } from "@chakra-ui/react";
import { useEffect } from "react";
import TagManager from 'react-gtm-module';


const customTheme = extendTheme({
  ...theme
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-01BP4JBXDM' });
  }, []);

  return (
    <ChakraProvider theme={customTheme} >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
