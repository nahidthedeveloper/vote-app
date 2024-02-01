import React from 'react'

const Option = ({ option, q_id, register, question_total_votes }) => {
    const { id, title, option_total_votes } = option
    let calculate = (option_total_votes / question_total_votes) * 100
    let percent = calculate.toFixed(2)
    return (
        <div className="border border-gray-200 rounded dark:border-gray-700 relative h-[50px] grid items-center">
            <div className="z-20 ps-4 flex items-center">
                <input
                    id="bordered-radio"
                    type="radio"
                    value={id}
                    {...register(`${q_id}`, { required: 'Email is required' })}
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    htmlFor="bordered-radio"
                    className="w-full ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    {title}
                </label>
            </div>
            <div
                className="absolute bg-blue-600 opacity-20 dark:opacity-40 top-0 h-full z-25"
                style={{ width: `${percent}%` }}
            ></div>
            <span className="absolute right-2 text-sm">{percent ? percent : '0'} %</span>
        </div>
    )
}

export default Option
