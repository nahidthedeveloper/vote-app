import React from 'react'
import Option from '@/components/Option'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const Question = ({ id }) => {
    return (
        <div
            className="px-8 py-12 grid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
            <div
                className="flex gap-2 items-center p-6 mb-12 bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                <QuestionMarkCircleIcon className="w-8 h-8" />
                this is question component. From ID {id}
            </div>

            <div>
                <form action="" className="grid grid-cols-6 md:grid-cols-12 gap-8">
                    <div className="col-span-6">
                        <Option />
                    </div>
                    <div className="col-span-6">
                        <Option />
                    </div>
                    <div className="col-span-6">
                        <Option />
                    </div>
                    <div className="col-span-6">
                        <Option />
                    </div>
                    <div className="col-span-6">
                        <Option />
                    </div>

                    <div className="col-span-6 md:col-span-12 text-center mt-4">
                        <button type="submit"
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Submit Vote
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Question