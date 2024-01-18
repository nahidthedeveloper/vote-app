import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "./providers";


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Vote App',
    description: 'Created by Nahid Hasan',
}

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
