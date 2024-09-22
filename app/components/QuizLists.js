"use client";
import React from 'react'
import Image from 'next/image';
import QuizCard from './QuizCard'
import PlaceHolder from './PlaceHolder';
import useGlobalContextProvider from '../ContextApi';
import { useRouter } from 'next/navigation';

const QuizLists = () => {
    const router = useRouter();
    const { allQuizzes } = useGlobalContextProvider();
    return (
        <div className='mx-12 mt-10'>
            {allQuizzes.length === 0 ? (
                <PlaceHolder />
            )
                : (
                    <div>
                        <h2 className='text-xl font-bold'>Quizzes</h2>
                        <div className='mt-6 flex gap-3 flex-wrap'>
                            {allQuizzes.map((singleQuiz, quizIndex) => (
                                <div key={quizIndex}>
                                    <QuizCard singleQuiz={singleQuiz} />
                                </div>
                            ))}
                            <div
                                onClick={() => router.push('/builder')}
                                className='cursor-pointer flex justify-center items-center rounded-[10px]
                        w-[230px] flex-col gap-2 border border-gray-100 bg-white p-4
                        '>
                                <Image
                                    src={'/add.png'}
                                    alt=''
                                    width={100}
                                    height={100}
                                />
                                <span className='select-none opacity-40'>
                                    Add a new Quiz
                                </span>
                            </div>
                        </div>

                    </div>)}
        </div>
    )
}

export default QuizLists
