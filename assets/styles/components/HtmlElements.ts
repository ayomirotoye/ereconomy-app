import { rgbToRgba } from "../../../utils/helpers";
import styled from "styled-components";

export const StyledP = styled.p`
display: inline-block;
padding: 6px 22px;
border-radius: 40px;
color:${(props => props.theme.lightMode.accentColor)};
background-color: ${(props => rgbToRgba(props.theme.lightMode.secondaryColor, 0.2))};
margin-bottom: 30px;
`

export const StyledH2 = styled.h2`
font-size: 51px;
line-height: 65.1px;
font-weight: 900;
margin: 15px 0
`

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const LeftAlignedH6 = styled("h6")`
  text-align: left;
  font-size: 56px;
  line-height: 1.18;
`;