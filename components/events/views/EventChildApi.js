'use client'
import React, { useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import Question from '@/components/Question'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Countdown from '@/components/events/elements/countdown'

const EventChildApi = ({ params }) => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState(null)
    const { data, status } = useSession()
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        httpClient
            .get(`/events/${params}/`)
            .then((response) => {
                setEvent(response.data)

            })
            .catch((err) => {
                if (err) {
                    toast.error(err.message)
                }
            }).finally(() => {
            setLoading(false)
        })
    }, [params, submit])

    const { register, handleSubmit, reset } = useForm({
        mode: 'onTouched',
    })

    const onSubmit = async (e) => {
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
                setSubmit(!submit)
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


    return (
        <>
            {loading ? (
                <p className="text-center mt-8">Loading...</p>
            ) : (
                event && (
                    <div>
                        <Countdown time={event.expired_at} />

                        <div className="mt-8">
                            <h1 className="text-5xl font-Russo">{event.title}</h1>
                            <h3 className="mt-5 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
                                {event.description}
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {event.questions.map((question, index) => (
                                    <div className="my-10 grid gap-16" key={index}>
                                        <Question
                                            question={question}
                                            register={register}
                                        />
                                    </div>
                                ))}

                                {event.questions.length !== 0 ? (
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


                    </div>


                )
            )}
        </>
    )
}

export default EventChildApi
