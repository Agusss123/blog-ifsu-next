import { Button, createStyles, Text } from '@mantine/core'
import Link from 'next/link'

export const DefaultButton = ({ text, varian = 'primary', url, size = 'md', rounded = 'md', external }) => {
  // membuat style untuk komponen menggunakan hook createStyles dari mantine
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

  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes } = useStyles()
  // jika eksternal benar, buka tautan di tab baru
  if (external) {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        <Button variant={varian} size={size} radius={rounded} className={classes.button}>
          <Text mt={1}>{text}</Text>
        </Button>
      </a>
    )
  }

  // jika url tidak kosong, buka tautan menggunakan next/link
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

  // jika bukan kedua diatas kembalikan sebagai button biasa
  return (
    <Button variant={varian} radius={rounded} size={size} className={classes.button}>
      <Text mt={1}>{text}</Text>
    </Button>
  )
}
