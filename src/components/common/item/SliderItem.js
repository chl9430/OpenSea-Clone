import styled from "styled-components"
import Slider from 'react-slick';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const SliderItemStyle = styled.div`
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
}
`

export default function SliderItem(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        draggable: false,
        nextArrow: <button><IoChevronForwardSharp size="30"/></button>,
        prevArrow: <button><IoChevronBackSharp size="30"/></button>,
    };

    return (
        <SliderItemStyle>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </SliderItemStyle>
    )
}