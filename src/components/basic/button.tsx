import React, { useState } from "react";
import { SerializedStyles } from "@emotion/utils";
import tw, { styled, css, TwStyle } from "twin.macro";
import { backgroundColors, Color, textColors } from "../../utils/color-utils";

// ===== STYLES =====

// ===== TYPES =====
const buttonSize = [`TABLET`, `DESKTOP`];

export type Size = typeof buttonSize[number];

export const buttonSizes: {
  [key in Size]: (TwStyle | SerializedStyles)[];
} = {
  TABLET: [css`width: 17.5625rem; height: 2.5rem;`],
  DESKTOP: [css`width: 21.875rem; height: 2.5rem;`]
}

// ===== COMPONENTS =====

export interface ButtonProps {
  number: string;
  label: string;
  activeColor: Color;
  size: Size;
  active: boolean;
  onClick?: () => void;
}

const Button = ({ number, label, activeColor, size, active = false, onClick }: ButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const buttonStyles = [
    buttonSizes[size],
    active && backgroundColors[activeColor],
    active && tw`border-transparent`,
    tw`hocus:(bg-grey-800)`,
  ];

  return (
    <button type="button"> 
      <span>{number}</span> 
      <span>{label}</span>
    </button>
  )

};

export default Button;