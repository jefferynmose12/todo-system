"use client";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";
import { getPriorityColor } from "../../../../../utils";
import React from "react";
import { Item } from "@/type";

const CardGroup = ({
  title,
  icon,
  total,
  data,
}: {
  title: string;
  icon: React.ReactNode;
  total: number;
  data: Item[];
}) => {
  return (
    <VStack bg="#F7F7F7">
      <Flex align="center" bg="#F9F3FF" w="full" p={2}>
        <Flex align="center" gap={2}>
          <Box
            color="#464B50"
            bg="#FFF"
            p={1}
            px={2}
            display="flex"
            alignItems="center"
            gap={2}
          >
            {icon}
            <Text>{title}</Text>
          </Box>
          <Box bg="#FFFF" p={1} px={2} color="gray.600">
            ({total})
          </Box>
        </Flex>

        <Box ml="auto">
          <IconButton
            aria-label="Open menu"
            size="xs"
            variant="ghost"
            bg="#FFFFFF"
            color="#6C7278"
            borderColor="#EEF1F9"
            borderRadius="md"
          >
            <HiOutlinePlusSm />
          </IconButton>
        </Box>
      </Flex>

      <VStack py={1} px={1} w="full">
        {data?.map((item) => {
          return (
            <Box key={item.id} bg="#FFF" w="full" p={4} borderRadius={10}>
              <Text color="gray.800" fontSize={16} fontWeight="semibold">
                {item.name}
              </Text>

              <VStack gap={2} pt={2} color="gray.500">
                <HStack gap={2} w="full">
                  <FaRegCalendarAlt />
                  <Text>{item.date}</Text>
                </HStack>
                <HStack gap={2} w="full">
                  <CgProfile />
                  <AvatarGroup size="xs" stacking="last-on-top">
                    {item.assignees.map((item) => (
                      <Avatar.Root
                        key={item.name}
                        borderWidth={2}
                        borderColor="#fff"
                      >
                        <Avatar.Fallback name={item.name} />
                        <Avatar.Image src={item.src} />
                      </Avatar.Root>
                    ))}
                    <Avatar.Root
                      borderWidth={2}
                      borderColor="#fff"
                      bg="#F6ECFF"
                    >
                      <Avatar.Fallback color="gray.500">+1</Avatar.Fallback>
                    </Avatar.Root>
                  </AvatarGroup>
                </HStack>
                <HStack gap={2} w="full">
                  <FaFlag color={getPriorityColor(item.priority)} />
                  <Text>{item.priority}</Text>
                </HStack>
              </VStack>
            </Box>
          );
        })}
        <Button w="full" mt={1}>
          <Flex align="center" bg="#FFFF" w="full" p={2}>
            <HiOutlinePlusSm />
            <Text>Add Task</Text>
          </Flex>
        </Button>
      </VStack>
    </VStack>
  );
};

export default CardGroup;
