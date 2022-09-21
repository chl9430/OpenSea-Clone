import { MdOutlineVerified } from "react-icons/md"
import styled from "styled-components"

const ItemCardStyle = styled.div`
width: 492px;
height: 360.75px;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
transition: box-shadow 0.25s ease-in-out 0s;
position: relative;
overflow: hidden;

&:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
}

.card_image {
    height: 0;

    img {
        width: 100%;
    }
}

.card_title {
    display: flex;
    padding: 16px;

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
            width: 100%;
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

const ItemCard = () => {
    return (
        <ItemCardStyle className="item_card">
            <div className="card_image">
                <img src="https://i.seadn.io/gae/SUiD7Wp1tpzKpzjPCWiiS8ND784aRxDRRywiAKUyVCplW3DKfAQWp4Y9bQhMIFjLbUOJntqNvRlax-9eiKlDV_nGZFzhPahSAPuykA?auto=format&h=400" alt="이미지"></img>
            </div>
            <div className="card_title">
                <div className="title_image">
                    <img src="https://i.seadn.io/gcs/files/93ea4724fcb5596e34f3af1b63c9d7c6.gif?auto=format&w=128&h=128" alt="이미지"></img>
                </div>
                <div className="title_name">
                    <span>MoonCats</span>
                    <MdOutlineVerified/>
                </div>
            </div>
        </ItemCardStyle>
    )
}

export default ItemCard;