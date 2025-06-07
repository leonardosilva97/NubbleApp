import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Box, Text} from '@components';
import {AppStackParamList} from '@routes';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;
type PostBottomNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export function PostBottom({author, commentCount, text, id}: Props) {
  const commentText = getCommentText(commentCount);
  const navigation = useNavigation<PostBottomNavigationProp>();
  function navigateToPostScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  }
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          mt="s8"
          onPress={navigateToPostScreen}
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} cometários`;
  }
}
