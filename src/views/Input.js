import React, { useState } from "react";
import { Container } from "../components/Containers";
import { SmallText, Title } from "../components/Text";
import styled from "styled-components";

export default function Input() {
  const maxLength = 140;
  const [counter, setCounter] = useState(maxLength);
  const [isError, setIsError] = useState(false);
  const [hasText, setHasText] = useState(false);

  const onChangeText = (e) => {
    const textLength = e.target.value.split("").length;
    let nextCounter = maxLength - textLength;
    setCounter(nextCounter);
    setIsError(nextCounter < 0);
    setHasText(textLength > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Container>
      <Title>Contador de texto</Title>
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <InputText onChange={onChangeText} name="input" />

          <button
            className={`send ${!hasText || isError ? "disable" : ""}`}
            disabled={!hasText || isError}
          >
            Enviar
          </button>
          <SmallText error={isError}>{counter}</SmallText>
        </form>
      </InputContainer>
    </Container>
  );
}

const InputText = styled.textarea`
  width: 100%;
  height: 200px;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1em;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const InputContainer = styled.div`
  max-width: 400px;
  & ${SmallText} {
    margin-top: 1.5em;
    margin-right: 1em;
    float: right;
  }

  & button {
    margin-top: 1em;
    padding: 0.5em 1em;

    &.delete {
      float: left;
      color: ${({ theme }) => theme.error};
    }

    &.send {
      float: right;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.primary};
      color: white;
    }

    &.disable {
      background-color: grey;
    }

    @media screen and (max-width: 600px) {
      width: 80%;
    }
  }
`;
