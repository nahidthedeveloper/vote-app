import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const EventCard = ({ data }) => {
    const { id, title, description } = data
    return (

        <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[242px] relative z-0">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{description}</p>
            <Link href={`/events/${id}`}
                  className="absolute bottom-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <ArrowRightIcon className='h-4 w-4 ml-1'/>
            </Link>
        </div>
    )
}

export default EventCard