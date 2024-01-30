'use client'
import React, { useState } from 'react'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { httpClient } from '@/utils/api'
import { toast } from 'react-toastify'
import { objectToArray } from '@/utils'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'


const ResetPassword = () => {
    const searchParams = useSearchParams()
    const uid = searchParams.get('uid')
    const token = searchParams.get('token')

    const [loader, setLoader] = useState(false)
    const [pass, setPass] = useState(false)
    const [cpass, setcPass] = useState(false)
    const router = useRouter()

    const resetPasswordSchema = yup
        .object({
            password: yup
                .string()
                .required('This field is required.')
                .min(8, 'Password must be at least 8 characters')
                .max(32, 'Password must be at most 32 characters'),
            confirm_password: yup
                .string()
                .required('This field is required.')
                .oneOf([yup.ref('password'), null], 'Password does not match.'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(resetPasswordSchema),
    })
    const onSubmit = (data) => {
        setLoader(true)
        const payload = {
            uid: uid,
            token: token,
            password: data.password,
            confirm_password: data.confirm_password,

        }
        httpClient
            .post('auth/reset_password/', payload)
            .then((res) => {
                toast.success(res.data.message)
                reset()
                router.push('/')
                setLoader(false)
            })
            .catch((err) => {
                const { data: errors } = err.response

                if ('non_field_errors' in errors) {
                    toast.error(errors.non_field_errors[0])
                    setLoader(false)
                } else {
                    const formattedData = objectToArray(errors)
                    formattedData.map((el) => {
                        setError(el.name, {
                            type: 'custom',
                            message: el.message[0],
                        })
                    })
                    setLoader(false)
                }
            })
    }

    if (!uid && !token) {
        redirect('/')
    } else return (
        <main className="w-full max-w-md mx-auto p-6 mt-10">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-y-4">
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                                >
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={pass ? 'text' : 'password'}
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="********"
                                        {...register('password')}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setPass(!pass)}
                                        className="absolute top-0 end-0 p-3.5 rounded-e-md focus:outline-none"
                                    >
                                        {pass ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                                    </button>
                                </div>

                                <p className="text-red-400 pl-1 pt-2 text-sm">
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm_password"
                                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                                >
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={cpass ? 'text' : 'password'}
                                        id="confirm_password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="********"
                                        {...register('confirm_password')}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setcPass(!cpass)}
                                        className="absolute top-0 end-0 p-3.5 rounded-e-md focus:outline-none"
                                    >
                                        {cpass ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}

                                    </button>
                                </div>

                                <p className="text-red-400 pl-1 pt-2 text-sm">
                                    {errors.confirm_password?.message}
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-purple-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-purple-800"
                            >
                                {loader ? (
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    'Sent Verification Email'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}


export default ResetPassword