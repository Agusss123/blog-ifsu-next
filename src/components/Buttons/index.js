import { Button, Text } from '@mantine/core'
import { createStyles } from '@mantine/core'

export const DefaultButton = ({ text, varian = 'primary', url, size = 'md', rounded = 'md', external, ...rest }) => {
  // custom styles for button
  const useStyles = createStyles((theme) => ({
    button: {
      backgroundColor: theme.colors.blue[6],
      color: theme.colors.white
    }
  }))

  const { classes } = useStyles()
  // if external is true, open link in new tab
  if (external) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
        <Button variant={varian} size={size} radius={rounded} className={classes.button}>
          <Text mt={1}>{text}</Text>
        </Button>
      </a>
    )
  }

  // if has url, use next/link
  if (url) {
    return (
      <Button variant={varian} size={size} radius={rounded} {...rest} className={classes.button}>
        <Text mt={1}>{text}</Text>
      </Button>
    )
  }

  // else return default button
  return (
    <Button variant={varian} radius={rounded} size={size} {...rest} className={classes.button}>
      <Text mt={1}>{text}</Text>
    </Button>
  )
}
