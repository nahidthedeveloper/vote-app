'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false)

    const urls = [
        { path: '/events', title: 'Events' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
    ]
    return (
        <div className="bg-purple-800 relative">
            <div
                className="px-8 md:px-0 py-4 flex items-center justify-between text-white max-w-[1216px] w-full m-auto">
                <div>
                    <Link href="/">Vote App</Link>
                </div>
                <div className="flex">
                    <div className="hidden md:block">
                        <ul className="flex">
                            {urls.map((url, index) => (
                                <li key={index} className="pl-8">
                                    <Link href={url.path}>
                                        {url.title}
                                    </Link>
                                </li>
                            ))}
                            <li className="ml-8">
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => setToggleButton(!toggleButton)}
                        className="md:hidden hover:bg-purple-600 p-2 rounded-2xl"
                    >
                        <Bars3CenterLeftIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div
                className={`${toggleButton ? '' : 'hidden'} absolute bg-purple-800 w-full border-t border-black p-8 text-white`}

            >
                <ul className="w-full text-center">
                    {urls.map((url, index) => (
                        <li key={index} className="py-2">
                            <Link href={url.path}>
                                {url.title}
                            </Link>
                        </li>
                    ))}
                    <li className="py-2">
                        <ThemeSwitcher />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar