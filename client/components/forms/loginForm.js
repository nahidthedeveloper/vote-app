'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/components/validators";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {router} from "next/client";
import {toast} from "react-toastify";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = (data) => {
        signIn('credentials', {
            email: data?.email,
            password: data?.password,
            redirect: false,
        }).then((response) => {
            if (response?.error) {
                try {
                    const errors = JSON.parse(response.error)
                    errors.map((e) => {
                        return setError(e.name, {
                            type: 'manual',
                            message: e.message[0],
                        })
                    })
                } catch (error) {
                    toast.error('Internal server error!')
                }
            } else {
                toast.success('Login Successful')
                router.push(callbackUrl ?? '/profile')
            }
        })
    }

    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com"
                           {...register('email')}
                    />
                    <p className="text-red-400 pl-1 pt-2 text-sm">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="••••••••"
                           {...register('password')}
                    />
                    <p className="text-red-400 pl-1 pt-2 text-sm">{errors.password?.message}</p>
                </div>
                <div className="flex items-center">
                    <Link href="#"
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                        password?</Link>
                </div>
                <button type="submit"
                        className="w-full text-white bg-purple-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-purple-800">Sign
                    in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link href="/auth/signup"
                                                     className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                    up</Link>
                </p>
            </form>
        </>
    );
};

export default LoginForm;