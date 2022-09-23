import React from 'react';
import styled from 'styled-components';

import SliderItem from '../../common/item/SliderItem';
import SlideItem from '../item/SlideItem';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideStyle = styled.div`
`

export default function SlidePart() {
  return (
    <SlideStyle className="slide_group">
      <SliderItem>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
        <SlideItem/>
      </SliderItem>
    </SlideStyle>
  )
}