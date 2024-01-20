"use client"

import WelcomeScreen from "@/components/WelcomeScreen";
import {questions} from "@/config/otazky";
import React, {useCallback, useEffect, useState} from "react";
import Question from "@/components/Question";
import {Progress} from "@nextui-org/progress";

const shuffleQuestions = (questions: any[]) => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
};
const Home = () => {
  const [state, setState] = useState(0)
  const [numberOfQuestion, setNumberOfQuestion] = useState(0)
  const [questionsToShow, setQuestions] = useState(questions)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNumberOfQuestions = useCallback((newValue: string) => {
    setNumberOfQuestion(Number(newValue))
  }, [])

  const handleNextIndex = useCallback(() => {
    setCurrentIndex(prevState => prevState + 1)
  }, [])

  useEffect(() => {
    const shuffledArray = shuffleQuestions(questions);
    const slicedArray = shuffledArray.slice(0, numberOfQuestion);
    setQuestions(slicedArray);
  }, [numberOfQuestion]);


  return (
    <div>
      {state === 0 &&
          <WelcomeScreen numberOfQuestions={questions.length} handleClick={() => setState(1)}
                         handleChangeValue={handleNumberOfQuestions}/>}
      {state !== 0 &&
          <>
              <Progress aria-label="Loading..." value={currentIndex * 100 / questionsToShow.length}
                        className="max-w-md mb-12"/>
              <Question question={questionsToShow[currentIndex]} handleNextQuestion={handleNextIndex}/>
          </>
      }
    </div>
  );
}

export default Home