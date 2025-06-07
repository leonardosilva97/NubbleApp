import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNexPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({fetchNexPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNexPage}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
