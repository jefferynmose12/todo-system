"use client";

import {
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
} from "@chakra-ui/react";
import React from "react";

interface CustomInputProps extends InputProps {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  groupProps?: InputGroupProps;
}

const CustomInput: React.FC<CustomInputProps> = ({
  startElement,
  endElement,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <InputGroup startElement={startElement} endElement={endElement}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={() => {}}
        {...rest}
      />
    </InputGroup>
  );
};

export default CustomInput;
