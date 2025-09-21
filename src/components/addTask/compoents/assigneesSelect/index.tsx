"use client";

import {
  Badge,
  Combobox,
  Portal,
  Text,
  Wrap,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

type Assignee = {
  name: string;
  src: string;
};

const assignees: Assignee[] = [
  { name: "Alice Fin", src: "https://i.pravatar.cc/40?img=1" },
  { name: "Bob Smith", src: "https://i.pravatar.cc/40?img=2" },
  { name: "Charlie Gray", src: "https://i.pravatar.cc/40?img=3" },
];

interface AssigneesSelectProps {
  value?: Assignee[];
  onChange?: (val: Assignee[]) => void;
}

const AssigneesSelect = ({ value = [], onChange }: AssigneesSelectProps) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = useMemo(
    () =>
      assignees.filter((a) =>
        a.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const collection = useMemo(
    () =>
      createListCollection({
        items: filteredItems,
        //getKey: (a) => a.name,
      }),
    [filteredItems]
  );

  return (
    <Combobox.Root<Assignee>
      multiple
      closeOnSelect
      width="320px"
      value={value.map((a) => a.name)}
      collection={collection}
      onValueChange={(details) => {
        const selected = details.value
          .map((key) => assignees.find((a) => a.name === key))
          .filter(Boolean) as Assignee[];
        onChange?.(selected);
      }}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
    >
      <Wrap gap="2">
        {value.map((a) => (
          <Badge key={a.name} display="flex" alignItems="center" gap="1">
            {/* <Avatar src={a.src} size="xs" /> */}
            {a.name}
          </Badge>
        ))}
      </Wrap>

      <Combobox.Label>Select Assignees</Combobox.Label>

      <Combobox.Control>
        <Combobox.Input />
        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content
            bg="#FFFFFF"
            borderWidth="1px"
            borderColor="#CDD6E9"
            shadow="none"
            zIndex={1500}
            p={2}
            w="200px"
          >
            {filteredItems.map((item) => (
              <Combobox.Item
                item={item}
                key={item.name}
                bg="transparent"
                py={1}
                justifyContent="flex-start"
                alignItems={"center"}
              >
                <Text color="gray.800">{item.name}</Text>{" "}
              </Combobox.Item>
            ))}
            <Combobox.Empty>No people found</Combobox.Empty>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default AssigneesSelect;
