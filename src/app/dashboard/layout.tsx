import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex>
      <Sidebar />
      <Box
        flex="1"
        minH="100vh"
        bg="gray.50"
        ml={{ base: "60px", md: "250px" }}
        overflowY="auto"
      >
        <Navbar />
        <Box pt="65px">{children}</Box>
      </Box>
    </Flex>
  );
}
