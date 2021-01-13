import styled from 'styled-components';

export const NavbarPage = styled.div `
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const LogoNavbar = styled.div `
    width: 50%;
    float: left;
    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }

`

export const NavLogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const NavInput = styled.input`
    position: absolute;
    top: 13px;
    right: 25px;
    display: none;
    &:checked ~ .ul-list {
        display: block;
    }

    &:checked ~ label {
        background: url('../images/Navbar/close.png') no-repeat ;
        background-size: cover;
    }
`

export const NavLabel = styled.label`
    display: block;
    width: 15px;
    height: 15px;
    background: url('../images/Navbar/open.png') no-repeat ;
    background-size: cover;
    padding: 20px;
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 25px;
    @media (min-width : 992px) {
        display: none
    }
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding:0;
    @media (max-width : 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
    }
`

export const ListItem = styled.li`

    display: inline-block;
    @media (max-width : 991px) {
        display: block;
        text-align: center;
    }
`

export const ListItemLink = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover
    {
        color: #eb5424
    }
`

export const Link = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover
    {
        color: #eb5424
    }
`
