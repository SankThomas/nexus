import { useState, useEffect } from "react"

const DateTime = () => {
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const countdown = () => {
      const today = new Date().getTime()

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeHours = Math.floor((today % days) / hours)
      let timeMinutes = Math.floor((today % hours) / minutes)
      let timeSeconds = Math.floor((today % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section>
          <h4 className="text-center text-xl">Time in 24 hour format</h4>
          <section className="flex items-center justify-center flex-wrap mb-10">
            <div className="bg-red-900 text-white m-2 w-20 text-center rounded-lg">
              <h3 className="font-bold text-5xl">{hours}</h3>
              <p>Hours</p>
            </div>
            <div className="bg-indigo-900 text-white m-2 w-20 text-center rounded-lg">
              <h3 className="font-bold text-5xl">{minutes}</h3>
              <p>Minutes</p>
            </div>
            <div className="bg-green-900 text-white m-2 w-20 text-center rounded-lg">
              <h3 className="font-bold text-5xl">{seconds}</h3>
              <p>Seconds</p>
            </div>
          </section>
        </section>
      )}
    </>
  )
}

export default DateTime
