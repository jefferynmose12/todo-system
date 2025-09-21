"use client";

import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  Collapsible,
} from "@chakra-ui/react";
import { TbArrowBarToLeft } from "react-icons/tb";
import NextLink from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuCalendarRange } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { PiPhone } from "react-icons/pi";
import { RiCalendarTodoLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { BiCalendarEdit } from "react-icons/bi";

interface LinkProps {
  name: string;
  icon: IconType;
  href?: string;
  children?: {
    name: string;
    href?: string;
  }[];
}

const links: LinkProps[] = [
  { name: "Home", icon: RxDashboard, href: "/dashboard" },
  { name: "MKVanBinnen", icon: MdOutlineCalendarMonth, href: "/dashboard" },
  {
    name: "Document Management",
    icon: IoDocumentTextOutline,
    href: "/dashboard",
  },
  { name: "Patient Information", icon: IoIosPeople, href: "/dashboard" },
  { name: "Agenda", icon: LuCalendarRange, href: "/dashboard" },
  {
    name: "My Department",
    icon: CgFileDocument,
    children: [
      { name: "News", href: "/dashboard" },
      { name: "Members", href: "/dashboard" },
      { name: "To - Do", href: "/dashboard" },
      { name: "Form Task", href: "/dashboard" },
      { name: "Agenda", href: "/dashboard" },
      { name: "Follow Up System", href: "/dashboard" },
      { name: "Group Settings", href: "/dashboard" },
    ],
  },
  { name: "Phone Numbers", icon: PiPhone, href: "/dashboard" },
  { name: "My to do Protocols", icon: RiCalendarTodoLine, href: "/dashboard" },
  {
    name: "My Notifications",
    icon: IoNotificationsOutline,
    href: "/dashboard",
  },
  { name: "Knowledge Base", icon: LuClipboardList, href: "/dashboard" },
  { name: "Super Admin", icon: BiCalendarEdit, href: "/dashboard" },
  {
    name: "Admin",
    icon: TbEdit,
    children: [
      { name: "Agenda", href: "/dashboard" },
      { name: "News", href: "/dashboard" },
      { name: "Poll", href: "/dashboard" },
      { name: "Department Rules", href: "/dashboard" },
      { name: "Follow Up System", href: "/dashboard" },
    ],
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box
      as="aside"
      w={collapsed ? "60px" : { base: "full", md: "250px" }}
      pos="fixed" // ✅ sidebar stays fixed
      top={0}
      left={0}
      h="100vh"
      bg="#FFFFFF"
      color="#464B50"
      px={2}
      display="flex"
      flexDirection="column"
      borderRightColor="#CDD6E9"
      borderRightWidth={1}
      zIndex={1000}
    >
      {/* Logo + Collapse Icon */}
      <Flex align="center" gap={1} pt={collapsed ? 5 : 2}>
        {!collapsed && (
          <Flex flex={1} justifyContent="center" alignItems="center">
            <Image
              src="/images/logo.png"
              alt="MyApp Logo"
              boxSize="50px"
              borderRadius="md"
            />
          </Flex>
        )}

        <Box pl={collapsed ? 2 : 0}>
          <Icon
            as={TbArrowBarToLeft}
            boxSize="25px"
            color="gray.700"
            bg="gray.200"
            p="1"
            _hover={{ bg: "gray.50" }}
            cursor="pointer"
            transform={collapsed ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.3s ease"
            onClick={() => setCollapsed(!collapsed)}
          />
        </Box>
      </Flex>

      {/* Menu */}
      <Box flex="1" overflowY="auto" pb={4}>
        <VStack pt={5} align="stretch" gap={1}>
          {links.map((link) =>
            link.children ? (
              <DropdownItem key={link.name} link={link} collapsed={collapsed} />
            ) : (
              <Link
                key={link.name}
                as={NextLink}
                href={link.href ?? "#"}
                _hover={{ textDecor: "none", bg: "#E9F5F7", color: "#75C5C1" }}
                color="gray.600"
                p={2}
                borderRadius="md"
              >
                <Flex
                  align="center"
                  justify={collapsed ? "center" : "flex-start"}
                  gap={collapsed ? 0 : 2}
                  w="full"
                >
                  <Icon as={link.icon} boxSize={4} />
                  {!collapsed && <Text fontSize={14}>{link.name}</Text>}
                </Flex>
              </Link>
            )
          )}
        </VStack>
      </Box>
    </Box>
  );
}

function DropdownItem({
  link,
  collapsed,
}: {
  link: LinkProps;
  collapsed: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Flex
        align="center"
        gap={2}
        p={2}
        borderRadius="md"
        cursor="pointer"
        _hover={{ bg: "#E9F5F7", color: "#75C5C1" }}
        color="gray.600"
        onClick={() => setIsOpen(!isOpen)}
        justify={collapsed ? "center" : "flex-start"}
      >
        <Icon as={link.icon} boxSize={4} />
        {!collapsed && (
          <Text flex={1} fontSize={14}>
            {link.name}
          </Text>
        )}
        {!collapsed && (
          <Icon
            as={isOpen ? MdKeyboardArrowDown : MdKeyboardArrowUp}
            boxSize={6}
          />
        )}
      </Flex>

      {!collapsed && (
        <Collapsible.Root open={isOpen}>
          <Collapsible.Content>
            <VStack align="stretch" gap={0}>
              {link.children?.map((child) => (
                <Link
                  key={child.name}
                  as={NextLink}
                  href={child.href ?? "#"}
                  _hover={{ bg: "#E9F5F7", color: "#75C5C1" }}
                  bg={child.name.toLowerCase() === "to - do" ? "#E9F5F7" : ""}
                  color={
                    child.name.toLowerCase() === "to - do"
                      ? "#75C5C1"
                      : "gray.600"
                  }
                  pl={9}
                  py={2}
                  borderRadius="md"
                >
                  <Text fontSize={14}>{child.name}</Text>
                </Link>
              ))}
            </VStack>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Box>
  );
}
