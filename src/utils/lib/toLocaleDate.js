const default_options = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' }

export const toLocaleDate = (date, lang = 'id', options) => {
  const opts = { ...default_options, ...options }
  if (new Date(date)) {
    const dateString = new Date(date).toLocaleDateString(lang, opts)
    return dateString
  } else {
    return date.toString()
  }
}
