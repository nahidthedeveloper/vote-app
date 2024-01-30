import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TokenProvider } from '@/context/tokenContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NextAuthProvider } from '@/providers/SessionProvider'
import { SessionMount } from '@/providers/SessionMount'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Vote App',
    description: 'Created by Nahid Hasan',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] dark:text-white`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <NextAuthProvider>
                        <TokenProvider>
                            <SessionMount>
                                <Navbar />
                                <div className="max-w-[1216px] w-full m-auto px-4 md:px-0 min-h-[75vh]">
                                    {children}
                                    <ToastContainer />
                                </div>
                                <Footer />
                            </SessionMount>
                        </TokenProvider>
                    </NextAuthProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
