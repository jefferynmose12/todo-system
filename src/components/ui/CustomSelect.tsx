"use client";

import { useState } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

const pageSizes = createListCollection({
  items: [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
  ],
});

const CustomPageSizeSelect = ({
  onChange,
}: {
  onChange: (size: number) => void;
}) => {
  const [value, setValue] = useState<string[]>(["5"]);

  return (
    <Select.Root
      collection={pageSizes}
      value={value}
      onValueChange={(e) => {
        setValue(e.value);
        onChange(Number(e.value[0]));
      }}
      size="sm"
      width="70px"
      outline="none"
      border="none"
    >
      <Select.HiddenSelect />
      <Select.Control
        bg="#FFFF"
        borderRadius={30}
        borderWidth={1}
        borderColor={"#75C5C1"}
      >
        <Select.Trigger border="none" pl={5} pr={5}>
          <Select.ValueText color="#545464" placeholder="Select page size" />
        </Select.Trigger>
        <Select.IndicatorGroup pr={2}>
          <Select.Indicator color="#545464" />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content bg="gray.50" w="100px">
            {pageSizes.items.map((size) => (
              <Select.Item item={size} key={size.value} p={2} color="gray.600">
                {size.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default CustomPageSizeSelect;
