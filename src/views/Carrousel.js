import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../components/Containers";
import { Title } from "../components/Text";

export default function Carrousel() {
  const carruselRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = carrouselItems.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide(currentSlide);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleScroll = () => {
    // current scroll / slide width = index slide
    setCurrentSlide(
      Math.floor(
        carruselRef.current.scrollLeft / carruselRef.current.clientWidth
      )
    );
  };

  const nextSlide = (currentSlide) => {
    // reset slide
    const nextSlide = currentSlide + 1 === maxSlides ? 0 : currentSlide + 1;
    // scroll position: slide width * index next slide
    const nextPosition = nextSlide * carruselRef.current.clientWidth;

    // scroll animation
    carruselRef.current.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });

    setCurrentSlide(nextSlide);
  };

  const lastSlide = () => {
    // reset slide
    const nextSlide = currentSlide === 0 ? maxSlides - 1 : currentSlide - 1;
    // scroll position: slide width * index next slide
    const nextPosition = nextSlide * carruselRef.current.clientWidth;

    // scroll animation
    carruselRef.current.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });

    setCurrentSlide(nextSlide);
  };

  return (
    <Container>
      <Title>Carrusel</Title>
      <CarrouselContainer>
        <Sliders ref={carruselRef} onScroll={handleScroll}>
          {React.Children.toArray(
            carrouselItems.map((photoKey, index) => {
              return (
                <Slide>
                  <img
                    src={`${imgUrl}/${photoKey}`}
                    alt={`carousel-${index}`}
                  />
                </Slide>
              );
            })
          )}
        </Sliders>
        <Controls className="back" onClick={lastSlide}>
          {"<"}
        </Controls>
        <Controls className="next" onClick={() => nextSlide(currentSlide)}>
          {">"}
        </Controls>
      </CarrouselContainer>
    </Container>
  );
}
const imgUrl = "https://loremflickr.com/1200/800";
const carrouselItems = ["sunset", "forest", "northern_lights", "iceland"];

const CarrouselContainer = styled.div`
  width: 100%;
  height: 650px;
  position: relative;

  @media screen and (max-width: 600px) {
    height: 450px;
  }
`;

const Sliders = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    /* width: 0px; */
    height: 3px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
  }
`;

const Controls = styled.button`
  width: 1.5em;
  height: 1.5em;
  /* padding: 0.5em; */
  border-radius: 50%;
  display: block;
  font-family: "Orbitron", sans-serif;
  font-size: 1.5em;
  color: rgba(171, 183, 183, 0.8);

  position: absolute;
  top: 50%;

  &:hover {
    background-color: rgba(250, 250, 250, 0.2);
  }

  &.back {
    left: 0.5em;
  }

  &.next {
    right: 0.5em;
  }
`;

const Slide = styled.article`
  width: 100%;

  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
