"use client"

import WelcomeScreen from "@/components/WelcomeScreen";
import {questions} from "@/config/otazky";
import React, {useCallback, useEffect, useState} from "react";
import Question from "@/components/Question";
import {Progress} from "@nextui-org/progress";
import {Button} from "@nextui-org/button";
import BatchMode from "@/components/BatchMode";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Checkbox} from "@nextui-org/checkbox";
import {cn} from "@nextui-org/system-rsc";
import CustomModal from "@/components/CustomModal";

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const shuffleQuestions = (questions: any[]) => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
};
const Home = () => {
  const {
    isOpen,
    onOpen,
    onOpenChange
  } = useDisclosure();

  const [state, setState] = useState(0)
  const [numberOfQuestion, setNumberOfQuestion] = useState(40)
  const [questionsToShow, setQuestions] = useState(questions)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [batchQuestion, setBatchQuestion] = useState<any[]>([])

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

  useEffect(() => {
    const batches = chunkArray(shuffleQuestions(questions), 10);
    setBatchQuestion(batches);
  }, []);

  return (
    <>
      {state === 0 &&
          <WelcomeScreen numberOfQuestions={questions.length}
                         onOpen={onOpen}
                         handleStartBatchGame={() => setState(2)}
                         handleStartClassicGame={() => setState(1)}
                         handleChangeValue={handleNumberOfQuestions}/>}
      {state === 1 &&
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
                className={"w-full flex flex-col gap-2.5"}>
                <Button className={"w-full"} onClick={() => setCurrentIndex(0)}>Chci hrát to samé znova!</Button>
                <Button color={"primary"} className={"w-full"} onClick={() => setState(0)}>Už to umím, chci novou
                  hru!</Button>
              </div> :
              <>
                <Question onOpen={onOpen} question={questionsToShow[currentIndex]} handleNextQuestion={handleNextIndex}/>
              </>
            }
          </>
      }
      {state === 2 &&
          <BatchMode onOpen={onOpen}
                     batchQuestion={batchQuestion} handleBackToHome={() => setState(0)}/>
      }
      <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  );
}

export default Home