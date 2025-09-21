"use client";

import CustomButton from "@/components/ui/Button";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";
import {
  LuCirclePlus,
  LuStretchVertical,
  LuStretchHorizontal,
} from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import CustomInput from "@/components/ui/Input";
import { LuSearch } from "react-icons/lu";
import TableFormat from "@/components/tableFormat";
import CardFormat from "@/components/cardFormat";
import { useState } from "react";
import AddTask from "@/components/addTask";

export function Dashboard() {
  const [active, setActive] = useState("VERTICAL");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box py={5} px={6}>
      <Box bg="#FFFFFF" borderRadius={5}>
        <Flex
          justifyContent="space-between"
          py={2}
          px={3}
          align="center"
          borderBottomColor="#CDD6E9"
          borderBottomWidth={1}
        >
          <Flex align="center" gap={3}>
            <IconButton
              aria-label="Open menu"
              size="md"
              variant="ghost"
              bg="#FFFFFF"
              color="#6C7278"
              borderColor="#CDD6E9"
              borderRadius="full"
            >
              <HiOutlineArrowCircleLeft />
            </IconButton>

            <Text fontWeight="bold" fontSize={30} color="#1A1C1E">
              Afdeling Kwaliteit
            </Text>
          </Flex>

          <HStack gap={2} align="center">
            <IconButton
              aria-label="Open menu"
              size="xs"
              variant="ghost"
              bg="#FFFFFF"
              color="#6C7278"
              borderColor="#EEF1F9"
              borderRadius="md"
            >
              <Switch.Root size="xs">
                <Switch.Control bg="#E1E0E1" />
              </Switch.Root>
            </IconButton>
            <IconButton
              aria-label="Open menu"
              size="xs"
              variant="ghost"
              bg="#FFFFFF"
              color="#6C7278"
              borderColor="#EEF1F9"
              borderRadius="md"
            >
              <IoFilterOutline />
            </IconButton>
            <IconButton
              aria-label="Open menu"
              size="xs"
              variant="ghost"
              bg="#FFFFFF"
              color="#6C7278"
              borderColor="#EEF1F9"
              borderRadius="md"
            >
              <LuCalendarDays />
            </IconButton>
            <CustomButton
              bg="#41245F"
              size="xs"
              px={2}
              color="#FFFFFF"
              borderRadius="lg"
            >
              <PiExportBold /> Export xlsx
            </CustomButton>
            <CustomButton
              bg="#75C5C1"
              size="xs"
              px={2}
              color="#FFFFFF"
              borderRadius="lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <LuCirclePlus /> Add Task
            </CustomButton>
          </HStack>
        </Flex>

        <VStack gap={3} py={3} px={3}>
          <Flex
            bg="#E9F5F7"
            px={2}
            py={2}
            w="full"
            justifyContent="space-between"
            borderRadius="md"
          >
            <Box>
              <CustomInput
                size="lg"
                borderRadius="md"
                borderWidth={0}
                bg="#FFFFFF"
                h={10}
                outline="none"
                placeholder="Search for To-Do"
                startElement={
                  <Icon
                    as={LuSearch}
                    boxSize="25px"
                    color="gray.700"
                    pl={2}
                    cursor="pointer"
                    transition="transform 0.3s ease"
                  />
                }
              />
            </Box>

            <HStack gap={1} p={1} bg="#FFFFFF" borderRadius="md">
              <IconButton
                size="xs"
                bg={active === "VERTICAL" ? "#75C5C1" : "#F7F7F7"}
                color={active === "VERTICAL" ? "#FFFF" : "#6C7278"}
                borderWidth={0}
                borderRadius="md"
                onClick={() => setActive("VERTICAL")}
              >
                <LuStretchVertical />
              </IconButton>
              <IconButton
                size="xs"
                bg={active === "HORIZONTAL" ? "#75C5C1" : "#F7F7F7"}
                color={active === "HORIZONTAL" ? "#FFFF" : "#6C7278"}
                borderWidth={0}
                borderRadius="sm"
                onClick={() => setActive("HORIZONTAL")}
              >
                <LuStretchHorizontal />
              </IconButton>
            </HStack>
          </Flex>

          {active === "VERTICAL" ? <TableFormat /> : <CardFormat />}
        </VStack>
      </Box>

      <AddTask open={isOpen} setOpen={setIsOpen} />
    </Box>
  );
}
