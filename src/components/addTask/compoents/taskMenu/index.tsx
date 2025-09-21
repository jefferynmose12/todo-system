"use client";

import { useState } from "react";
import { Box, Image, Menu } from "@chakra-ui/react";

const options = [
  { value: "todo", label: "To Do", icon: "/images/task.png" },
  { value: "in progress", label: "In Progress", icon: "/images/progress.png" },
  { value: "completed", label: "Completed", icon: "/images/complete.png" },
];

export default function TaskMenu() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Menu.Root>
      <Menu.Trigger asChild outline="none">
        <Box
          as="button"
          display="flex"
          alignItems="center"
          gap={2}
          bg="#F7F7F7"
          px={2}
          py={0}
          borderRadius={5}
          border="1px solid #CDD6E9"
          color="gray.800"
          fontSize={12}
        >
          <Image src={selected.icon} alt={selected.label} w={4} h={4} />
          <Box>{selected.label}</Box>
        </Box>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content
          bg="gray.200"
          borderWidth={1}
          borderColor="#CDD6E9"
          shadow="none"
          rounded="md"
        >
          {options.map((item) => (
            <Menu.Item
              key={item.value}
              value={item.value}
              px={2}
              py={2}
              my={1}
              color="gray.600"
              display="flex"
              alignItems="center"
              onClick={() => setSelected(item)}
              _hover={{ bg: "gray.300", color: "gray.800" }}
            >
              <Image src={item.icon} alt={item.label} w={4} h={4} />
              <Box flex="1" ml={2}>
                {item.label}
              </Box>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
