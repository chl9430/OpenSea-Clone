import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components"

const HeaderStyle = styled.nav`
    .header_navigation {
        display: flex;
        height: 72px;
        padding: 0px 32px;
        align-items: center;
        justify-content: space-between;

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
            border-radius: 12px;
            flex-grow: 1;
            margin-right: 32px;
            border: none;
            background: red;
            height: 48px;
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
        background: blue;
        height: 132px;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            color: white;
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
                <input className="header_searchbar" type="text"></input>
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