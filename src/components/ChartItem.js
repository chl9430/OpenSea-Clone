import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const ChartItemStyle = styled.div`

`

const ChartItem = () => {
    return (
    <ChartItemStyle className="chart_item">
        <div className="item_title">
            <div>1</div>
            <img src="https://i.seadn.io/gcs/files/e463e47af86531d7e950cfbeba12836f.png?w=500&auto=format" alt="chartImage"></img>
            <div>50 Years of Atari</div>
            <MdOutlineVerified/>
        </div>
        <div>0.35ETH</div>
        <div>334ETH</div>
    </ChartItemStyle>
    )
}

export default ChartItem;