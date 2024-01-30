import React from 'react'
import EventApi from '@/app/api/EventApi'

export const metadata = {
    title: 'Vote App | Events',
    description: 'Created by Nahid Hasan',
}
const Events = () => {
    return (
        <>
            <EventApi />
        </>
    )
}

export default Events
