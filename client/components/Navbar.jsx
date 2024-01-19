'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false)
    let menuRef = useRef()

    let handleClickOutside = (e) => {
        if (!menuRef.current?.contains(e.target)) {
            setToggleButton(false)
        }
    }

    useEffect(() => {
        console.log('test')
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    const urls = [
        { path: '/events', title: 'Events' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
    ]

    return (
        <div className="bg-purple-800">
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
                    <div className='relative'>
                        <div ref={menuRef}>
                            <button
                                onClick={() => setToggleButton(!toggleButton)}
                                className="md:hidden hover:bg-purple-600 p-2 rounded-2xl"
                            >
                                <Bars3CenterLeftIcon className="h-6 w-6" />
                            </button>
                            <div
                                className={`${toggleButton ? '' : 'hidden'} absolute -right-3 top-16 rounded-2xl bg-purple-800 w-40 p-8 text-white`}
                            >
                                <ul className="w-full text-center">
                                    {urls.map((url, index) => (
                                        <li key={index} className="py-2">
                                            <Link href={url.path} onClick={() => setToggleButton(false)}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar