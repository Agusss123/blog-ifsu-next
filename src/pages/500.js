import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.gray[2]
  },

  description: {
    maxWidth: 700,
    fontWeight: 900,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    fontSize: 30
  }
}))
const ErrorPage = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Terjadi kesalahan pada server, silahkan coba beberapa saat lagi.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button variant="subtle" size="md">
              Kembali ke Beranda
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  )
}

export default ErrorPage
