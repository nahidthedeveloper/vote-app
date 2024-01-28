import React, { useState } from 'react'
import Option from '@/components/Option'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Question = ({ question }) => {
    const { options, id } = question
    const [choice, setChoice] = useState(null)
    const {data ,status } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data: ', choice)
    }

    return (
        <div
            className="px-8 py-12 grid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
            <div
                className="flex gap-2 items-center p-6 mb-12 bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                <QuestionMarkCircleIcon className="w-8 h-8" />
                {question.title}
            </div>

            <div>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-6 md:grid-cols-12 gap-8"
                >
                    {options.map((option, index) => (
                        <div className="col-span-6" key={index}>
                            <Option option={option} q_id={id} setChoice={setChoice} />
                        </div>
                    ))}

                    <div className="col-span-6 md:col-span-12 text-center mt-4">
                        {status === 'authenticated' ? (
                            <button
                                disabled={choice === null}
                                type="submit"
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Submit Vote
                            </button>
                        ) : (
                            <Link className="px-4 py-2 rounded text-white bg-purple-600 hover:bg-purple-800 text-sm"
                                  href="/auth/login/">
                                Login to give Vote
                            </Link>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Question
