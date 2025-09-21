import {
  Box,
  CloseButton,
  Dialog,
  Flex,
  HStack,
  Portal,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import CustomInput from "../ui/Input";
import { BsCircle } from "react-icons/bs";
import TaskMenu from "./compoents/taskMenu";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import AssigneesSelect from "./compoents/assigneesSelect";
import { FaFlag } from "react-icons/fa6";
import PrioritySelect from "./compoents/prioritySelect";
import { MdOutlineDescription } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import CustomButton from "../ui/Button";
import { Controller, useForm } from "react-hook-form";

type TaskFormValues = {
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  assignees: { name: string; src: string }[];
  priority: string;
  description: string;
};

const AddTask = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, control } = useForm<TaskFormValues>({
    defaultValues: {
      name: "",
      status: "todo",
      startDate: "",
      endDate: "",
      assignees: [],
      priority: "medium",
      description: "",
    },
  });

  const onSubmit = (data: TaskFormValues) => {
    console.log("🚀 Task submitted:", data);
    // // do API call here
    // reset();
    // setOpen(false); // close dialog
  };
  return (
    <Dialog.Root
      placement="center"
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content shadow="none" borderRadius={10}>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                bg="#F6F6FA"
                p={0}
                color={"gray.600"}
                borderRadius={"full"}
                size="xs"
              />
            </Dialog.CloseTrigger>
            <Dialog.Body pt="4" px={10} bg={"#fff"} borderRadius={10}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box w={60}>
                  <CustomInput
                    size="lg"
                    placeholder="Task Name"
                    border="none"
                    bg="transparent"
                    h={10}
                    outline="none"
                    fontSize={25}
                    color="gray.800"
                    {...register("name", { required: true })}
                  />
                </Box>

                <VStack gap={4} align={"start"} pt={3}>
                  <HStack gap={2} w={"70%"}>
                    <BsCircle color="#BAC1CC" />
                    <Text color="#464B50" fontWeight="medium">
                      Status
                    </Text>

                    <Box ml="auto" w={"50%"}>
                      <TaskMenu />
                    </Box>
                  </HStack>

                  <HStack gap={2} w={"70%"}>
                    <HiMiniCalendarDateRange color="#BAC1CC" />
                    <Text color="#464B50" fontWeight="medium">
                      Dates
                    </Text>

                    <Box
                      ml="auto"
                      w={"50%"}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <CustomInput
                        size="md"
                        placeholder="top boy"
                        border="none"
                        bg="transparent"
                        h={5}
                        outline="none"
                        type="date"
                        {...register("startDate")}
                      />

                      <CustomInput
                        size="md"
                        placeholder="top boy"
                        border="none"
                        bg="transparent"
                        h={5}
                        outline="none"
                        type="date"
                        {...register("endDate")}
                      />
                    </Box>
                  </HStack>

                  <HStack gap={2} w={"70%"}>
                    <CgProfile color="#BAC1CC" />
                    <Text color="#464B50" fontWeight="medium">
                      Assignees
                    </Text>

                    <Box
                      ml="auto"
                      w={"50%"}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Controller
                        name="assignees"
                        control={control}
                        render={({ field }) => (
                          <AssigneesSelect
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </Box>
                  </HStack>

                  <HStack gap={2} w={"70%"}>
                    <FaFlag color="#BAC1CC" />
                    <Text color="#464B50" fontWeight="medium">
                      Priority
                    </Text>

                    <Box
                      ml="auto"
                      w={"50%"}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Controller
                        name="priority"
                        control={control}
                        render={({ field }) => (
                          <PrioritySelect
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </Box>
                  </HStack>

                  <VStack gap={2} align="start" justify="flex-start" w="full">
                    <Flex gap={2} align="center" justify="flex-start">
                      <MdOutlineDescription color="#BAC1CC" />
                      <Text color="#464B50" fontWeight="medium">
                        Description
                      </Text>
                    </Flex>

                    <Box
                      w={"full"}
                      display="flex"
                      alignItems="center"
                      gap={2}
                      mt={2}
                    >
                      <Textarea
                        p={4}
                        w="full"
                        border="none"
                        borderRadius={10}
                        bg="#F7F7F7"
                        color="gray.600"
                        outline="none"
                        placeholder="Write something or type"
                        {...register("description")}
                      />
                    </Box>
                  </VStack>
                </VStack>

                <Box
                  my={5}
                  display="flex"
                  alignItems="end"
                  justifyContent="flex-end"
                >
                  <CustomButton
                    bg="#75C5C1"
                    label="Create Task"
                    size="xs"
                    px={2}
                    w={"150px"}
                    color="#FFFFFF"
                    borderRadius="lg"
                    type="submit"
                  />
                </Box>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddTask;
