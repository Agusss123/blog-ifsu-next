import { createStyles, Pagination } from '@mantine/core'

// membuat style untuk komponen menggunakan hook createStyles dari mantine
const useStyles = createStyles(() => ({
  pagination: {
    button: {
      //   sembunyikan nomor pada paginasi
      '&:not(:first-of-type):not(:last-child)': {
        display: 'none'
      }
    }
  }
}))
export const Paginations = ({ page, onChange, total, size = 'md', position = 'center' }) => {
  // memanggil hook createStyles dan menyimpannya ke dalam variable classes
  const { classes } = useStyles()
  return (
    <Pagination
      page={page}
      onChange={onChange}
      total={total}
      position={position}
      className={classes?.pagination}
      size={size}
    />
  )
}
