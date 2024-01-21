import React from 'react'

export const metadata = {
    title: 'Vote App | Events',
    description: 'Created by Nahid Hasan',
}
const Page = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 lg:py-20 ">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    We use an agile approach to test assumptions and connect with the needs of your audience early and
                    often.
                </p>
            </div>
            <div className="mt-10 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.286398521705!2d89.34645097604827!3d24.922311542778658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcff6dad46983f%3A0x32606b40b622acdb!2sPundra%20University%20of%20Science%20and%20Technology%20(PUB)!5e0!3m2!1sen!2sbd!4v1705867770982!5m2!1sen!2sbd"
                            width="100%"
                            height={480}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <div className="max-w-full mx-auto rounded-lg overflow-hidden text-gray-500 dark:text-gray-400">
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-medium">Our Address</h3>
                                <p className="mt-1">
                                    Rangpur Rd, Gokul
                                </p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium">Hours</h3>
                                <p className="mt-1">Monday - Friday: 9am - 5pm</p>
                                <p className="mt-1">Saturday: 10am - 4pm</p>
                                <p className="mt-1">Sunday: Closed</p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium ">Contact</h3>
                                <p className="mt-1">Email: info@example.com</p>
                                <p className="mt-1">Phone: +1 23494 34993</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page