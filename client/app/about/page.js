import React from 'react'

export const metadata = {
    title: 'Vote App | Events',
    description: 'Created by Nahid Hasan',
}
const Page = () => {
    return (
        <div className="py-16 lg:py-20">
            <div className="flex flex-wrap">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img
                        src="https://helios-i.mashable.com/imagery/articles/01wi5CJL3fijj6XB1rAopRI/hero-image.fill.size_1248x702.v1623390702.jpg"
                        alt="vote_image"
                        className="relative z-40 object-cover w-full h-96 rounded-2xl"
                    />
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                        About Us
                    </h2>
                    <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniamLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page
