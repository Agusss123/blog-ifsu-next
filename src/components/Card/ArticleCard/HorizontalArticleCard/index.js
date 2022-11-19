import { createStyles, Paper, Text, Title, Overlay } from '@mantine/core'
import Link from 'next/link'
import { DefaultButton } from '@/components/Buttons'

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
    zIndex: 10
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
  const { classes } = useStyles()

  return (
    <Paper shadow="md" p="md" radius="md" sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
      <Overlay
        gradient={`linear-gradient(180deg, rgba(0, 0, 0, 0.56) -7.13%, rgba(0, 0, 0, 0) 100%)`}
        radius="10px"
        zIndex={-1}
      />
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
  )
}
