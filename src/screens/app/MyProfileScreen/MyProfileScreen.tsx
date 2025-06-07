import React from 'react';

import {useAuthCredentials} from '@service';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        {name && <Text preset="headingLarge">{name}</Text>}
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
}
