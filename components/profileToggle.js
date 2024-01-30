import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const ProfileToggle = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)
    let menuRef = useRef()

    let handleClickOutside = (e) => {
        if (!menuRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div className="relative">
            <div ref={menuRef}>
                <button
                    type="button"
                    className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-8 h-8 rounded-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1705503233~exp=1705503833~hmac=e04fdc0a042600dbaec95343908acc87907d93feef72e520e39d32120eb93891"
                        alt="user photo"
                    />
                </button>

                <div
                    className={`${isOpen ? '' : 'hidden'} absolute border border-gray-200 dark:border-gray-700 text-center top-8 -right-2 z-50 my-4 text-base list-none divide-y divide-gray-100 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white dark:divide-gray-600 min-w-[200px]`}
                >
                    <div className="px-4 py-3">
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                            {user ? user : 'example@company.com'}
                        </span>
                    </div>
                    <ul className="py-2">
                        <li>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Profile
                            </Link>
                        </li>
                        <li
                            onClick={() => signOut()}
                            className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileToggle
