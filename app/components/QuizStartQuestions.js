import React from 'react'

const QuizStartQuestions = () => {
    return (
        <div className='rounded-md m-9 w-9/12'>
            {/* The Questions */}
            <div className='flex justify-center items-center gap-2'>
                {/* QUESTION NUMBER */}
                <div className='bg-sky-400 flex justify-center items-center 
            rounded-md w-11 h-11 text-white '>
                    1
                </div>
                <p>
                    What is React in web development and mobile development?
                </p>
            </div>
            {/* THE OPTIONS FOR ANSWERS */}
            <div className='mt-7 flex flex-col gap-2'>
                <div className='p-3 ml-11 w-10/11 border-2 border-sky-400 rounded-md
            bg-sky-300 text-white'>
                    A: javascript library
                </div>
                <div className='p-3 ml-11 w-10/11 border-2 border-sky-400 rounded-md
            text-gray-600'>
                    B: java library
                </div>
                <div className='p-3 ml-11 w-10/11 border-2 border-sky-400 rounded-md
            text-gray-600'>
                    C: python library
                </div>
                <div className='p-3 ml-11 w-10/11 border-2 border-sky-400 rounded-md text-gray-600'>
                    D: flutter library
                </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex justify-end mt-7'>
                <button className='p-2 px-5 text-[15px] text-white
            rounded-md bg-yellow-500 mr-[70px]'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default QuizStartQuestions
