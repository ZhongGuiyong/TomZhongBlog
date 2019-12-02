export default (...arg) => {
  const queryObj = arg[0] || {}
  let query = '?'
  Object.keys(queryObj).forEach(key => {
    if (queryObj[key] && queryObj[key] !== '') {
      query += key + '=' + queryObj[key] + '&'
    }
  })

  if (query.lastIndexOf('&') !== -1) {
    query = query.slice(0, -1)
  }
  return query || ''
}
