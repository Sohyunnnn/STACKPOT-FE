import { css } from "@emotion/react";
import theme from "@styles/theme";

export const cardStyle = css`
    width: 27.2rem;
    height: 23.9rem;
    padding: 1.6rem;
    border-radius: 2.4rem;
    background-color: white;
    box-shadow:  0px 4px 12px 0px rgba(13, 10, 44, 0.06);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 0.1rem solid ${theme.color.object.alternative};
`
export const titleContainer = css`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`
export const profileImageStyle = css`
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid ${theme.color.object.alternative};
    border-radius: 50%;
`
export const nicknameDdayContainer = css`
    width: 18.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`
export const nicknameStyle = css`
    width: 10.6rem;
    ${theme.font.caption2}
    color: ${theme.color.object.assistive};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const titleStyle = css`
    ${theme.font.bodyBold1}
    color: ${theme.color.base.darkgray};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const contentStyle = css`
    ${theme.font.caption2}
    color: ${theme.color.object.hero};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const categoriesContainer = css`
    display: flex;
    gap: 1rem;
`