import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const CardStyle = styled.a`
width: 100%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
transition: box-shadow 0.25s ease-in-out 0s;
overflow: hidden;

&:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
}

.card_image {
    img {
        width: 100%;
        height: 282.73px;
        object-fit: cover;
    }
}

.card_title {
    height: 80px;
    position: relative;

    .title_image {
        width: 78px;
        height: 78px;
        position: absolute;
        left: 16px;
        bottom: 16px;
        border: 4px solid white;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 8%) 0px 5px 10px;
        overflow: hidden;

        img {
            height: 100%;
        }
    }

    .title_name {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 33px;
        left: 110px;

        span {
            font-weight: 600;
            font-size: 16px;
            color: rgb(4, 17, 29);
            margin-right: 5px;
        }
    }
}
`

const ItemCard = (props) => {
    return (
        <CardStyle className="explore_card">
            <div className="card_image">
                <img src={props.mainImg} alt="이미지"></img>
            </div>
            <div className="card_title">
                <div className="title_image">
                    <img src={props.smallImg} alt="이미지"></img>
                </div>
                <div className="title_name">
                    <span>{props.title}</span>
                    {props.verified && <MdOutlineVerified/>}
                </div>
            </div>
        </CardStyle>
    )
}

export default ItemCard;