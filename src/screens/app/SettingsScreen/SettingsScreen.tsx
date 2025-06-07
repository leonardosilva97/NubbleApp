import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {signOut, isLoading} = useAuthSignOut();
  return (
    <Screen canGoBack title="Configurações">
      <Button
        marginTop="s24"
        title="Sair da conta"
        onPress={signOut}
        disabled={isLoading}
      />
    </Screen>
  );
}
