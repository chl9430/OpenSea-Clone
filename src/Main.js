import styled from "styled-components";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import Header from "./components/Header";
import ExploreCard from "./components/ExploreCard";

const MainStyle = styled.div`
  .explore_group {
    background: green;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 0px 32px;

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
            <button>24h</button>
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
            <div className="list_item"></div>
          </div>
          <div className="content_list">
            <div className="list_header">
              <div>COLLECTION</div>
              <div>FLOOR PRICE</div>
              <div>VOLUME</div>
            </div>
            <div className="list_item"></div>
          </div>
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;
