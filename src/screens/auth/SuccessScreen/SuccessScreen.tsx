import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon} from '@components';
import {Text, Screen, Button} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        onPress={goBackToBegin}
        title="Voltar ao inicio"
        marginTop="s40"
      />
    </Screen>
  );
}
