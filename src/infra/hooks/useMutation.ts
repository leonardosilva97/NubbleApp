import {useState} from 'react';

export interface MutationsOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @deprecated use useMutation from `@tanstsck/react-query`
 */

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationsOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await mutationFn(variables);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
