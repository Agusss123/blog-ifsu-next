import { fetcher } from '@services/fetcher'
import useSWR from 'swr'

export const useFetcher = (params) => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
    meta: data?.meta
  }
}
