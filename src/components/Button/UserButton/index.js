import { Anchor, Avatar, createStyles, Group, Text, UnstyledButton } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import Link from 'next/link'

// membuat style untuk komponen menggunakan hook createStyles dari mantine
const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.black,

    '&:hover': {
      backgroundColor: theme.colors.gray[0]
    }
  }
}))

export const UserButton = ({ image, name }) => {
  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes } = useStyles()

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw="bolder">
            {name}
          </Text>

          <Link href="/">
            <Anchor color="red" size="xs" fw="bold">
              Keluar
            </Anchor>
          </Link>
        </div>

        <IconChevronRight size={16} stroke={2.5} color="gray" />
      </Group>
    </UnstyledButton>
  )
}
