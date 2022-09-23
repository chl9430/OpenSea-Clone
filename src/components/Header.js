import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi"
import styled from "styled-components"

export default function Header() {
    return (
        <HeaderWrap>
            <LogoAnchor>
                <LogoImg src="https://opensea.io/static/images/logos/opensea.svg" alt="이미지" />
                <LogoSpan>OpenSea</LogoSpan>
            </LogoAnchor>
            <SearchBarWrap>
                <HiOutlineSearch />
                <SearchInput type="text" placeholder="Search items, collections, and accounts"/>
            </SearchBarWrap>
            <MenuUl>
                <MenuAnchor href="index.js">Explore</MenuAnchor>
                <MenuAnchor href="index.js">Stats</MenuAnchor>
                <MenuAnchor href="index.js">Resources</MenuAnchor>
                <MenuAnchor href="index.js">Create</MenuAnchor>
                <MenuAnchor href="index.js">
                    <MdOutlineAccountCircle size="32" />
                </MenuAnchor>
                <MenuAnchor href="index.js">
                    <MdOutlineAccountBalanceWallet size="32" />
                </MenuAnchor>
            </MenuUl>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`
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
`

const LogoAnchor = styled.a`
color: black;
text-decoration: none;
display: flex;
align-items: center;
margin-right: 48px;
`

const LogoImg = styled.img`
width: 40px;
height: 40px;
`

const LogoSpan = styled.span`
margin-left: 10px;
margin-top: 4px;
font-size: 20px;
font-weight: 700;
`

const SearchBarWrap = styled.div`
flex-grow: 1;
margin-right: 32px;
position: relative;

svg {
    position: absolute;
    top: 15px;
    left: 15px;
    color: rgb(138, 147, 155);
}
`

const SearchInput = styled.input`
border-radius: 12px;
border: 2px solid rgb(229, 232, 235);
height: 45px;
padding: 8px 32px;
width: 100%;
`

const MenuUl = styled.ul`
display: flex;
align-items: center;
`

const MenuAnchor = styled.a`
padding: 0px 16px;
font-weight: 600;
font-size: 16px;
line-height: 1.5;
text-decoration: none;
color: black;
`