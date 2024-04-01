import React from "react";
import styled from "styled-components";

export interface IFLexDiv {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padding?: string | number;
  width?: string | number;
  gap?: string | number;
}

export const StyledFlexDiv = styled.div<IFLexDiv>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "8px"};
  padding: ${(props) => props.padding || "16px"};
  width: ${(props) => props.width || "100%"};
`;
