import React from 'react';

import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text preset="headingLarge" italic>
            Hello World!!
          </Text>

          <Icon name="eyeOn" color="carrotSecondary" size={30} />
          <Icon name="eyeOff" color="buttonPrimary" size={200} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
