import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    //TODO: implement like post here
  }
  function navigateToComment() {
    //TODO: implement navigate comment here
  }
  function favoritePost() {
    //TODO: implement favorite post here
  }
  return (
    <Box mt="s16" flexDirection="row">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        onPress={navigateToComment}
        text={commentCount}
      />
      <Item
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
        onPress={onPress}
        alignItems="center"
        marginRight="s24"
        flexDirection="row">
        <Icon
          color={marked ? 'marked' : undefined}
          name={marked ? icon.marked : icon.default}
        />
        {text > 0 && (
          <Text preset="paragraphSmall" bold ml="s4">
            {text}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}
