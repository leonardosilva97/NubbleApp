import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function LoginSScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text marginBottom="s40" preset="paragraphLarge">
          {' '}
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          boxProps={{mb: 's20'}}
          label="E-mail"
          errorMessage="mensagem de erro"
          placeholder="Digite seu e-mail"
        />

        <TextInput
          boxProps={{mb: 's10'}}
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon name="eyeOn" color="gray2" />}
        />

        <Text color="primary" preset="paragraphSmall" bold mt="s10">
          Esqueci minha senha
        </Text>

        <Button mt="s48" title="Entrar" />
        <Button mt="s12" title="Criar uma conta" preset="outline" />
      </View>
    </SafeAreaView>
  );
}
