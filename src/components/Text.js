import Styled from "styled-components";

export const Title = Styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0.5em 0 1em 0;
`;

export const SmallText = Styled.p`
    font-size: 0.8em;
    color: ${({ error, theme }) => (error ? theme.error : theme.text)};
`;
