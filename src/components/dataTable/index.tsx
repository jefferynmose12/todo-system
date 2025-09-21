"use client";

import {
  Table,
  Avatar,
  AvatarGroup,
  IconButton,
  HStack,
  Box,
  Flex,
  Text,
  Menu,
  Portal,
  Image,
  Pagination,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFlag } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import CustomPageSizeSelect from "../ui/CustomSelect";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { getPriorityColor } from "../../../utils";
import { Item } from "@/type";
import { useTasks } from "@/hook/useTask";

const DataTable = ({ data }: { data: Item[] }) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState(5);
  const count = data.length;
  const { updateStatus } = useTasks();

  const currentData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Box
      borderWidth={1}
      borderColor="#CDD6E9"
      rounded="lg"
      overflow="hidden"
      shadow="none"
      mt={3}
    >
      <Table.Root size="md" variant="outline">
        <Table.Header bg="#F7F7F7">
          <Table.Row>
            <Table.ColumnHeader
              py={6}
              pl={6}
              borderRightWidth={2}
              borderRightColor="#CDD6E9"
              color="#1A1C1E"
              fontWeight="bold"
              fontSize={14}
            >
              Name
            </Table.ColumnHeader>
            <Table.ColumnHeader
              py={6}
              pl={6}
              borderRightWidth={2}
              borderRightColor="#CDD6E9"
              color="#1A1C1E"
              fontWeight="bold"
              fontSize={14}
            >
              Date
            </Table.ColumnHeader>
            <Table.ColumnHeader
              py={6}
              pl={6}
              borderRightWidth={2}
              borderRightColor="#CDD6E9"
              color="#1A1C1E"
              fontWeight="bold"
              fontSize={14}
            >
              Assignee
            </Table.ColumnHeader>
            <Table.ColumnHeader
              py={6}
              pl={6}
              color="#1A1C1E"
              fontWeight="bold"
              fontSize={14}
            >
              Priority
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body bg="#FFFF">
          {currentData?.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell
                py={6}
                pl={6}
                color="#464B50"
                fontWeight="medium"
                fontSize={14}
                borderTopWidth={2}
                borderTopColor="#CDD6E9"
              >
                {item.name}
              </Table.Cell>
              <Table.Cell
                py={6}
                pl={6}
                color="#464B50"
                fontWeight="medium"
                fontSize={14}
                borderTopWidth={2}
                borderTopColor="#CDD6E9"
              >
                {item.date}
              </Table.Cell>
              <Table.Cell
                py={6}
                pl={6}
                color="#464B50"
                fontWeight="medium"
                fontSize={14}
                borderTopWidth={2}
                borderTopColor="#CDD6E9"
              >
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
                  <Avatar.Root borderWidth={2} borderColor="#fff" bg="#F6ECFF">
                    <Avatar.Fallback color="gray.500">+1</Avatar.Fallback>
                  </Avatar.Root>
                </AvatarGroup>
              </Table.Cell>
              <Table.Cell
                py={6}
                pl={6}
                color="#464B50"
                fontWeight="medium"
                fontSize={14}
                borderTopWidth={2}
                borderTopColor="#CDD6E9"
              >
                <Flex justifyContent="space-between" align="center">
                  <Flex align="center" gap={2}>
                    <FaFlag color={getPriorityColor(item.priority)} />
                    <Text>{item.priority}</Text>{" "}
                  </Flex>

                  <Box ml="auto">
                    <Menu.Root>
                      <Menu.Trigger asChild outline="none">
                        <IconButton
                          aria-label="More options"
                          variant="ghost"
                          size="sm"
                          bg="#F7F7F7"
                          borderRadius={5}
                          px={2}
                          py={0}
                          mr={3}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          color="gray.800"
                        >
                          <HiDotsHorizontal />
                        </IconButton>
                      </Menu.Trigger>
                      <Portal>
                        <Menu.Positioner>
                          <Menu.Content
                            bg="gray.200"
                            borderWidth={1}
                            borderColor="#CDD6E9"
                            shadow="none"
                            rounded="md"
                          >
                            {item.status === "to-do" && (
                              <>
                                <Menu.Item
                                  value="in-progress"
                                  px={2}
                                  py={2}
                                  my={1}
                                  color="gray.600"
                                  _hover={{ color: "gray.200" }}
                                  onClick={() =>
                                    updateStatus(item.id, "in-progress")
                                  }
                                >
                                  <Image
                                    src="/images/progress.png"
                                    alt="progress"
                                  />
                                  <Box flex="1" ml={1}>
                                    Move to In Progress
                                  </Box>
                                </Menu.Item>

                                <Menu.Item
                                  value="completed"
                                  px={2}
                                  py={2}
                                  my={1}
                                  color="gray.600"
                                  _hover={{ color: "gray.200" }}
                                  onClick={() =>
                                    updateStatus(item.id, "completed")
                                  }
                                >
                                  <Image
                                    src="/images/complete.png"
                                    alt="complete"
                                  />
                                  <Box flex="1" ml={1}>
                                    Mark as Completed
                                  </Box>
                                </Menu.Item>
                              </>
                            )}

                            {item.status === "in-progress" && (
                              <Menu.Item
                                value="completed"
                                px={2}
                                py={2}
                                my={1}
                                color="gray.600"
                                _hover={{ color: "gray.200" }}
                                onClick={() =>
                                  updateStatus(item.id, "completed")
                                }
                              >
                                <Image
                                  src="/images/complete.png"
                                  alt="complete"
                                />
                                <Box flex="1" ml={1}>
                                  Mark as Completed
                                </Box>
                              </Menu.Item>
                            )}

                            {item.status === "completed" && (
                              <Box px={3} py={2} color="gray.500" fontSize="sm">
                                No further actions
                              </Box>
                            )}
                          </Menu.Content>
                        </Menu.Positioner>
                      </Portal>
                    </Menu.Root>
                  </Box>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <HStack
        justify="space-between"
        px="4"
        py="3"
        borderTopWidth="1px"
        borderTopColor="#CDD6E9"
        bg="#FFF"
      >
        <Pagination.Root
          count={count}
          pageSize={pageSize}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <ButtonGroup size="sm" bg="#F7F7F7" py={1} px={4} borderRadius={50}>
            <IconButton
              borderRadius="full"
              bg="transparent"
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              <MdKeyboardDoubleArrowLeft />
            </IconButton>

            <Pagination.PrevTrigger asChild>
              <IconButton
                borderRadius="full"
                bg="transparent"
                disabled={page === 1}
              >
                <MdKeyboardArrowLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(p) => {
                const active = Number(p.value) === Number(page);

                return (
                  <IconButton
                    fontSize={14}
                    borderRadius="full"
                    borderWidth={1}
                    borderColor="#75C5C1"
                    color={active ? "#ffff" : "#75C5C1"}
                    bg={active ? "#75C5C1" : "#fff"}
                  >
                    {p.value}
                  </IconButton>
                );
              }}
            />

            <Pagination.NextTrigger asChild>
              <IconButton
                borderRadius="full"
                bg="transparent"
                disabled={page === Math.ceil(count / pageSize)}
              >
                <MdKeyboardArrowRight />
              </IconButton>
            </Pagination.NextTrigger>

            <IconButton
              borderRadius="full"
              bg="transparent"
              onClick={() => setPage(Math.ceil(count / pageSize))}
              disabled={page === Math.ceil(count / pageSize)}
            >
              <MdKeyboardDoubleArrowRight />
            </IconButton>
          </ButtonGroup>
        </Pagination.Root>

        <Flex gap={2} align="center">
          <Text fontSize={14} color="#1A1C1E" fontWeight="semibold">
            Rows Per page:
          </Text>
          <CustomPageSizeSelect onChange={(e) => setPageSize(e)} />
        </Flex>
      </HStack>
    </Box>
  );
};

export default DataTable;
