import { createStyles, Pagination } from '@mantine/core'

const useStyles = createStyles(() => ({
  pagination: {
    button: {
      //   hide number in pagination
      '&:not(:first-of-type):not(:last-child)': {
        display: 'none'
      }
    }
  }
}))
export const Paginations = ({ page, onChange, total, size = 'md', position = 'center' }) => {
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
