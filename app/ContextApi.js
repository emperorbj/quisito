"use client";
import { quizData } from './QuizData';
import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export function ContextProvider({children}) {
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [selectQuizToStart, setSelectQuizToStart] = useState(null);


    // on rendering it fetches all the quiz into contextAPI
    useEffect(() =>{
        setAllQuizzes(quizData); 
    },[])
    return (
        <GlobalContext.Provider value={{ allQuizzes, setAllQuizzes,quizToStartObject: {selectQuizToStart,setSelectQuizToStart}}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default function useGlobalContextProvider() {
    return useContext(GlobalContext);
}