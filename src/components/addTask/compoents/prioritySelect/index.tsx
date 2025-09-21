"use client";

import {
  Combobox,
  Portal,
  Text,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import { FaFlag } from "react-icons/fa";
import { getPriorityColor } from "../../../../../utils";

const PrioritySelect = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (val: string | null) => void;
}) => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: priorities,
    filter: contains,
  });

  return (
    <Combobox.Root
      collection={collection}
      width="320px"
      value={value ? [value] : []}
      onValueChange={(e) => {
        console.log("prioity", e);
        onChange?.(e.value[0] ?? null);
      }}
      onInputValueChange={(e) => {
        filter(e.inputValue);
      }}
    >
      <Combobox.Control h={5}>
        <Combobox.Input
          outline="none"
          border="none"
          minH={5}
          placeholder="Select Priority"
          color="gray.800"
          
        />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger onClick={() => onChange?.(null)} />
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
            <Combobox.Empty>No items found</Combobox.Empty>

            {collection.items.map((item) => (
              <Combobox.Item
                item={item}
                key={item.label}
                bg="transparent"
                py={1}
                justifyContent="flex-start"
                alignItems={"center"}
              >
                <FaFlag color={getPriorityColor(item.label)} />
                <Text color="gray.800">{item.label}</Text>{" "}
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default PrioritySelect;

const priorities = [
  { label: "Urgent", value: "urgent" },
  { label: "Important", value: "important" },
  { label: "Normal", value: "normal" },
  { label: "Low", value: "low" },
];
