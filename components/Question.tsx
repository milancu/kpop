"use client"

import {Button} from "@nextui-org/button";
import {CheckboxGroup} from "@nextui-org/checkbox";
import {useCallback, useEffect, useState} from "react";
import {CustomCheckbox} from "@/components/CustomCheckbox";
import {shuffleQuestions} from "@/utils/utils";

const Question = ({
                    handleNextQuestion,
                    onOpen,
                    question
                  }: {
  question: any,
  handleNextQuestion: () => void
  onOpen: () => void
}) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [hasValidate, setHasValidate] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<any[]>([]);

  const addWrongAnswer = (answer: number) => {
    setWrongAnswers((prevState) => [...prevState, answer]);
  };

  const addCorrectAnswer = (answer: number) => {
    setCorrectAnswers((prevState) => [...prevState, answer]);
  };

  const handleValidate = () => {

    question.answers.forEach((answer: any) => {
      if (question.correctAnswers.includes(answer.id)) {
        if (selected.includes(answer.id)) {
          addCorrectAnswer(answer.id)
        } else {
          addWrongAnswer(answer.id)
        }
      } else {
        if (selected.includes(answer.id)) {
          addWrongAnswer(answer.id)
        } else {
          addCorrectAnswer(answer.id)
        }
      }
    })

    handleHasValidate();
  };

  const handleHasValidate = useCallback(() => {
    setHasValidate((prevState) => !prevState)
  }, [])

  useEffect(() => {
    setCorrectAnswers([]);
    setWrongAnswers([]);
    setSelected([]);
    if (hasValidate) {
      handleHasValidate();
    }
  }, [handleHasValidate, question]);

  useEffect(() => {
    setShuffledAnswers(shuffleQuestions(question.answers))
  }, [question]);


  return (
    <div className={"mb-2"}>
      <div>{question.question}</div>
      <div className="flex flex-col gap-1 w-full mt-6">
        <CheckboxGroup
          // @ts-ignore
          value={selected}
          // @ts-ignore
          onValueChange={setSelected}
          classNames={{
            base: "w-full"
          }}
        >
          {shuffledAnswers.map((a: any) => {
            return (
              <CustomCheckbox key={a.id}
                              answer={a}
                              editMode={!hasValidate}
                              correct={correctAnswers.includes(a.id)}
                              wrong={wrongAnswers.includes(a.id)}
                              maybe={question.maybe.includes(a.id)}
              />
            )
          })}
        </CheckboxGroup>
      </div>
      <div className={"mt-2 w-full text-right"}>
        {!hasValidate && <Button color={"primary"} onClick={handleValidate}>
            Zkontrolovat
        </Button>}
        {hasValidate &&
            <>
              {hasValidate &&
                  <Button onPress={onOpen} className={"mr-1"} variant={"light"} color={"primary"}>Jak funguje
                      hodnoceni?</Button>}
                <Button color={"primary"} variant={"shadow"} onClick={handleNextQuestion}>
                    Další
                </Button>
            </>
        }
      </div>
    </div>
  )
}

export default Question