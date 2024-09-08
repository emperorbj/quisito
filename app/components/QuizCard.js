import Image from 'next/image';
import React from 'react'
import { IoEllipsisHorizontalOutline, IoPlayCircleOutline } from "react-icons/io5";
import { PiCodeThin } from "react-icons/pi";
import useGlobalContextProvider from '../ContextApi';
import Link from 'next/link';

function successRate(singleQuiz) {
    let correctQuestions = 0;
    let totalAttempts = 0;
    let successRateVariable = 0;

    singleQuiz.quizQuestions.forEach((question) => {
        totalAttempts += question.statistics.totalAttempts;
        correctQuestions += question.statistics.correctAttempts;
    });

    successRateVariable = Math.ceil((correctQuestions / totalAttempts) * 100);
    return successRateVariable
}



const QuizCard = ({singleQuiz}) => {

    const {quizTitle,quizQuestions,icon} = singleQuiz;
    const { quizToStartObject } = useGlobalContextProvider();
    const { setSelectQuizToStart } = quizToStartObject;
    


    const totalQuestions = quizQuestions.length;
    const globalSuccessRate = successRate(singleQuiz);





    return (
        <div className='rounded-[10px] flex flex-col gap-2 border 
    border-gray-200 bg-white p-4'>
            {/* image container */}
            <div className='relative bg-sky-500 w-full h-32 flex 
            justify-center items-center rounded-md '>
                {/* more options icon */}
                <div className='absolute cursor-pointer top-3 right-3'>
                    <IoEllipsisHorizontalOutline
                    className='text-white'
                    height={13}
                    width={13}/>
                </div>
                <PiCodeThin
                className='text-white'
                width={70}
                height={70}/>
            </div>
            {/* title area */}
            <h3 className='font-bold'>{quizTitle}</h3>
            {/* questions */}
            <p className='text-sm font-light'>{totalQuestions}: question(s)</p>
            {/* footer area of cards */}
            <div className='flex gap-3'>
                {/* sucess rate area */}
                <div className='flex gap-1 items-center'>
                    <Image
                    src="/target.png"
                    width={20}
                    height={10}
                    alt='success'/>
                    <span className='text-[12px]'>Success rate:{globalSuccessRate}%</span>
                </div>
                <div 
                onClick={()=> {
                    setSelectQuizToStart(singleQuiz)
                }}
                className='rounded-full w-7 h-7 bg-red-500 flex items-center
                justify-center cursor-pointer'>
                <Link href="/startQuiz">
                    <IoPlayCircleOutline
                    className='text-white'
                    width={20}
                    height={20}/>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default QuizCard
