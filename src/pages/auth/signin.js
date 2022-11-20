import { Anchor, Button, Checkbox, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import Link from 'next/link'

const SigninPage = () => {
  return (
    <Container size={420} my={100}>
      <Title align="center" fw="bold">
        Masuk
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Belum memiliki akun ? &nbsp;
        <Link href="/auth/signup">
          <Anchor size="sm">Daftar</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Email" required />
        <PasswordInput label="Password" placeholder="Password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
        </Group>
        <Button fullWidth mt="xl">
          Masuk
        </Button>
      </Paper>
    </Container>
  )
}

export default SigninPage
