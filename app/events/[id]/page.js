import React from 'react'
import EventChildApi from '@/components/events/views/EventChildApi'

export const metadata = {
    title: 'Vote App | Event',
    description: 'Created by Nahid Hasan',
}

const Event = ({ params }) => {
    const { id } = params
    return <EventChildApi params={id} />
}

export default Event
