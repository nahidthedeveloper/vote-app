'use client'
import React, { useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import Question from '@/components/Question'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import moment from 'moment'

const EventChildApi = ({ params }) => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const { data, status } = useSession()
    const { questions, expired_at } = event

    useEffect(() => {
        httpClient
            .get(`/events/${params}/`)
            .then((response) => {
                setEvent(response.data)
                setLoading(false)
            })
            .catch((err) => {
                if (err) {
                    toast.error(err.message)
                }
            })
    }, [])

    const { register, handleSubmit, reset } = useForm({
        mode: 'onTouched',
    })

     const  onSubmit = async  (e) => {
        let submittedData = {
            submission: [],
        }
        Object.entries(e).forEach(([question, answer]) => {
            submittedData.submission.push({
                question: question,
                answer: answer,
            })
        })

        await httpClient
            .post(`/events/${params}/submit_vote/`, submittedData)
            .then((response) => {
                toast.success(response.data.message)
                reset()
            })
            .catch((er) => {
                const { data } = er.response
                if (data) {
                    const { data: errors } = er.response
                    if (errors) {
                        if ('non_field_errors' in errors) {
                            toast.error(errors.non_field_errors[0])
                        }
                    }
                }
            })
    }


    let localTime = moment.utc(expired_at).local()
    const formattedTime = localTime.format('MMMM Do YYYY, h:mm:ss a')

    const targetTime = moment(formattedTime, 'MMMM Do YYYY, h:mm:ss a')
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())

    function calculateRemainingTime() {
        return moment.duration(targetTime.diff(moment()))
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setRemainingTime(prevRemainingTime => calculateRemainingTime())
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [localTime])


    return (
        <>
            {loading ? (
                <p className="text-center mt-8">Loading...</p>
            ) : (
                <div className="mt-8">
                    {(remainingTime.days() <= 0 && remainingTime.hours() <= 0 && remainingTime.minutes() <= 0 && remainingTime.seconds() <= 0)
                        ? (
                            <p className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow my-10 text-center font-Russo text-2xl"> Event
                                expired.</p>
                        ) : (
                            <>
                                <p className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow text-center text-2xl font-Russo mt-8">Event
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

                    <h1 className="text-5xl font-Russo">{event.title}</h1>
                    <h3 className="mt-5 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
                        {event.description}
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {questions.map((question, index) => (
                            <div className="my-10 grid gap-16" key={index}>
                                <Question
                                    question={question}
                                    register={register}
                                />
                            </div>
                        ))}

                        {questions.length !== 0 ? (
                            <div className="text-center mt-4 mb-12">
                                {status === 'authenticated' ? (
                                    <button
                                        type="submit"
                                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        Submit Vote
                                    </button>
                                ) : (
                                    <Link
                                        className="px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-800 text-sm"
                                        href="/auth/login/"
                                    >
                                        Login to give Vote
                                    </Link>
                                )}
                            </div>
                        ) : (
                            ''
                        )}
                    </form>
                </div>
            )}
        </>
    )
}

export default EventChildApi
