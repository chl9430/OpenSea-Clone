import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const ChartItemStyle = styled.a`
display: flex;
align-items: center;
padding: 12px 8px;

&:hover {
    background: rgba(229, 232, 235, 0.2);
}

.item_title {
    display: flex;
    align-items: center;
    width: 60%;

    div:first-child {
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: rgb(112, 122, 131);
        width: 32px;
    }

    img {
        width: 72px;
        height: 72px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        margin-right: 24px;
    }

    div:nth-child(3) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 4px;
        text-align: left;
    }
}

.item_floorprice {
    width: 20%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
}

.item_volume {
    width: 20%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
}
`

export default function ChartItem(props) {
    return (
        <ChartItemStyle className="chart_item">
                <div className="item_title">
                    <div>{props.order}</div>
                    <img src={props.img} alt="chartImage"/>
                    <div>{props.title}</div>
                    {props.verified && <MdOutlineVerified/>}
                </div>
                <div className="item_floorprice">{props.floorPrice}</div>
                <div className="item_volume">{props.volume}</div>
        </ChartItemStyle>
    )
}