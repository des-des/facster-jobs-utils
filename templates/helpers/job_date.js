const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

module.exports = date => {
  const month = months[date.month-1]

  return `${month} ${date.year}`
}
