import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const CardStyle = styled.div`
    border-radius: 16px;
    overflow: hidden;
    width: 312px;
    height: 312px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    .card_text {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        padding-left: 16px;
        padding-bottom: 12px;
        color: rgb(255, 255, 255);

        .text_title {
            display: flex;
            align-items: center;

            div {
                margin-right: 5px;
            }
        }

        div {
            font-weight: 600;
            font-size: 16px;
            line-height: normal;
        }
    }
`

const ExploreCard = () => {
    return (
    <CardStyle className="explore_card">
        <img src="https://i.seadn.io/gcs/static/promocards/SNKRZ.png?auto=format&w=800&h=800" alt="이미지"/>
        <div className="card_text">
            <div className="text_title">
                <div>THE SNKRZ NFT</div>
                <MdOutlineVerified/>
            </div>
            <div>Floor: 1850 KLAY</div>
        </div>
    </CardStyle>
    )
}

export default ExploreCard;