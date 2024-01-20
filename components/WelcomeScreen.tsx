"use client"

import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Button} from "@nextui-org/button";

const WelcomeScreen = ({
                         numberOfQuestions,
                         handleClick,
                         handleChangeValue
                       }: {
  numberOfQuestions: number,
  handleClick: () => void,
  handleChangeValue: (value: string) => void
}) => {
  return (
    <div className={"flex flex-col items-center gap-1"}>
      <h4 className={"text-2xl font-bold mb-3"}>KPOP Autoškola</h4>
      <Select label={"Vyber počet otázek"} isRequired
              defaultSelectedKeys={["3"]}
              onChange={e => handleChangeValue(e.target.value)}>
        <SelectItem value={20} key={"1"}>
          20
        </SelectItem>
        <SelectItem value={30} key={"2"}>
          30
        </SelectItem>
        <SelectItem value={40} key={"3"}>
          40
        </SelectItem>
        <SelectItem value={numberOfQuestions} key={"4"} textValue={`Všechny (${numberOfQuestions})`}>
          Všechny ({numberOfQuestions})
        </SelectItem>
      </Select>
      <Button className={"w-full mt-8"} variant={"solid"} color={"primary"} onClick={handleClick}>
        Next
      </Button>
    </div>
  )
}

export default WelcomeScreen
