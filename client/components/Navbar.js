'use client'
import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import {Bars3CenterLeftIcon} from '@heroicons/react/24/solid'
import {ThemeSwitcher} from '@/components/ThemeSwitcher'

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false)
    const menuRef = useRef()

    let handleClickOutside = (e) => {
        if (!menuRef.current?.contains(e.target)) {
            setToggleButton(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    const urls = [
        {path: '/events', title: 'Events'},
        {path: '/about', title: 'About'},
        {path: '/contact', title: 'Contact'},
    ]

    return (
        <nav className="bg-white dark:bg-gray-900 sticky top-0 shadow-md">
            <div
                className="px-4 md:px-0 py-8 flex items-center justify-between dark:text-white text-black max-w-[1216px] w-full m-auto">
                <div>
                    <Link href="/">Vote App</Link>
                </div>
                <div className="flex">
                    <div className="hidden md:block">
                        <ul className="flex">
                            {urls.map((url, index) => (
                                <li key={index} className="pl-8">
                                    <Link href={url.path} className='hover:underline'>
                                        {url.title}
                                    </Link>
                                </li>
                            ))}
                            <li className="ml-8">
                                <ThemeSwitcher/>
                            </li>
                            <li className="ml-16">
                                <Link href="/auth/login"
                                      className="text-sm hover:underline">LOGIN</Link>
                            </li> 
                            <li className="ml-8">
                                <Link href="/auth/signup"
                                      className="px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-800 text-sm">SIGNUP</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div ref={menuRef}>
                            <button
                                onClick={() => setToggleButton(!toggleButton)}
                                className="md:hidden hover:outline p-2 rounded"
                            >
                                <Bars3CenterLeftIcon className="h-6 w-6"/>
                            </button>
                            <div
                                className={`${toggleButton ? '' : 'hidden'} absolute -right-3 top-20 rounded-2xl w-40 p-8 bg-white dark:bg-gray-900 text-black dark:text-white shadow shadow-black dark:shadow-white`}
                            >
                                <ul className="w-full text-center">
                                    {urls.map((url, index) => (
                                        <li key={index} className="py-2">
                                            <Link href={url.path} className='hover:underline' onClick={() => setToggleButton(false)}>
                                                {url.title}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="py-2">
                                        <ThemeSwitcher/>
                                    </li>
                                    <li className="mt-6">
                                        <Link
                                            onClick={() => setToggleButton(false)}
                                            href="/auth/login"
                                            className="text-sm hover:underline">LOGIN</Link>
                                    </li>
                                    <li className="mt-6">
                                        <Link onClick={() => setToggleButton(false)}
                                              href="/auth/signup"
                                              className="px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-800 text-sm">SIGNUP</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar