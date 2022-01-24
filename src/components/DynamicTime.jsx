import { useEffect, useState } from 'react'

const DynamicTime = (props) => {
  let { timeZoneInfo } = props

  const [timeString, setTimeString] = useState('00:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  function update() {
    let date = new Date()
    setTimeString(date.toLocaleTimeString('sv-SE', { timeZone: timeZoneInfo.timezone }))
  }

  return (
    <>{timeString}</>
  )
}

export default DynamicTime