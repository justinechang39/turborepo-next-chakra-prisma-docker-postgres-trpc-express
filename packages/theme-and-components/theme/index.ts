import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import { styles } from './styles';

// Foundational style overrides
import colors from './foundation/colors';

// Component style overrides
import Button from './components/button';

const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {
    Button
    // Other components go here
  }
};

export const theme = extendTheme(overrides);
