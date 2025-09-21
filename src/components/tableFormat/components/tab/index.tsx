"use client";

import { Badge, Tabs, Text } from "@chakra-ui/react";
import React from "react";

interface TabSingleProps {
  value: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  activeColor: string;
  total: number;
  active: boolean;
  badgeColor: string;
}

const TabSingle: React.FC<TabSingleProps> = ({
  value,
  icon,
  activeIcon,
  activeColor,
  total,
  active,
  badgeColor,
}) => {
  return (
    <Tabs.Trigger
      value={value}
      bg={active ? activeColor : "#FFFFFF"}
      shadow="none"
      borderRadius="md"
      _hover={{ bg: active ? "" : "gray.300", color: active ? "" : "#fff" }}
      color={active ? "#FFFFFF" : "#464B50"}
      py={1}
      pl={2}
      pr={1}
      display="flex"
      gap={2}
      w="180px"
      mr={2}
    >
      {active ? activeIcon : icon}
      <Text textTransform="capitalize">{value}</Text>
      <Badge p={2} ml="auto" fontSize={14} color="#464B50" bg={badgeColor}>
        ({total})
      </Badge>
    </Tabs.Trigger>
  );
};

export default TabSingle;
