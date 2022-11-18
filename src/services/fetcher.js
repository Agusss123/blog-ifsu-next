import api from '@services/api'

export const fetcher = (url, config) => {
  if (!url) return null
  return api
    .get(url, config)
    .then((res) => {
      return res.data
    })
    .catch(() => null)
}
