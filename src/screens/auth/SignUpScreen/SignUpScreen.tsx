import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
// import {RootStackParamList} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';
// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen() {
  // const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrolable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Seu username"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullname"
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
