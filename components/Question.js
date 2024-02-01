import React, { useState } from 'react'
import Option from '@/components/Option'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const Question = ({ question, register }) => {
    const { options, id, question_total_votes } = question

    return (
        <div className="px-8 py-12 grid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
            <div className="flex gap-2 items-center p-6 mb-12 bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                <QuestionMarkCircleIcon className="w-8 h-8" />
                {question.title}
            </div>

            <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                {options.map((option, index) => (
                    <div className="col-span-6" key={index}>
                        <Option option={option} q_id={id} register={register}  question_total_votes={question_total_votes}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question
