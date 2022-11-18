import { AppShell } from '@mantine/core'
import { DefaultHeader } from '@/components/Header'

export const Container = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          padding: '0px'
        }
      }}
      px={50}
      fixed
      header={<DefaultHeader />}>
      {children}
    </AppShell>
  )
}
