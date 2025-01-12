import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Icon, Text, BoxProps} from '@components';
import {UseAppTheme, useAppSafeArea} from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrolable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrolable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const Container = scrolable ? ScrollViewContainer : ViewContainer;
  const {colors} = UseAppTheme();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              marginBottom="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
