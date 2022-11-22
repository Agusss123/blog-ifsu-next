import { UserButton } from '@/components/Button'
import { createStyles, Navbar } from '@mantine/core'
import { IconFeather } from '@tabler/icons'
import { useState } from 'react'

// membuat style untuk komponen menggunakan hook createStyles dari mantine
const useStyles = createStyles((theme, _params, getRef) => {
  // getRef adalah fungsi yang mengembalikan ref untuk elemen tersebut
  const icon = getRef('icon')
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colors.gray[2]}`
    },

    footer: {
      paddingTop: theme.spacing.sm,
      borderTop: `1px solid ${theme.colors.gray[2]}`
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black
        }
      }
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
      marginRight: theme.spacing.sm
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
        }
      }
    }
  }
})

export const NavbarSimple = () => {
  // dummy data untuk sidebar
  const data = [{ link: '', label: 'Post', icon: IconFeather }]

  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes, cx } = useStyles()

  // state untuk menampung link yang sedang aktip
  const [active, setActive] = useState('Post')

  // variable untuk perulangan data dari dummy data
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // saat link di klik maka akan menampung link yang sedang aktip dan tidak akan melakukan refresh
        event.preventDefault()
        setActive(item.label)
      }}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Navbar height="90vh" width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="John Doe"
        />
      </Navbar.Section>
    </Navbar>
  )
}
