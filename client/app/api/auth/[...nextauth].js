import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { objectToArray } from '@/utils'
import { httpClient } from '@/utils/api'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize({ email, password }) {
                const payload = {
                    email,
                    password,
                }
                try {
                    const { data } = await httpClient.post(
                        `/auth/login/`,
                        payload,
                    )
                    return data
                } catch (error) {
                    if ('response' in error) {
                        const { data: errors } = error.response
                        const formattedData = objectToArray(errors)
                        throw new Error(JSON.stringify(formattedData))
                    }
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                console.log(user)
                return {
                    ...token,
                    accessToken: user?.token,
                }
            }
            return token
        },
        async session({ session, token }) {
            session.user.accessToken = token?.accessToken
            return session
        },
    },
    pages: {
        signIn: 'auth/login/',
        error: 'auth/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
})
