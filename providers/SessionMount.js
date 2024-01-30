'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

export const SessionMount = ({ children }) => {
    const { status } = useSession()

    if (status !== 'loading') return (
        <div>
            {children}
        </div>
    )
}
