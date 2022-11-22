import { fetcher } from '@services/fetcher'
import useSWR from 'swr'

// function untuk mengambil data dari api menggunakan hook useSWR
export const useFetcher = (params) => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
    meta: data?.meta
  }
}
