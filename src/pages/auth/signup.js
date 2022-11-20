import { Anchor, Button, Checkbox, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import Link from 'next/link'

const SignupPage = () => {
  return (
    <Container size={420} h="100%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Title align="center" fw="bold">
        Buat Akun
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Sudah memiliki akun ? &nbsp;
        <Link href="/auth/signin">
          <Anchor size="sm">Masuk</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={20} radius="md">
        <TextInput label="Email" placeholder="Email" required />
        <PasswordInput label="Password" placeholder="Password" required mt="md" />
        <PasswordInput label="Ulangi Password" placeholder="Password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
        </Group>
        <Button fullWidth mt="xl">
          Buat Akun
        </Button>
        <Text color="dimmed" size="sm" mt={5}>
          By clicking continue, you agree to our
          <Link href={'/auth/signup'}>
            <Anchor> Term of Service </Anchor>
          </Link>
          and
          <Link href={'/auth/signup'}>
            <Anchor> Privacy Policy</Anchor>
          </Link>
        </Text>
      </Paper>
    </Container>
  )
}

export default SignupPage
