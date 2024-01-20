"use client"

import {Button} from "@nextui-org/button";
import {CheckboxGroup} from "@nextui-org/checkbox";
import {useCallback, useEffect, useState} from "react";
import {CustomCheckbox} from "@/components/CustomCheckbox";

const Question = ({
                    handleNextQuestion,
                    question
                  }: {
  question: any,
  handleNextQuestion: () => void
}) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [hasValidate, setHasValidate] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

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
    setSelected([]);
    setCorrectAnswers([]);
    setWrongAnswers([]);
    if (hasValidate) {
      handleHasValidate();
    }
  }, [handleHasValidate, hasValidate, question]);


  return (
    <div>
      {question.question}
      <div className="flex flex-col gap-1 w-full mt-8">
        <CheckboxGroup
          // @ts-ignore
          value={selected}
          // @ts-ignore
          onValueChange={setSelected}
          classNames={{
            base: "w-full"
          }}
        >
          {question.answers.map((a: any) => {
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
            Validate
        </Button>}
        {hasValidate && <Button color={"primary"} onClick={handleNextQuestion}>
            Next
        </Button>}
      </div>
    </div>
  )
}

export default Question