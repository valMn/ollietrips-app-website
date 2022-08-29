import * as React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  height?: number;
  primaryBg?: boolean;
  hero?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = ({ height,
  primaryBg = false, hero = false, fullWidth = false,
  id, rounded = false, children, style, ...rest }) => {
  return (
    <Box bg={primaryBg ? 'brand.primary' : ''}
      w='100vw' py={hero ? 15 : [10, 12, 14]}
      px={fullWidth ? 0 : [4, 6, 8, 10]} id={id}
      scrollSnapAlign='start'
      borderRadius={rounded ? ['40px', '40px', 0] : ''}
      sx={{
        ...style
      }}
      {...rest}
    >
      <Box mx='auto' w='100%' maxW={1080} h={height}  >
        {children}
      </Box>
    </Box>
  );
};
