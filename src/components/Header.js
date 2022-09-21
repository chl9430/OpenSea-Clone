import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi"
import styled from "styled-components"

const HeaderStyle = styled.nav`
.header_navigation {
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid rgba(229, 232, 235, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    padding: 0 64px;
    box-sizing: border-box;
    background: white;

    a {
        color: black;
        text-decoration: none;
    }

    .header_home {
        display: flex;
        align-items: center;
        margin-right: 48px;
    
        .home_icon {
            width: 40px;
            height: 40px;
        }
    
        .home_text {
            margin-left: 10px;
            margin-top: 4px;
            font-size: 20px;
            font-weight: 700;
        }
    }
    
    .header_searchbar {
        flex-grow: 1;
        margin-right: 32px;
        position: relative;

        input {
            border-radius: 12px;
            border: 2px solid rgb(229, 232, 235);
            height: 45px;
            padding: 8px 32px;
            width: 100%;
        }

        svg {
            position: absolute;
            top: 15px;
            left: 15px;
            color: rgb(138, 147, 155);
        }
    }
    
    .header_menu {
        display: flex;
        align-items: center;
    
        a {
            padding: 0px 16px;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;
        }
    }
}

.header_intro {
    margin-top: 72px;
    height: 132px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: black;
        font-size: 40px;
        font-weight: 700;
    }
}
`

const Header = () => {
    return (
        <HeaderStyle className="main_header">
            <div className="header_navigation">
                <a className="header_home" href="index.js">
                    <img className="home_icon" src="https://opensea.io/static/images/logos/opensea.svg" alt="이미지"/>
                    <span className="home_text">OpenSea</span>
                </a>
                <div className="header_searchbar">
                    <HiOutlineSearch/>
                    <input type="text" placeholder="Search items, collections, and accounts"></input>
                </div>
                <ul className="header_menu">
                    <a href="index.js">Explore</a>
                    <a href="index.js">Stats</a>
                    <a href="index.js">Resources</a>
                    <a href="index.js">Create</a>
                    <div className="menu_user">
                        <a href="index.js"><MdOutlineAccountCircle size="32"/></a>
                        <a href="index.js"><MdOutlineAccountBalanceWallet size="32"/></a>
                    </div>
                </ul>
            </div>
            <div className="header_intro">
                <p>Explore, collect, and sell NFTs</p>
            </div>
        </HeaderStyle>
    )
}

export default Header;