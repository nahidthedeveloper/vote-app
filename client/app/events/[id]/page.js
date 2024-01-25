import React from 'react'

import Question from '@/components/Question'

const Event = ({ params }) => {
    const { id } = params
    return (
        <div className="my-10 grid gap-16">
            <Question id={id} />
            <Question id={id} />
        </div>)

}

export default Event