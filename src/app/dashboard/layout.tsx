"use client";

import { ReactNode, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Flex>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Box
        flex="1"
        minH="100vh"
        bg="gray.50"
        ml={collapsed ? "60px" : { base: "60px", md: "250px" }}
        transition="margin 0.3s ease"
        overflowY="auto"
      >
        <Navbar collapsed={collapsed} />
        <Box pt="65px">{children}</Box>
      </Box>
    </Flex>
  );
}
