import { AppShell } from "@mantine/core"

export const Container = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
          padding: "0px",
        },
      }}
      fixed
    >
      {children}
    </AppShell>
  )
}
