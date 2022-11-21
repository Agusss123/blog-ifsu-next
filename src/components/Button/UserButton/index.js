import { Anchor, Avatar, createStyles, Group, Text, UnstyledButton } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import Link from 'next/link'

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
  const { classes } = useStyles()

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw="bolder">
            {name}
          </Text>

          <Link href="/auth/logout">
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
