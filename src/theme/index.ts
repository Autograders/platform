import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';

const theme = extendTheme(
  {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts,
    colors,
    shadows,
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

export default theme;
