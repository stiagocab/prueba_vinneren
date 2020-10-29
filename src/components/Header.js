import React from "react";
import Styled from "styled-components";

const HeaderApp = Styled.header`
    background-color: ${({ theme }) => theme.primary};
    padding: 1em;
`;

const Menu = Styled.ul`
  list-style: none;
  padding: 0;
  display: flex;


  & li {
    margin-right: 1em;
  }

  @media screen and (max-width: 600px) {
    & li {
      margin: 0 0.5em;
    }
  }
`;

const Button = Styled.button`
  border-bottom: 2px solid transparent;
  border-bottom-color: ${({ isSelected, theme }) =>
    isSelected ? theme.accent : "transparent"};

  color: white;

  padding: 0.5em 1em;
  padding: 0.5em 1em;

  &:hover {
    border-bottom-color: white;
    background-color: rgba(100, 100, 100, 0.1);
  }

  
  @media screen and (max-width: 600px) {
    & li {
      padding: 0.5em;
    }
  }
`;

const Header = ({ selected, onChange }) => {
  return (
    <HeaderApp>
      <Menu>
        <li>
          <Button
            onClick={() => {
              onChange(0);
            }}
            isSelected={selected === 0}
          >
            Reloj
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              onChange(1);
            }}
            isSelected={selected === 1}
          >
            Carrusel
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              onChange(2);
            }}
            isSelected={selected === 2}
          >
            Input
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              onChange(3);
            }}
            isSelected={selected === 3}
          >
            Todos
          </Button>
        </li>
      </Menu>
    </HeaderApp>
  );
};

export default Header;

Header.defaultProps = {
  selected: 0,
};
