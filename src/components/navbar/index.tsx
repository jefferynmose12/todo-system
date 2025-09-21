"use client";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import CustomInput from "../ui/Input";
import { MdOutlineCancel } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import CustomButton from "../ui/Button";

export function Navbar() {
  return (
    <Flex
      as="header"
      bg="#FFFFFF"
      px={6}
      justifyContent="space-between"
      py={3}
      align="center"
      borderBottomColor="#CDD6E9"
      borderBottomWidth={1}
      position="fixed"
      top={0}
      left={{ base: "60px", md: "250px" }}
      right={0}
      zIndex={1000}
    >
      <Box w={60}>
        <CustomInput
          size="lg"
          borderRadius="md"
          borderColor="#CDD6E9"
          bg="#F7F7F7"
          h={10}
          outline="none"
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
          endElement={
            <Icon
              as={MdOutlineCancel}
              boxSize="30px"
              color="gray.700"
              pr={3}
              cursor="pointer"
              transition="transform 0.3s ease"
            />
          }
        />
      </Box>

      <Flex align="center" gap={2}>
        <IconButton
          aria-label="Open menu"
          size="md"
          variant="ghost"
          bg="#FFFFFF"
          color="#6C7278"
          borderColor="#EEF1F9"
          borderRadius="md"
        >
          <Image src="/images/strike.png" alt="box logo" borderRadius="md" />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          size="md"
          variant="ghost"
          bg="#FFFFFF"
          color="#6C7278"
          borderColor="#EEF1F9"
          borderRadius="md"
        >
          <Image src="/images/dbadge.png" alt="box logo" borderRadius="md" />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          size="md"
          variant="ghost"
          bg="#FFFFFF"
          color="#6C7278"
          borderColor="#EEF1F9"
          borderRadius="md"
        >
          <Image src="/images/box.png" alt="box logo" borderRadius="md" />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          size="md"
          variant="ghost"
          bg="#FFFFFF"
          color="#6C7278"
          borderColor="#EEF1F9"
          borderRadius="md"
        >
          <Image src="/images/enet.png" alt="box logo" borderRadius="md" />
        </IconButton>
      </Flex>

      <HStack
        gap={2}
        align="center"
        py={1}
        px={1}
        bg="#FFFFFF"
        borderColor="#EEF1F9"
        borderWidth={1}
        borderRadius="md"
      >
        <CustomButton
          bg="#41245F"
          label="Melding maken"
          size="xs"
          px={2}
          color="#FFFFFF"
          borderRadius="lg"
        />
        <CustomButton
          bg="#75C5C1"
          label="VIM"
          size="xs"
          px={2}
          color="#FFFFFF"
          borderRadius="lg"
        />
        <CustomButton
          bg="#75C5C1"
          label="LMS"
          size="xs"
          px={2}
          color="#FFFFFF"
          borderRadius="lg"
        />
        <CustomButton
          bg="#75C5C1"
          label="BHV"
          size="xs"
          px={2}
          color="#FFFFFF"
          borderRadius="lg"
        />
        <CustomButton
          bg="#75C5C1"
          label="DataLek"
          size="xs"
          px={2}
          color="#FFFFFF"
          borderRadius="lg"
        />
      </HStack>

      <IconButton
        aria-label="Open menu"
        size="md"
        variant="ghost"
        bg="#FFFFFF"
        color="#6C7278"
        borderColor="#EEF1F9"
        borderRadius="md"
      >
        <IoLink />
      </IconButton>

      <Flex align="center" gap={2}>
        <Icon
          as={IoNotificationsOutline}
          boxSize="30px"
          color="gray.700"
          bg="gray.200"
          p={1.5}
          cursor="pointer"
          borderRadius="full"
          transition="transform 0.3s ease"
        />

        <Flex
          align="center"
          bg="gray.100"
          px={1}
          borderRadius="full"
          gap={2}
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
          w="fit-content"
        >
          <Avatar.Root w="30px" h="30px">
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>

          <Text fontWeight="medium" fontSize={12} color="#1A1C1E">
            Hi Paul
          </Text>

          <IconButton
            aria-label="Open menu"
            size="xs"
            variant="ghost"
            borderRadius="full"
            color="#6C7278"
          >
            <IoCaretDown />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
