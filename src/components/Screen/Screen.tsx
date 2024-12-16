import React from 'react';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {UseAppTheme, useAppSafeArea} from '@hooks';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrolable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrolable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const Container = scrolable ? ScrollViewContainer : ViewContainer;
  const {colors} = UseAppTheme();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
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
