import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Vote App',
    description: 'Created by Nahid Hasan',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <div className="max-w-[1216px] w-full m-auto px-4 md:px-0">
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
