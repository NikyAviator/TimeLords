import { useEffect, useState, useCallback } from 'react'

const DynamicTime = (props) => {
  let { timeZoneInfo } = props

  const [timeString, setTimeString] = useState('00:00:00')

  useEffect(function uppdateTime() {
    const interval = setInterval(() => {
      update()
    }, 1000);
    return () => clearInterval(interval)
  }, [update])

  function update() {
    let date = new Date()
    setTimeString(date.toLocaleTimeString('sv-SE', { timeZone: timeZoneInfo.timezone }))
  }



  return (
    <>{timeString}</>
  )
}

export default DynamicTime