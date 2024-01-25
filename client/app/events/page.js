import React from 'react'
import EventCard from '@/components/EventCard'

export const metadata = {
    title: 'Vote App | Events',
    description: 'Created by Nahid Hasan',
}
const Events = () => {
    const cardData = [
        {
            'title': 'Noteworthy technology acquisitions 2024 Noteworthy technology acquisitions',
            'description': 'Here are the biggest enterprise technology',
            'id': 1,
        },
        {
            'title': 'Noteworthy technology acquisitions 2024',
            'description': 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            'id': 2,
        },
        {
            'title': 'Noteworthy technology acquisitions 2024',
            'description': 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            'id': 3,
        },
        {
            'title': 'Noteworthy technology acquisitions 2024',
            'description': 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            'id': 4,
        },
    ]
    return (
        <div className="my-10 w-full gap-8 grid grid-cols-12">
            {cardData.map(card =>
                <div key={card.id} className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto">
                    <EventCard data={card} />
                </div>
            )}
        </div>
    )
}

export default Events