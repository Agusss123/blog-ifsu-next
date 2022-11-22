import { completeNavigationProgress, NavigationProgress, startNavigationProgress } from '@mantine/nprogress'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const RouterTransition = () => {
  // ambil router dari next
  const router = useRouter()

  // ketika router berubah maka jalankan fungsi
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && startNavigationProgress()
    const handleComplete = () => completeNavigationProgress()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.asPath, router.events])

  return <NavigationProgress autoReset={true} />
}
