import React, { useEffect, useState } from "react";
import { Container } from "../components/Containers";
import { Title } from "../components/Text";
import { doubleNumber } from "../helpers";
import styled from "styled-components";

export default function ClockComponent() {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const initialHour = new Date();
    setSeconds(initialHour.getSeconds());
    setMinutes(initialHour.getMinutes());
    setHours(initialHour.getHours());
    setIsLoad(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      let nextSecond = seconds + 1;
      if (nextSecond === 60) {
        setSeconds(0);
        let nextMinute = minutes + 1;
        if (nextMinute === 60) {
          setMinutes(0);
          let nextHour = hours + 1;
          if (nextHour === 24) {
            setHours(0);
          } else {
            setHours(nextHour);
          }
        } else {
          setMinutes(nextMinute);
        }
      } else {
        setSeconds(nextSecond);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds, minutes, hours]);

  return (
    <Container>
      <Title>Reloj</Title>
      <ClockBox>
        {isLoad ? (
          <ClockText>00:00</ClockText>
        ) : (
          <ClockText>
            {doubleNumber(hours)}
            <span style={{ opacity: seconds % 2 === 0 ? 1 : 0 }}>:</span>
            {doubleNumber(minutes)}
          </ClockText>
        )}
      </ClockBox>
    </Container>
  );
}

const ClockText = styled.p`
  font-family: "Orbitron", sans-serif;
  font-size: 3em;
  color: rgb(33, 235, 31);
  text-align: center;
`;

const ClockBox = styled.div`
  padding: 2em;
  background-color: black;
  max-width: 400px;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
