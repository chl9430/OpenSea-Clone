import React from 'react';
import styled from "styled-components"
import { MdOutlineVerified } from "react-icons/md"

const CardStyle = styled.div`
border-radius: 16px;
overflow: hidden;
width: 312px;
height: 312px;
border: 1px solid rgba(0, 0, 0, 0.1);
position: relative;

> img {
    width: 100%;
    object-fit: cover;
}

.card_text {
    position: absolute;
    bottom: 0;
    padding-left: 16px;
    padding-bottom: 12px;
    color: white;

    .text_title {
    display: flex;
    align-items: center;

    div {
        margin-right: 5px;
    }
}
}

div {
    font-weight: 600;
    font-size: 16px;
    line-height: normal;
}
`

const ItemImage = styled.img``


export default function SlideItem(props) {
    return (
        <CardStyle className="slide_card">
            <ItemImage src={props.img} alt="이미지" />
            <div className="card_text">
                <div className="text_title">
                    <div>{props.title}</div>
                    <MdOutlineVerified />
                </div>
                <div>{props.owner}</div>
            </div>
        </CardStyle>
    )
}