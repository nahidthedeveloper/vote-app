'use client'
import React, { useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import Question from '@/components/Question'
import { toast } from 'react-toastify'

const EventChildApi = ({ params }) => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const { questions } = event

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

    return (
        <>
            {loading ? (
                <p className="text-center mt-8">Loading...</p>
            ) : (
                <div className="mt-8">
                    <h1 className="text-5xl font-Russo">{event.title}</h1>
                    <h3 className="mt-5 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
                        {event.description}
                    </h3>
                    {questions.map((question, index) => (
                        <div className="my-10 grid gap-16" key={index}>
                            <Question question={question} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default EventChildApi
