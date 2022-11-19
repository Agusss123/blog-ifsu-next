import { DribbleIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '@/components/Icons'
import { ActionIcon, Group, Text } from '@mantine/core'

export const DefaultFooter = () => {
  return (
    <Group position="apart" spacing="xl" px={70} bg="gray.1" py="xl">
      <Text fw="normal" size="md" color="gray.6">
        © 2022 Design, Inc. All rights reserved.
      </Text>
      <Group spacing="md" position="right" noWrap>
        <ActionIcon size="lg">
          <FacebookIcon />
        </ActionIcon>
        <ActionIcon size="lg">
          <InstagramIcon />
        </ActionIcon>
        <ActionIcon size="lg">
          <TwitterIcon />
        </ActionIcon>
        <ActionIcon size="lg">
          <GithubIcon />
        </ActionIcon>
        <ActionIcon size="lg">
          <DribbleIcon />
        </ActionIcon>
      </Group>
    </Group>
  )
}
