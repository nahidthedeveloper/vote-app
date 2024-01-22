'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '@/components/validators'

const SignupForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(signupSchema),
    })
    const onSubmit = (data) => console.log(data)



    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Email</label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com"
                           {...register('email')}
                    />
                    <p className="text-red-400 pl-1 pt-2 text-sm">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="student-id"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Student ID</label>
                    <input type="number" id="student-id"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="xxxxxxxxx"
                           {...register('student_id')}
                    />
                    <p className="text-red-400 pl-1 pt-2 text-sm">{errors.student_id?.message}</p>
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
                <div>
                    <label htmlFor="confirm-password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                        Password</label>
                    <input type="password" id="confirm-password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="••••••••"
                           {...register('confirm_password')}
                    />
                    <p className="text-red-400 pl-1 pt-2 text-sm">{errors.confirm_password?.message}</p>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox"
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                               required="" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept
                            the <Link
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                href="#">Terms and Conditions</Link></label>
                    </div>
                </div>
                <button type="submit"
                        className="w-full text-white bg-purple-600  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-purple-800">Sign
                    in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link href="/auth/login"
                                                     className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                </p>
            </form>
        </>
    )
}
export default SignupForm