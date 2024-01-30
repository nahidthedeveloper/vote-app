'use client'
import React, { useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import EventCard from '@/components/EventCard'
import { toast } from 'react-toastify'

const EventApi = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        httpClient
            .get(`/events/`)
            .then((response) => {
                setEvents(response.data)
                setLoading(false)
            })
            .catch((err) => {
                if (err) {
                    toast.error(err.message)
                }
            })
    }, [])

    if (!events) {
        setLoading(false)
        return <p className="text-center mt-8">Events not found. </p>
    } else
        return (
            <>
                {loading ? (
                    <p className="text-center mt-8">Loading...</p>
                ) : (
                    <div className="my-10 w-full gap-8 grid grid-cols-12">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto"
                            >
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                )}
            </>
        )
}

export default EventApi
