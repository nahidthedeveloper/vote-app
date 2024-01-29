'use client'
import React, { useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import Question from '@/components/Question'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const EventChildApi = ({ params }) => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const { data, status } = useSession()
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

    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onTouched',
    })


    const onSubmit = (e) =>{
        console.log(e)
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {questions.map((question, index) => (
                            <div className="my-10 grid gap-16" key={index}>
                                <Question question={question} register={register}/>
                            </div>
                        ))}

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
                    </form>
                </div>
            )}
        </>
    )
}

export default EventChildApi
