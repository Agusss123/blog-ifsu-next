import { DefaultLogo } from '@/components/Icons'
import { Box, Button, Group, Header, Text } from '@mantine/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Link = ({ title, href }) => {
  // ambil router dari next
  const router = useRouter()

  // jika href sama dengan router maka set sebagai aktip
  const active = router?.asPath == href
  return (
    <NextLink href={href}>
      <Button
        as="a"
        variant="subtle"
        px={10}
        // sx props global style dari mantine untuk mengambil style dari global component mantine
        sx={(theme) => ({
          backgroundColor: 'transparent',
          // contonh nya mengambil style dari global component color
          color: theme.colors.gray[7],
          fontWeight: active ? 700 : 400,
          '&:hover': { backgroundColor: 'transparent' }
        })}>
        {title}
      </Button>
    </NextLink>
  )
}

// dummy data untuk header
const dataLinks = [
  {
    title: 'Home',
    href: '/'
  }
]

export const DefaultHeader = ({ withLink = true }) => {
  return (
    <Box position="fixed">
      <Header height={70} px={70}>
        <Group position="apart" sx={{ height: '100%' }}>
          <NextLink href="/">
            <Group align="center" position="center" spacing="xs">
              <DefaultLogo />
              <Text mt={1} weight={800}>
                Vinyles
              </Text>
            </Group>
          </NextLink>

          {withLink && (
            <Group spacing="xs">
              {dataLinks.map((link, index) => (
                <Link key={index} href={link.href} title={link.title} />
              ))}
            </Group>
          )}
        </Group>
      </Header>
    </Box>
  )
}
