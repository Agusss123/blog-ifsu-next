import { Button, createStyles, Text } from '@mantine/core'
import Link from 'next/link'

export const DefaultButton = ({
  text,
  varian = 'primary',
  url,
  size = 'md',
  rounded = 'md',
  external,
  nextBlog,
  prevBlog
}) => {
  // custom styles for button
  const useStyles = createStyles((theme) => {
    switch (varian) {
      case 'primary':
        return {
          button: {
            backgroundColor: theme.colors.blue[6],
            color: theme.colors.white
          }
        }
      case 'secondary':
        return {
          button: {
            backgroundColor: theme.colors.gray[0],
            color: theme.colors.gray[7],
            '&:hover': {
              backgroundColor: theme.colors.gray[3]
            }
          }
        }

      default:
        return {
          button: {
            backgroundColor: theme.colors.blue[6],
            color: theme.colors.white
          }
        }
    }
  })

  const { classes } = useStyles()
  // if external is true, open link in new tab
  if (external) {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        <Button variant={varian} size={size} radius={rounded} className={classes.button}>
          <Text mt={1}>{text}</Text>
        </Button>
      </a>
    )
  }

  // if has url
  if (url) {
    return (
      <Link href={url}>
        <a>
          <Button variant={varian} size={size} radius={rounded} className={classes.button}>
            <Text mt={1}>{text}</Text>
          </Button>
        </a>
      </Link>
    )
  }

  // else return default button
  return (
    <Button variant={varian} radius={rounded} size={size} className={classes.button}>
      <Text mt={1}>{text}</Text>
    </Button>
  )
}
