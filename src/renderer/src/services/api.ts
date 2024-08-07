/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient, DefinedUseQueryResult } from '@tanstack/react-query'

export const useApiGet = (queryKey: unknown[], queryFn: any, options: any): DefinedUseQueryResult =>
  useQuery({
    queryKey,
    queryFn,
    ...options
  })

export const useApiSend = (
  mutationFn: () => void,
  success: (data: unknown) => void,
  error: (error: unknown) => void,
  invalidateKey: any[],
  options
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      invalidateKey &&
        invalidateKey.forEach((key) => {
          queryClient.invalidateQueries(key)
        })
      success && success(data)
    },
    onError: error,
    retry: 2,
    ...options
  })
}
