import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useGlobalContextProvider from '../ContextApi';
const ScoreComponent = ({quizStartParentProps}) => {
    const { quizToStartObject,allQuizzes } = useGlobalContextProvider();
    const { selectQuizToStart } = quizToStartObject;
    const numberOfQuestions = selectQuizToStart.quizQuestions.length;
    const router = useRouter()
    const {
        setIsQuizEnded,
        setIndexOfQuizSelected,
        setCurrentQuestionIndex,
        setSelectedChoice,
        score,
        setScore
        } = quizStartParentProps

        function emojiIcons(){
            const emojiFaces = [
                'excellent.png',
                'failed.png',
                'pass.png'
            ];

            const result = (score/selectQuizToStart.quizQuestions.length)*100;
            
            if(result < 25) {
                return emojiFaces[0];
            }

            if(result === 50) {
                return emojiFaces[1]
            }

            return emojiFaces[2]
        }

        console.log(emojiIcons());
        

        function tryAgainFunction() {
            setIsQuizEnded(false);
            const newQuizIndex = allQuizzes.findIndex(
                (quiz) => quiz.id === selectQuizToStart.id,
            );
            setIndexOfQuizSelected(newQuizIndex);
            setCurrentQuestionIndex(0)
            setSelectedChoice(null);
            setScore(0)
            console.log(selectQuizToStart);
            
        }
    return (
        <div className='flex items-center justify-center rounded-md top-[-100px]
        border border-gray-100'>
            {/* score */}
            <div className='flex gap-4 items-center 
            justify-center flex-col'>
                <Image
                src={`/${emojiIcons()}`}
                alt=''
                width={100}
                height={100}
                />
                <div className='flex gap-1 flex-col'>
                    <span className='font-bold text-2xl'>Your Score</span>
                    <div className='text-[22px] text-center'>
                        {score}/{numberOfQuestions}
                    </div>
                </div>
                <button
                onClick={()=> tryAgainFunction()}
                className='p-2 bg-sky-400 rounded-md text-white px-6'>
                Try Again
                </button>
                {/* statistics */}
                <div className='w-full flex gap-2 
                flex-col mt-3'>
                    <div className='flex gap-1 items-center
                    justify-center'>
                        <Image 
                        src="/correct.png"
                        alt=''
                        width={20}
                        height={20}/>
                        <span className='text-[14px]'>
                            correct answers: {score}
                        </span>
                    </div>
                    <div className='flex gap-1 items-center
                    justify-center'>
                        <Image 
                        src="/wrong.png"
                        alt=''
                        width={20}
                        height={20}/>
                        <span className='text-[14px]'>
                            Incorrect answers: {selectQuizToStart.quizQuestions.length - score}
                        </span>
                    </div>
                </div>
                <span
                onClick={()=>{
                    router.push('/')
                }}
                className='text-sky-500 select-none cursor-pointer text-sm mt-8'>
                    Select Another Quiz
                </span>
            </div>
        </div>
    )
}

export default ScoreComponent
