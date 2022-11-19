export const omit = (obj, omitKey) => {
  return Object.keys(obj)
    .filter((key) => key != omitKey)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})
}
