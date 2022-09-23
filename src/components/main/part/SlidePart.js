import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideStyle = styled.div`
.slick-slider {
  .slick-arrow {
    z-index: 1;
    background: white;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px;
    color: black;

    > svg {
      transform: translate(0,-10px);
    }
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -50px;
  }
}
`

export default function SlidePart({dots, infinitySlide, slideSpeed, showSlideCount, draggable, children}) {
  const settings = {
    dots: dots,
    infinite: infinitySlide,
    speed: slideSpeed,
    slidesToShow: showSlideCount,
    draggable: draggable,
    nextArrow: <button><IoChevronForwardSharp size="30" /></button>,
    prevArrow: <button><IoChevronBackSharp size="30" /></button>,
  };

  return (
    <SlideStyle>
      <Slider {...settings}>
        {children}
      </Slider>
    </SlideStyle>
  )
}