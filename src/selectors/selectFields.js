// destructure object and return only needed fields default value is {} / empty object
export const selectField = ({ id, by, url, time, title } = {}) => ({
  id,
  by,
  url,
  time,
  title
})
