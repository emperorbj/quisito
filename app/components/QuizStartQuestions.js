"use client";
import React, { useEffect, useState } from 'react'
import useGlobalContextProvider from '../ContextApi';
import ScoreComponent from './ScoreComponent';
import toast, { Toaster } from 'react-hot-toast'

const QuizStartQuestions = ({ onUpdateTime }) => {
    const { quizToStartObject, allQuizzes, setAllQuizzes } = useGlobalContextProvider();
    const { selectQuizToStart } = quizToStartObject;
    const { quizQuestions } = selectQuizToStart;

    const [selectedChoice, setSelectedChoice] = useState(null);
    const [indexOfQuizSelected, setIndexOfQuizSelected] = useState(null);
    const [isQuizEnded, setIsQuizEnded] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0);
    const time = 10;
    const [timer, setTimer] = useState(time)
    
    let interval;

    useEffect(() => {
        const quizIndexFound = allQuizzes.findIndex(
            (quiz) => quiz.id === selectQuizToStart.id,
        );
        setIndexOfQuizSelected(quizIndexFound);
    }, [])

    console.log(allQuizzes);

    // THE START TIMER FUNCTION
    function startTimer() {
        clearInterval(interval);
        setTimer(time);

        interval = setInterval(() => {
            setTimer((currentTime) => {
                onUpdateTime(currentTime);
                if (currentTime === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return currentTime - 1;
            });
        }, 1000)
    }

    // ======================================

    useEffect(() => {
        // when component is unmounted we clear the time
        startTimer();
        return () => {
            clearInterval(interval);
        }
        // ARRAY DEPENDENCY;THAT MEANS TIME START ALL OVER 
        // AGAIN IF THE CURRENT-QUESTION-INDEX CHANGES
    }, [currentQuestionIndex])


    useEffect(() => {
        if (timer === 0 && !isQuizEnded) {

            // UPDATING THE ALL QUIZZES
            const currentQuizzes = [...allQuizzes];
            currentQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].statistics.totalAttempts += 1;
            currentQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].statistics.incorrectAttempts += 1;
            setAllQuizzes(currentQuizzes);
            // ======================================
            if (currentQuestionIndex !== quizQuestions.length - 1) {
                setTimeout(() => {
                    setCurrentQuestionIndex((current) => {
                        return current + 1;
                    })
                }, 1000)
            } else {
                setIsQuizEnded(true)
                clearInterval(interval);
            }
        }
    }, [timer])

    // with the useEffect every time the component is loaded up
    // we need to get the index of the quiz we selected inside the 
    // allQuizzes array to update it when we choose the answer






    // SELECT CHOICE FUNCTION
    function selectChoiceFunction(choiceIndexClicked) {
        // update the selectedChoice variable state
        setSelectedChoice(choiceIndexClicked);

        // MAKE A COPY OF THE ALLQUIZ FOR MODIFICATION
        const currentAllQuizzes = [...allQuizzes];

        currentAllQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].answeredResult = choiceIndexClicked;
        // we update the answer property in the allQuizzes array
        setAllQuizzes(currentAllQuizzes);
    }


    // MOVE TO THE NEXT QUESTION FUNCTION
    function moveToNextQuestion() {
        // check if we did select the answer by using the answerResult property
        // if its still -1 

        if (
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].answeredResult === -1
        ) {
            toast.error('please select an answer');
            return;
        }

        // update the statistics of the questions
        // update the total attempts
        allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].statistics.totalAttempts += 1;

        if (
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].answeredResult !==
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].correctAnswer
        ) {
            // update the incorrect attempts
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].statistics.incorrectAttempts += 1;
            toast.error('incorrect answer😢');

            // if the answer is incorrect then go to next question if we are not in the last question
            if (currentQuestionIndex !== quizQuestions.length - 1) {
                setTimeout(() => {
                    setCurrentQuestionIndex((current) => current + 1);
                    // initialize choice after going to the next question
                    setSelectedChoice(null);
                }, 1200)
            }
            else {
                // if we select wrong answer and we are at the end of the question then end quiz
                setTimer(0);
                clearInterval(interval);
                setIsQuizEnded(true);
            }
            return;
        }

        // ELSE
        // update the correct attempts
        allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].statistics.correctAttempts += 1;
        setScore((prevState) => prevState + 1);
        toast.success('Awesome👌');

        // This will stop the timer and end the quiz when currentQuestionIndex
        // is the last and only if we select the correct otherwise the timer is still running
        if (currentQuestionIndex === quizQuestions.length - 1 &&
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].answeredResult ===
            allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex].correctAnswer) {
            setTimer(0);
            setIsQuizEnded(true)
            clearInterval(interval)
            return;
        }
        // ELSE IF NOT INCREASE THE CURRENT INDEX BY 1 TO THE NEXT QUESTION
        setCurrentQuestionIndex((current) => current + 1);
        // initialize the choice after going to the next question
        setSelectedChoice(null);
    }

    // QUIZ ENDED
    useEffect(() => {
        if (isQuizEnded) {
            // re-initialize all questions to -1
            quizQuestions.forEach((quizQuestion) => {
                quizQuestion.answeredResult = -1;
            })
            // print out a message
            console.log('quiz ended');

        }
    }, [isQuizEnded])


    

    return (
        <div className='relative rounded-md m-9 w-9/12'>
            <Toaster
                toastOptions={{
                    className: '',
                    duration: 1500,
                    style: {
                        padding: '12px'
                    }
                }} />
            {/* The Questions */}
            <div className='flex justify-center items-center gap-2'>
                {/* OLD CODE HERER */}
                    {/* <div className='bg-sky-400 flex justify-center items-center 
                rounded-md w-11 h-11 text-white '>
                        {currentQuestionIndex + 1}
                    </div>
                    <p>
                        {quizQuestions[currentQuestionIndex].mainQuestion}
                    </p> */}
                {/* OLD CODE HERE */}

                {/* NEW CODE HERE */}
                {/* QUESTION NUMBER */}
                {/* Check if quizQuestions and currentQuestionIndex are valid */}
                {quizQuestions && quizQuestions[currentQuestionIndex] ? (
                    <>
                        {/* QUESTION NUMBER */}
                        <div className='bg-sky-400 flex justify-center items-center rounded-md w-11 h-11 text-white'>
                            {currentQuestionIndex + 1}
                        </div>
                        <p>{quizQuestions[currentQuestionIndex].mainQuestion}</p>
                    </>
                ) : (
                    <p>Loading question...</p> // Fallback message or loader
                )}
            </div>
            {/* THE OPTIONS FOR ANSWERS */}
            <div className='mt-7 flex flex-col gap-2'>
                {quizQuestions[currentQuestionIndex].choices.map((choice, index) => (
                    <div
                        onClick={() => { selectChoiceFunction(index) }}
                        key={index}
                        className={`p-3 ml-11 w-10/11 border-2 
                border-sky-400 rounded-md
            hover:bg-sky-300 transition-all 
            duration-500 select-none ${selectedChoice === index ? 'bg-sky-500 text-white' : 'bg-white'} hover:text-white`}>
                        {choice}
                    </div>
                ))
                }
            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex justify-end mt-7'>
                <button
                    onClick={() => { moveToNextQuestion() }}
                    disabled={isQuizEnded ? true : false}
                    className={`p-2 px-5 text-[15px] text-white
                rounded-md bg-yellow-500 ${isQuizEnded ? 'opacity-60' : 'opacity-100'} 
                mr-[70px]`}>
                    Submit
                </button>
            </div>
            {
                isQuizEnded && (
                    <ScoreComponent
                        quizStartParentProps={{
                            setIsQuizEnded,
                            setIndexOfQuizSelected,
                            setCurrentQuestionIndex,
                            setSelectedChoice,
                            score,
                            setScore
                        }} />
                )
            }
        </div>
    )
}

export default QuizStartQuestions
