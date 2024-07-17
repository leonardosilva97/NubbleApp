import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPressets} from './ButtonPressets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled = false,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPresset =
    buttonPressets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      // backgroundColor="buttonPrimary"
      disabled={disabled || loading}
      paddingHorizontal={'s20'}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPresset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPresset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPresset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
