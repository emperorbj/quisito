
"use client"

import SingleQuestion from './SingleQuestion'
import { useState,useRef, useEffect } from 'react'
import { AiOutlineDelete} from 'react-icons/ai'
import {v4 as uuidv4 } from 'uuid'

const BuildQuestion = () => {
    const[quizQuestions, setQuizQuestions] = useState([
        {
            id: uuidv4(),
            mainQuestion: ''
        }
    ])

    const endOfListRef = useRef(null);

    // ADDING A NEW QUESTION
    function addNewQuestion(){
        const newQuestion = {id: uuidv4(), mainQuestion: ''};
        setQuizQuestions([...quizQuestions,newQuestion]);
    }

    // DELETING A QUESTION
    function deleteQuestion(singleQuestion){
        const quizQuestionsCopy = [...quizQuestions];
        const filterQuestionToDelete = quizQuestionsCopy.filter((question) => singleQuestion.id !== question.id,);
        setQuizQuestions(filterQuestionToDelete);
    }


    // THIS HANDLES AUTOMATIC SCROLL WHEN NEW QUESTIONS ARE ADDED
    useEffect(()=>{
        if(endOfListRef.current){
            endOfListRef.current.scrollIntoView({behavior: 'smooth'})
        }
    },[quizQuestions])


    return (
        <div className='p-3 mt-6 flex justify-between border border-sky-500 rounded-md'>
            <div className='flex gap-2 flex-col w-full'>
                {/* Header Area */}
                <div className='flex gap-2 items-center'>
                    <div className='bg-sky-400 px-4 py-1 rounded-md text-white'>2</div>
                    <span className='font-bold'>Quiz Question:</span>
                </div>
                {/* QUESTION AREA */}
                {quizQuestions.map((singleQuestion,questionIndex) =>(
                    <div
                    ref={
                        quizQuestions.length - 1 === questionIndex ? endOfListRef : null
                    } 
                    key={questionIndex} className='relative border ml-5 p-4 px-10 mt-4 border-sky-400 border-opacity-50 rounded-md'>
                        <SingleQuestion questionIndex={questionIndex}/>
                        {questionIndex !== 0 && (
                            <AiOutlineDelete
                            width={30}
                            height={30}
                            className='text-red-600 font-bold absolute top-4 right-3 cursor-pointer'
                            onClick={()=>{
                                deleteQuestion(singleQuestion)
                            }}/>
                        )}
                    </div>
                ))}
                {/* BUTTON AREA */}
                <div className='w-full flex justify-center mt-3'>
                    <button
                    className='p-3 bg-sky-400 rounded-md text-white w-[210px] text-[18px]' 
                    onClick={()=>{addNewQuestion()}}>
                        Add New Question
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuildQuestion
