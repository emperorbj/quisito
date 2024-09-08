"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import QuizStartQuestions from '@/app/components/QuizStartQuestions';
import QuizStartHeader from '@/app/components/QuizStartHeader';
import useGlobalContextProvider from '../ContextApi';
import Image from 'next/image';

const page = () => {

    const { allQuizzes,quizToStartObject } = useGlobalContextProvider();
    const { selectQuizToStart } = quizToStartObject;
    console.log(selectQuizToStart);
    const router = useRouter();

    useEffect(()=>{
        if(selectQuizToStart === null) {
            router.push('/');
        }
    },[])
    
    return (
        <div className='flex flex-col px-24 mt-[35px]'>
            {
                selectQuizToStart === null ? (
                    <div className='h-svh flex flex-col gap-2 items-center
                    justify-center'>
                        <Image
                        src=""
                        alt='error'
                        width={180}
                        height={180}/>
                        <h2 className='text-xl font-bold text-orange-500'>Please select your quiz first...</h2>
                        <span className='font-light'>You will be redirected to the homepage</span>
                    </div>
                )
            
            :(
            <>
            <QuizStartHeader/>
            <div className='flex mt-10 items-center justify-center'>
                <QuizStartQuestions/>
            </div>
            </>
            )}
        </div>
    )
}

export default page;



