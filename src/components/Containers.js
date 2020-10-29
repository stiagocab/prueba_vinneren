import Styled from "styled-components";

export const Container = Styled.section`
    width: 100%;
    padding: 1em;
    padding-bottom: 5em;
    background-color: ${({ color, theme }) => color ?? theme.background}
`;
