import * as React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  height?: number;
  primaryBg?: boolean;
  hero?: boolean;
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = ({ height, primaryBg = false, hero = false, children, ...props }) => {
  return (
    <Box bg={primaryBg ? 'brand.primary' : ''}
      w='100%' py={hero ? 10 : 20}
      px={hero ? 0 : 5}
    >
      <section>
      <Box mx='auto' maxW={1080} h={height} >
        {children}
      </Box>
      </section>
    </Box>
  );
};
