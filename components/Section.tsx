import * as React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  height?: number;
  primaryBg?: boolean;
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = ({ height, primaryBg = false, children, ...props }) => {
  return (
    <Box bg={primaryBg ? 'brand.primary' : ''} w='100%' py={20}>
      <section>
      <Box mx='auto' maxW={1080} h={height} >
        {children}
      </Box>
      </section>
    </Box>
  );
};
