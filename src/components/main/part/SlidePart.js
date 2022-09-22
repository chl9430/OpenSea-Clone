import React from 'react';
import styled from "styled-components"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import SlideItem from '../item/SlideItem';

const SlideStyle = styled.div`
display: flex;
  position: relative;
  justify-content: space-between;
  margin-left: 32px;
  margin-right: 32px;

  button {
    position: absolute;
    bottom: 132px;
    z-index: 1;
    background: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 10px;
  }

  .slide_right {
    right: -24px;
  }

  .slide_left {
    left: -24px;
  }
`

export default function SlidePart() {
  return (
    <SlideStyle className="slide_group">
        <button className="slide_left">
          <IoChevronBackSharp size="30" />
        </button>
        <button className="slide_right">
          <IoChevronForwardSharp size="30" />
        </button>
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
    </SlideStyle>
  )
}