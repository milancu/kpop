import {ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Checkbox} from "@nextui-org/checkbox";
import {cn} from "@nextui-org/system-rsc";
import {Button} from "@nextui-org/button";
import React from "react";
import {Modal} from "@nextui-org/react";

const CustomModal = ({
                       isOpen,
                       onOpenChange
                     }: {
  isOpen: boolean,
  onOpenChange: () => void
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Jak číst hodnocení?</ModalHeader>
            <ModalBody>
              <p className={"text-green-500"}>
                Správně - Byla označena správná odpověď.
                <Checkbox
                  isDisabled
                  defaultSelected
                  defaultChecked
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full w-full bg-content1 m-0",
                      "hover:bg-content2 items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                      "border-2 border-green-500 mt-1",
                    ),
                    label: "w-full",
                  }}
                  value={"1"}
                >
                  Lorem ipsum dolor sit amet.
                </Checkbox>
              </p>
              <p className={"text-green-500"}>
                Správně - Nebyla označena špatná odpověď.
                <Checkbox
                  isDisabled
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full w-full bg-content1 m-0",
                      "hover:bg-content2 items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                      "border-2 border-green-500 mt-1",
                    ),
                    label: "w-full",
                  }}
                  value={"2"}
                >
                  Lorem ipsum dolor sit amet.
                </Checkbox>
              </p>
              <p className={"text-rose-500"}>
                Špatně - Byla označna špatná odpověď
                <Checkbox
                  isDisabled
                  defaultSelected
                  defaultChecked
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full w-full bg-content1 m-0",
                      "hover:bg-content2 items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                      "border-2 border-rose-500 mt-1",
                    ),
                    label: "w-full",
                  }}
                  value={"3"}
                >
                  Lorem ipsum dolor sit amet.
                </Checkbox>
              </p>
              <p className={"text-rose-500"}>
                Špatně - Nebyla označena správná odpověď
                <Checkbox
                  isDisabled
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full w-full bg-content1 m-0",
                      "hover:bg-content2 items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                      "border-2 border-rose-500 mt-1",
                    ),
                    label: "w-full",
                  }}
                  value={"3"}
                >
                  Lorem ipsum dolor sit amet.
                </Checkbox>
              </p>
              <p className={"text-orange-500"}>
                Neznámá odpověď
                <Checkbox
                  isDisabled
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full w-full bg-content1 m-0",
                      "hover:bg-content2 items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                      "border-2 border-orange-500 mt-1",
                    ),
                    label: "w-full",
                  }}
                  value={"4"}
                >
                  Lorem ipsum dolor sit amet.
                </Checkbox>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Je mi to jasný!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default CustomModal