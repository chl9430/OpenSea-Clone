import styled from "styled-components"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

import ExploreCard from "./ExploreCard"

const ExploreStyle = styled.div`
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
`

const Explore = () => {
    return (
        <ExploreStyle className="explore_group">
            <button className="explore_left"><IoChevronBackSharp size="30"/></button>
            <button className="explore_right"><IoChevronForwardSharp size="30"/></button>
            <ExploreCard/>
            <ExploreCard/>
            <ExploreCard/>
            <ExploreCard/>
        </ExploreStyle>
    )
}

export default Explore;