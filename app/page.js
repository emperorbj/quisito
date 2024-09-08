"use client";
import QuizLists from "./components/QuizLists";
import Navbar from "./components/Navbar";
import useGlobalContextProvider from "./ContextApi";
import { useEffect } from "react";

export default function Home() {
  const { quizToStartObject } = useGlobalContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;

  useEffect(()=>{
    // on the first render of the home page 
    // set the the SELECT-QUIZ-START VARIABLE to NULL
    // 
    setSelectQuizToStart(null)
  },[])
  return (
    <section>
      <Navbar />
      <QuizLists/>
    </section>
  );
}
