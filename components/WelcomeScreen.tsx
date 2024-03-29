"use client"

import {Select, SelectItem} from "@nextui-org/select";
import {Button} from "@nextui-org/button";

const WelcomeScreen = ({
                         numberOfQuestions,
                         handleStartClassicGame,
                         handleStartBatchGame,
                         handleChangeValue,
                         onOpen
                       }: {
  numberOfQuestions: number,
  onOpen: () => void,
  handleStartClassicGame: () => void,
  handleStartBatchGame: () => void,
  handleChangeValue: (value: string) => void
}) => {

  return (
    <div className={"flex flex-col items-center gap-1 justify-center h-screen"}>
      <h4 className={"text-4xl font-bold mb-10"}>KPOP Autoškola</h4>
      <Select label={"Vyber počet otázek"} isRequired
              defaultSelectedKeys={["20"]}
              onChange={e => handleChangeValue(e.target.value)}>
        <SelectItem value={10} key={"10"}>
          10
        </SelectItem>
        <SelectItem value={20} key={"20"}>
          20
        </SelectItem>
        <SelectItem value={30} key={"30"}>
          30
        </SelectItem>
        <SelectItem value={40} key={"40"}>
          40
        </SelectItem>
        <SelectItem value={numberOfQuestions} key={numberOfQuestions} textValue={`Všechny (${numberOfQuestions})`}>
          Všechny ({numberOfQuestions})
        </SelectItem>
      </Select>
      <Button className={"w-full mt-2"} variant={"solid"} color={"primary"} onClick={handleStartClassicGame}>
        Hrát
      </Button>
      <Button className={"w-full mt-2"} variant={"flat"} color={"primary"} onClick={handleStartBatchGame}>
        Chci Batch po 10 otázkách
      </Button>
      <Button className={"w-full mt-10"} variant={"bordered"} color={"primary"} onPress={onOpen}>
        Jak funguje hodnocení?
      </Button>
    </div>
  )
}

export default WelcomeScreen
