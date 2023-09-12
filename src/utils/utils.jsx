export const doubleDigitTime = (time) => {
  return time.length < 2 ? `0${time}` : time
}

export const to24HourFormat = (date) => {
  return `${doubleDigitTime(date.getHours())}:${doubleDigitTime(
    date.getMinutes()
  )}`
}

export const currentTime = (offset, unix = '') => {
  const date = currentDate(offset, unix)
  return `${doubleDigitTime(date.getHours())}:${doubleDigitTime(
    date.getMinutes()
  )}`
}

export const currentDate = (offset, unix = '') => {
  const d = unix !== '' ? new Date(unix * 1000) : new Date()
  const localTime = d.getTime()
  const localOffset = d.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  const date = new Date(utc + 1000 * offset)
  return date
}

export const filterResults = (arr, max) => {
  const filtered = arr.filter(
    function (item) {
      if (this.count < max) {
        this.count++
        return true
      }
      return false
    },
    { count: 0 }
  )
  return filtered
}