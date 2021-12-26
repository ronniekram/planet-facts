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
  const [isActive, setIsActive] = useState<boolean>(active);

  const buttonStyles = [
    tw`font-antonio font-bold text-white uppercase`,
    tw`border border-white/50`,
    tw`hocus:(bg-grey-800)`,
    active && backgroundColors[activeColor],
    active && tw`border-none`,
    size === `TABLET` && tw`text-button-small leading-button-small tracking-button-small`,
    size === `DESKTOP` && tw`text-button-large leading-button-large tracking-button-large`,
    buttonSizes[size],
  ];

  const labelStyles = [
    tw`flex items-center content-center justify-between`,
    size === `TABLET` && tw`ml-5`,
    size === `DESKTOP` && tw`ml-7`,
  ];

  return (
    <button 
      type="button" 
      css={[buttonStyles]} 
      tw="flex items-center content-center justify-start"
      onClick={() => setIsActive(!active)}
    > 
      <div css={[`width: 7.0625rem;`, labelStyles]}>
        <span tw="opacity-50">{number}</span> 
        <span>{label}</span>
      </div>
    </button>
  );
};

export default Button;