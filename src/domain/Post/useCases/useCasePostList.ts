import {Post, postService} from '@domain';
import {usePaginatedList} from '@infra';

export function usePostList() {
  return usePaginatedList<Post>(['repoData'], postService.getList);
}
