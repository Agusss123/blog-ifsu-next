import { AppShell } from '@mantine/core'
import { DefaultHeader } from '@/components/Header'
import { DefaultFooter } from '@/components/Footer'
import { Fragment } from 'react'

// Wrapp all pages with AppShell for consistent layout
export const Layout = ({ children, withHeader, withFooter }) => {
  return (
    <Fragment>
      <AppShell
        styles={{
          main: {
            padding: '0px'
          }
        }}
        px={70}
        header={withHeader && <DefaultHeader />}>
        {children}
      </AppShell>
      {withFooter && <DefaultFooter />}
    </Fragment>
  )
}
