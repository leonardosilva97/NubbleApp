import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {LoginSScreen} from './src/screens/auth/LoginScreen/LoginScreen';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginSScreen />
    </ThemeProvider>
  );
}

export default App;
