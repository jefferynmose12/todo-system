"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  label?: string;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  children,
  ...rest
}) => {
  return <Button {...rest}>{children ?? label}</Button>;
};

export default CustomButton;
