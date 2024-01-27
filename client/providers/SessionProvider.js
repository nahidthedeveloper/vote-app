'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

// export default function NextAuthSessionProvider({ children }: {children: ReactNode;}) {
//     return <SessionProvider>{children}</SessionProvider>
// }


export default function NextAuthSessionProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>
}