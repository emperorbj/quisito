import React from 'react'
import { PiCodeThin } from "react-icons/pi";
import { GiStopwatch } from "react-icons/gi";
import useGlobalContextProvider from '../ContextApi';
const QuizStartHeader = ({parentTimer}) => {
    const { quizToStartObject } = useGlobalContextProvider();
    const { selectQuizToStart } = quizToStartObject;

    // EXTRACTING QUIZ INFO FROM THE SELECT QUIZ START
    const {quizTitle} = selectQuizToStart;
    const {quizQuestions} = selectQuizToStart;
    return (
        <div className='flex justify-between'>
            {/* QUIZ NAME */}
            <div className='flex gap-2 justify-center'>
                <div className='bg-sky-500 w-12 h-12 flex items-center
        justify-center p-2 rounded-md'>
                    <PiCodeThin
                        className='text-white'
                        width={26}
                        height={26} />
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-xl'>{quizTitle}</h2>
                    <span className='font-light text-sm'>{quizQuestions.length} Questions</span>
                </div>
            </div>
            {/* TIMER */}
            <div className='flex gap-2 items-center'>
                <GiStopwatch
                    className='text-orange-600'
                    width={20}
                    height={20} />
                <span>00:00:{parentTimer}</span>
            </div>
        </div>
    )
}

export default QuizStartHeader
