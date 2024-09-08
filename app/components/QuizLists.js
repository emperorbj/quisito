"use client";
import React from 'react'
import QuizCard from './QuizCard'
import PlaceHolder from './PlaceHolder';
import useGlobalContextProvider from '../ContextApi';

const QuizLists = () => {
    const { allQuizzes } = useGlobalContextProvider();
    return (
        <div className='mx-12 mt-10'>
            {allQuizzes.length === 0 ? (
                <PlaceHolder />
            )
                : (
                    <div><h2 className='text-xl font-bold'>Quizzes</h2>
                        <div className='mt-6 flex gap-3 flex-wrap'>
                        {allQuizzes.map((singleQuiz,quizIndex) => (
                            <div key={quizIndex}>
                                <QuizCard singleQuiz={singleQuiz} />
                            </div>
                        ))
                            
                        }
                        </div>
                    </div>)}
        </div>
    )
}

export default QuizLists
