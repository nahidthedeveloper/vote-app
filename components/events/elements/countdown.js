'use client'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'

const Countdown = ({ time }) => {
    let localTime = moment.utc(time).local()
    const formattedTime = localTime.format('MMMM Do YYYY, h:mm:ss a')

    const targetTime = moment(formattedTime, 'MMMM Do YYYY, h:mm:ss a')
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime()) // minus value at initial render

    function calculateRemainingTime() {
        return moment.duration(targetTime.diff(moment()))
    }

    useEffect(() => {

        const timerInterval = setInterval(() => {
            setRemainingTime(calculateRemainingTime())
        }, 1000)

        return () => clearInterval(timerInterval)

    }, [localTime])

    const isExpired = remainingTime.asSeconds() <= 0

    return (
        <>

            <div
                className={'p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow  mt-8'}>

                {isExpired ? (
                    <p className="text-center font-Russo text-2xl"> Event
                        expired.</p>
                ) : (
                    <>
                        <p className="text-center text-2xl font-Russo">Event
                            will expired at</p>
                        <div className="flex items-end justify-center z-10">
                            <div className="m-2 sm:m-5 text-center">
                                    <span
                                        className="text-indigo-600 font-bold text-5xl">{remainingTime.days()}</span>
                                <p>Days</p>
                            </div>
                            <div className="m-2 sm:m-5 text-center">
                                    <span
                                        className="text-indigo-600 font-bold text-5xl">{remainingTime.hours()}</span>
                                <p>Hours</p>
                            </div>
                            <div className="m-2 sm:m-5 text-center">
                                    <span
                                        className="text-indigo-600 font-bold text-5xl">{remainingTime.minutes()}</span>
                                <p>Minutes</p>
                            </div>
                            <div className="m-2 sm:m-5 text-center">
                                    <span
                                        className="text-indigo-600 font-bold text-5xl">{remainingTime.seconds()}</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </>
                )}


            </div>
        </>
    )
}

export default Countdown