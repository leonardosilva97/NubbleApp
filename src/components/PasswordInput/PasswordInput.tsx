import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecuryTextEntry, setIsSecuryTxtEntry] = useState(true);
  function toggleSecureTextEntry() {
    setIsSecuryTxtEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecuryTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecuryTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
