import { css } from "@emotion/react";
import theme from "@styles/theme";

export const buttonStyle = css`
  border: none;
  cursor: pointer;
  ${theme.font.captionBold1};
  color: white;
  background-color: ${theme.color.point.hero};
  &:hover {
    background-color: ${theme.color.point.assistive};
  }

  &:active {
    background-color: ${theme.color.point.navy};
  }
`;

export const loginButtonStyle = css`
  padding: 1.2rem 2.4rem;
  background-color: ${theme.color.point.hero};
  border-radius: 32px;
`;

export const actionButtonStyle = (actionType?: "action" | "join") => css`
  padding: ${actionType === "join" ? "1.6rem 3.3rem" : "1.4rem 5.8rem"};
  border-radius: 8px;
`;
