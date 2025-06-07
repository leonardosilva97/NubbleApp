import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import {UseAppTheme} from '@hooks';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = UseAppTheme();
  function focusInput() {
    inputRef.current?.focus();
  }

  const senIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray1}
          style={[$textInputStyle, {color: colors.gray1}]}
          value={value}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={senIsDisabled}
          onPress={() => {
            if (value) {
              onPressSend(value);
            }
          }}>
          <Text color={senIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
