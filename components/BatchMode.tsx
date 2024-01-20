"use client"

import {Progress} from "@nextui-org/progress";
import {Button} from "@nextui-org/button";
import Question from "@/components/Question";
import React, {useCallback, useState} from "react";

const BatchMode = ({
                     batchQuestion,
                     handleBackToHome
                   }: {
  batchQuestion: any[],
  handleBackToHome: () => void
}) => {
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const questionsToShow = batchQuestion[currentBatchIndex]

  const handleNextQuestionIndex = useCallback(() => {
    setCurrentQuestionIndex((prevState) => prevState + 1)
  }, [])

  const handleNextBatchIndex = useCallback(() => {
    setCurrentBatchIndex((prevState) => prevState + 1)
    setCurrentQuestionIndex(0)
  }, [])


  return (
    <>
      {currentQuestionIndex !== questionsToShow.length &&
          <div className={"font-bold text-center w-full mb-1 flex justify-between"}>
              <div>{"Batch: " + (currentBatchIndex + 1) + "/" + batchQuestion.length}</div>
              <div>{"Otázka: " + (currentQuestionIndex + 1) + "/" + questionsToShow.length}</div>
          </div>
      }
      <Progress aria-label="Loading..." value={currentQuestionIndex * 100 / questionsToShow.length}
                className="w-full mb-10"/>
      {currentQuestionIndex === questionsToShow.length ?
        <div
          className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-2 box-border flex flex-col gap-2.5"}>
          <Button className={"w-full"} onClick={() => setCurrentQuestionIndex(0)}>Chci hrát to samé znova!</Button>
          {currentBatchIndex + 1 === batchQuestion.length ?
            <Button color={"primary"} className={"w-full"} onClick={handleBackToHome}>Už jsi dohrál! Zpátky
              domu</Button> :
            <Button color={"primary"} className={"w-full"} onClick={handleNextBatchIndex}>Už to umím, další
              Level!</Button>
          }
        </div> :
        <>
          <Question question={questionsToShow[currentQuestionIndex]} handleNextQuestion={handleNextQuestionIndex}/>
        </>
      }
    </>
  )
}

export default BatchMode