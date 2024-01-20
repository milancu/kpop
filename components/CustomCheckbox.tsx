import React from "react";
import {Checkbox} from "@nextui-org/checkbox";
import {cn} from "@nextui-org/system-rsc";

export const CustomCheckbox = ({
                                 answer,
                                 editMode,
                                 correct,
                                 wrong,
                                 maybe
                               }: {
  answer: any,
  editMode: boolean,
  correct?: boolean,
  wrong?: boolean,
  maybe?: boolean,
}) => {
  return (
    <Checkbox
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          editMode && "data-[selected=true]:border-primary",
          correct!! && "border-2 border-green-500",
          wrong!! && "border-2 border-rose-500",
          (!editMode && maybe!!) && "border-2 border-orange-500",
        ),
        label: "w-full",
      }}
      value={answer.id}
    >
      {answer.text}
    </Checkbox>
  );
};
