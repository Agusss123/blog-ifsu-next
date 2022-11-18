import { DefaultButton } from '@/components/Buttons'
import { DefaultLogo } from '@/components/Icons'
import { Box, Group, Button, Header, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const Link = ({ title, href }) => {
  const router = useRouter()
  const active = router?.asPath == href
  return (
    // sx hover in button backgruond none
    <NextLink href={href}>
      <Button
        as="a"
        variant="subtle"
        px={10}
        sx={(theme) => ({
          backgroundColor: 'transparent',
          color: theme.colors.gray[7],
          fontWeight: active ? 700 : 400,
          '&:hover': { backgroundColor: 'transparent' }
        })}>
        {title}
      </Button>
    </NextLink>
  )
}

const dataLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Tutorial',
    href: '/tutorial'
  },
  {
    title: 'Buku',
    href: '/buku'
  }
]

export const DefaultHeader = () => {
  return (
    // added postion fixed to box
    <Box position="fixed">
      <Header height={70} px={50}>
        <Group position="apart" sx={{ height: '100%' }}>
          <Group align="center" position="center" spacing="xs">
            <DefaultLogo />
            <Text mt={1} weight={800}>
              Vinyles
            </Text>
          </Group>

          <Group spacing="xs">
            {dataLinks.map((link, index) => (
              <Link key={index} href={link.href} title={link.title} />
            ))}
            <DefaultButton text="Join Newsletter" radius="md" varian="secondary" />
          </Group>
        </Group>
      </Header>
    </Box>
  )
}
