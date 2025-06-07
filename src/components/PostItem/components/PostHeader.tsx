import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Box, ProfileAvatar, Text} from '@components';
import {AppStackParamList} from '@routes';

type Props = Pick<Post, 'author'>;
type PostHeaderNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation<PostHeaderNavigationProp>();

  function navigationToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigationToProfile}>
      <Box flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={author.profileURL} />

        <Text preset="paragraphMedium" semiBold ml="s12">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
