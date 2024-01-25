import React from 'react'

const Event = ({params}) => {
    const {id} = params
    return (
        <div className='my-10'>
            i am from id {id}
        </div>
    )
}

export default Event