"use client"

import WelcomeScreen from "@/components/WelcomeScreen";
import {questions} from "@/config/otazky";
import React, {useCallback, useEffect, useState} from "react";
import Question from "@/components/Question";
import {Progress} from "@nextui-org/progress";
import {Button} from "@nextui-org/button";

const shuffleQuestions = (questions: any[]) => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
};
const Home = () => {
  const [state, setState] = useState(0)
  const [numberOfQuestion, setNumberOfQuestion] = useState(40)
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

  useEffect(() => {
    setCurrentIndex(0)
  }, [state]);


  return (
    <>
      {state === 0 &&
          <WelcomeScreen numberOfQuestions={questions.length} handleClick={() => setState(1)}
                         handleChangeValue={handleNumberOfQuestions}/>}
      {state !== 0 &&
          <>
            {currentIndex !== questionsToShow.length &&
                <div className={"font-bold text-center w-full mb-1"}>
                  {currentIndex + 1 + "/" + questionsToShow.length}
                </div>
            }
              <Progress aria-label="Loading..." value={currentIndex * 100 / questionsToShow.length}
                        className="w-full mb-10"/>
            {currentIndex === questionsToShow.length ?
              <div
                className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-2 box-border flex flex-col gap-2.5"}>
                <Button className={"w-full"} onClick={() => setCurrentIndex(0)}>Chci hrát to samé znova!</Button>
                <Button color={"primary"} className={"w-full"} onClick={() => setState(0)}>Už to umím, chci novou
                  hru!</Button>
              </div> :
              <>
                <Question question={questionsToShow[currentIndex]} handleNextQuestion={handleNextIndex}/>
              </>
            }
          </>
      }
    </>
  );
}

export default Home