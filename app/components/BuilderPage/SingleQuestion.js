import React from 'react'

const SingleQuestion = ({ questionIndex }) => {
    return (
        <div className='w-full'>
            <div className='flex items-center gap-3'>
                <div className='flex gap-2 text-[18px] border-gray-200'>
                    <span>Question</span>
                    <span>{questionIndex + 1}</span>
                </div>
                <textarea
                className='border border-gray-200 rounded-md p-3 ml-3 w-full h-[50px] resize-none scroll- text-[17px] outline-none'
                placeholder='questions here...'/>
            </div>
        </div>
    )
}

export default SingleQuestion
