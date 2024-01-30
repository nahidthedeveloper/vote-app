import React from 'react'
import SignupForm from '@/components/forms/signupForm'

export const metadata = {
    title: 'Vote App | Signup',
    description: 'Created by Nahid Hasan',
}

const Signup = () => {
    return (
        <div className="flex flex-col items-center  px-6 py-8 lg:py-0 my-20">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create your Account
                    </h1>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Signup
