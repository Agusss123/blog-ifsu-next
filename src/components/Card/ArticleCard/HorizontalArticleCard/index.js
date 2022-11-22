import { DefaultButton } from '@/components/Button'
import { Box, createStyles, Paper, Text, Title } from '@mantine/core'

// membuat style untuk komponen menggunakan hook createStyles dari mantine
const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: 414,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 10,
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.56) -7.13%, rgba(0, 0, 0, 0) 100%)',
      zIndex: -1,
      borderRadius: theme.radius.sm
    }
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    zIndex: 10
  },

  category: {
    color: theme.white,
    fontWeight: 700,
    textTransform: 'uppercase',
    zIndex: 10
  }
}))

export const HorizontalArticleCard = ({ image, title, category, link }) => {
  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes } = useStyles()

  return (
    <Box maw="100%">
      <Paper shadow="md" radius="md" sx={{ backgroundImage: `url(${image})` }} className={classes?.card} p="10%">
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title} lineClamp={3}>
            {title}
          </Title>
        </div>
        <DefaultButton text="Read article" varian="secondary" url={link} />
      </Paper>
    </Box>
  )
}
