import { Card, createStyles, Image, Text } from '@mantine/core'
import { toLocaleDate } from '@utils/lib/toLocaleDate'
import Link from 'next/link'

// membuat style untuk komponen menggunakan hook createStyles dari mantine
const useStyles = createStyles(() => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      img: {
        filter: 'grayScale(100%)'
      }
    }
  }
}))

export const VerticalArticleCard = ({ title, image, date, link }) => {
  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes } = useStyles()
  return (
    <Link href={link}>
      <Card radius="md" py={10} px={0} m={0} className={classes.card} component="a" href={link}>
        <Image src={image} radius="md" height={374} />
        <Text color="gray.7" size="xs" transform="uppercase" weight={600} mt="md">
          {toLocaleDate(date)}
        </Text>
        <Text color="gray.9" weight={700} lineClamp={2} size={18}>
          {title}
        </Text>
      </Card>
    </Link>
  )
}
