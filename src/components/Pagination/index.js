import { createStyles, Pagination } from '@mantine/core'

const useStyles = createStyles(() => ({
  pagination: {
    button: {
      //   hide number in pagination
      '&:not(:first-child):not(:last-child)': {
        display: 'none'
      }
    }
  }
}))
export const Paginations = ({ page, onChange, total, size = 'md' }) => {
  const { classes } = useStyles()
  return (
    <Pagination
      page={page}
      onChange={onChange}
      total={total}
      position="center"
      className={classes?.pagination}
      size={size}
    />
  )
}
