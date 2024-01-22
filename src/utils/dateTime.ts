export const epochs: [string, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

export const getDuration = (timeAgoInSeconds: number) => {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds)
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name
      }
    }
  }
  return {
    interval: 0,
    epoch: 'second'
  }
}

export const timeAgo = (date: number) => {
  const timeAgoInSeconds = Math.floor(
    (new Date().valueOf() - new Date(date).valueOf()) / 1000
  )
  const { interval, epoch } = getDuration(timeAgoInSeconds)
  const suffix = interval === 1 ? '' : 's'
  return `${interval} ${epoch}${suffix} ago`
}

// Inspired by: https://stackoverflow.com/a/19691491
export function addDays(date: Date, days: number) {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
