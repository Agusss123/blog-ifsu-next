import { AppShell } from '@mantine/core'

export const Container = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: '#FFFFFF',
          padding: '10px'
        }
      }}
      fixed>
      {children}
    </AppShell>
  )
}
