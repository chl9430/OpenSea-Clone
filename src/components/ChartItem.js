import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const ChartItemStyle = styled.div`
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
        border-radius: 12px;
        margin-right: 24px;
    }

    div:nth-child(3) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-right: 4px;
    }
}

div:nth-child(2) {
    width: 20%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
}

div:last-child {
    width: 20%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
}
`

const ChartItem = () => {
    return (
    <ChartItemStyle className="chart_item">
        <div className="item_title">
            <div>1</div>
            <img src="https://i.seadn.io/gcs/files/e463e47af86531d7e950cfbeba12836f.png?w=500&auto=format" alt="chartImage"/>
            <div>50 Years of Atari</div>
            <MdOutlineVerified/>
        </div>
        <div>0.35ETH</div>
        <div>334ETH</div>
    </ChartItemStyle>
    )
}

export default ChartItem;