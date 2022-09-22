import ChartItem from "../item/ChartItem"
import { IoChevronDownSharp } from "react-icons/io5"
import styled from "styled-components"

const ChartStyle = styled.div`
.chart_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 58px;
    border-bottom: 2px solid rgba(229, 232, 235, 0.5);
    margin-bottom: 16px;

    .header_type > button {
        background: white;
        border: none;
        color: rgb(112, 122, 131);
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        transition: all 0.25s ease-in-out 0s;
        padding-bottom: 16px;
        border: 2px solid rgba(0, 0, 0, 0);
        margin-right: 25px;
    }

    .header_type > button:hover {
        color: rgb(53, 56, 64);
        border-bottom: 2px solid black;
    }

    .header_view {
        display: flex;
        margin-bottom: 8px;

        > button {
            background: white;
            border: 2px solid rgb(229, 232, 235);
            border-radius: 12px;
            padding: 11px 24px;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            height: 48px;
            margin-left: 20px;
        }

        > .view_dropdown {
            display: flex;
            align-items: center;
            padding-right: 18px;

            span {
                margin-right: 8px;
            }
        }
    }
}

.chart_content {
    display: flex;
    justify-content: center;

    .content_list {
        width: 584px;
        flex-grow: 1;
    }

    .content_list: first-child {
        margin-right: 50px;
    }

    .content_list: nth-child(2) {
        margin-left: 50px;
    }

    .list_header {
        display: flex;
        justify-content: space-between;
        padding: 4px 8px;

        div {
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            color: rgb(112, 122, 131);
        }

        div:first-child {
            width: 60%;
        }

        div:nth-child(2) {
            width: 20%;
            text-align: right;
        }

        div:last-child {
            width: 20%;
            text-align: right;
        }
    }
}
`

export default function ChartPart(props) {
    const chartContent = [];
    let indexContent;

    for(let i = 0; i < props.row; i++) { // 0, 1, 2
        indexContent = [];

        for(let j = i * Math.floor(props.data.length / props.row); j < (i + 1) * Math.floor(props.data.length / props.row); j++) { // 2; 2 < 3;
            indexContent.push(<ChartItem key={j * Math.random()} order={j + 1} img={props.data[j].img} title={props.data[j].title} floorPrice={props.data[j].floorPrice} volume={props.data[j].volume} verified={props.data[j].verified}/>);
        }

        chartContent.push(
            <div key={i * Math.random()} className="content_list">
                <div className="list_header">
                    <div>COLLECTION</div>
                    <div>FLOOR PRICE</div>
                    <div>VOLUME</div>
                </div>
                <div className="list_item">
                    {indexContent}
                </div>
            </div>
        )
    }

    return (
        <ChartStyle className="main_chart">
            <div className="chart_header">
            <div className="header_type">
                <button>Trending</button>
                <button>Top</button>
            </div>
            <div className="header_view">
                <button className="view_dropdown">
                    <span>24h</span>
                    <IoChevronDownSharp/>
                </button>
                <button>View all</button>
            </div>
            </div>
            <div className="chart_content">
                {chartContent}
            </div>
        </ChartStyle>
    )
}