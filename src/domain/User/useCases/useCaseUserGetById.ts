import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../UserService';

export function useUserGetById(id: number) {
  const {
    data: user,
    error,
    isLoading: loading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30,
  });

  return {
    refetch,
    isFetching,
    user,
    error,
    loading,
  };
}
