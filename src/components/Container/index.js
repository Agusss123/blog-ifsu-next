import { AppShell } from '@mantine/core'
import { DefaultHeader } from '@/components/Header'
import { DefaultFooter } from '@/components/Footer'
import { Fragment } from 'react'

// Wrapp all pages with AppShell for consistent layout
export const Container = ({ children, withHeader = true, withFooter = true }) => {
  return (
    <Fragment>
      <AppShell
        styles={{
          main: {
            padding: '0px',
            position: 'relative'
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
