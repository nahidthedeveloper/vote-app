import Link from 'next/link'

export const metadata = {
    title: 'Vote App | Home', description: 'Created by Nahid Hasan',
}
export default function Home() {

    return (<div className="mx-auto py-10 md:py-20">
        <h1 className="text-6xl text-center mb-10 font-Russo">
            Welcome to Vote App
        </h1>
        <h1 className="text-6xl text-center font-rubik-mono">
            Vote Without Rigging
        </h1>
        <div className="w-full flex justify-center pt-20">
            <Link
                href="/events/"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
                Vote Now
            </Link>
        </div>
    </div>)
}
