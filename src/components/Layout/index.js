import { DefaultFooter } from '@/components/Footer'
import { DefaultHeader } from '@/components/Header'
import { AppShell } from '@mantine/core'
import { Fragment } from 'react'

// Bungkus semua halaman dengan AppShell untuk tata letak yang konsisten
export const Layout = ({ children, withHeader, withFooter, withoutPadding = false }) => {
  return (
    <Fragment>
      <AppShell
        styles={{
          main: {
            padding: '0px'
          }
        }}
        px={withoutPadding ? withoutPadding : 70}
        header={withHeader && <DefaultHeader />}>
        {children}
      </AppShell>
      {withFooter && <DefaultFooter />}
    </Fragment>
  )
}
