'use client'
import React, { useContext, useEffect, useState } from 'react'
import { TokenContext } from '@/context/tokenContext'
import { httpClient } from '@/utils/api'
import EventCard from '@/components/EventCard'

const EventApi = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const tokenStatus = useContext(TokenContext)

    useEffect(() => {
        httpClient
            .get(`/events/`)
            .then((response) => {
                setEvents(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [tokenStatus])

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
