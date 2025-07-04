import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');

  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  const handleSendComment = (text: string) => {
    if (text.trim()) {
      createComment(text);
      setMessage('');
    }
  };

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      value={message}
      onChangeText={setMessage}
      onPressSend={handleSendComment}
    />
  );
}
