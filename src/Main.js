import styled from "styled-components";
import { IoChevronBackSharp, IoChevronForwardSharp, IoChevronDownSharp } from "react-icons/io5";

import Header from "./components/Header";
import ExploreCard from "./components/ExploreCard";
import ChartItem from "./components/ChartItem"
import ItemCard from "./components/ItemCard"

const MainStyle = styled.div`
padding: 0px 64px;

& * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.explore_group {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 0px 32px;
    margin-bottom: 30px;

    button {
      position: absolute;
      bottom: 50%;
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

    .explore_right {
      right: -24px;
    }

    .explore_left {
      left: -24px;
    }
}

.main_chart {
    margin-bottom: 30px;
    
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
}

.New_category {
    .category_header {
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        margin-bottom: 36px;
    }

    .category_content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
    }
}
`;

const Main = () => {
  return (
    <MainStyle>
      <Header />
      <div className="explore_group">
        <button className="explore_left">
          <IoChevronBackSharp size="30" />
        </button>
        <button className="explore_right">
          <IoChevronForwardSharp size="30" />
        </button>
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
      <div className="main_chart">
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
          <div className="content_list">
            <div className="list_header">
              <div>COLLECTION</div>
              <div>FLOOR PRICE</div>
              <div>VOLUME</div>
            </div>
            <div className="list_item">
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
            </div>
          </div>
          <div className="content_list">
            <div className="list_header">
              <div>COLLECTION</div>
              <div>FLOOR PRICE</div>
              <div>VOLUME</div>
            </div>
            <div className="list_item">
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
                <ChartItem/>
            </div>
          </div>
        </div>
      </div>
      <div className="New_category">
        <div className="category_header">
            New and notable
        </div>
        <div className="category_content">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;
