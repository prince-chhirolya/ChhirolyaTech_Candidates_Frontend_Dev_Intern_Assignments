import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavbarMainDiv = styled.div`
  height: 4.5rem;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px gray;
`;
const NavbarMainDivLeft = styled.div`
  font-family: "Poiret One", sans-serif;
  color: white;
  font-size: 30px;
  margin-left: 150px;
`;
const NavbarMainDivMiddle = styled.div`
  color: white;
  display: flex;
  gap: 15px;
`;

const NavMiddleDiv = styled.div`
  margin:20px 5px;
  /* padding: 10px 5px; */
  position: relative;
  cursor: pointer;  
  &:hover{
    color: gray;
  }
`;
const NavbarMainDivRight = styled.div`
  color: white;
  margin-right: 100px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const DemoButton = styled.button`
  /* background-image: linear-gradient( to bottom, #020252, #a007a0); */
  background-image: radial-gradient(231.94% 231.94% at 50% 100%, rgb(138, 108, 255) 0px, rgba(53, 41, 128, 0) 25.24%), linear-gradient(rgba(243, 238, 255, 0), rgba(243, 238, 255, 0.04)), initial;
    background-color: rgba(147, 130, 255, 0.01);
    box-shadow: 0 0 0 0 rgba(16, 0, 51, .4), 0 2px 5px 0 rgba(16, 0, 51, .39), 0 8px 8px 0 rgba(16, 0, 51, .34), 0 19px 11px 0 rgba(16, 0, 51, .2), 0 34px 14px 0 rgba(16, 0, 51, .06), 0 53px 15px 0 rgba(16, 0, 51, .01), inset 0 0 12px 0 hsla(0, 0%, 100%, .08), inset 0 -8px 32px 0 #1e0d49;
    background: radial-gradient(231.94% 231.94% at 50% 100%, #8a6cff 0, rgba(53, 41, 128, 0) 25.24%), linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, .04)), rgba(147, 130, 255, .01);
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-image 2s ease-in-out;
  &:hover{
    /* margin-right: 50px; */
  background-image: linear-gradient( to bottom, #303065, #5b065b);
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  }
`
const LoginDiv = styled.div`
   cursor: pointer;  
  &:hover{
    color: gray;
  }
`
const DropdownDiv = styled.div`
  position: absolute;
  margin-top: 50px;
  top: 0px;
  left: 10px;
  border: solid 1px black;
`


const Navbar = () => {
  const [dropdown, setDropDown] = useState(false)
  const ref = useRef(null)
     
  const handleMouseOver = (e) => {
    setDropDown(true)
    console.log(e.target)
    // console.log(refer.current)
  }  
  const handleMouseOut = (e) => {
    // console.log(ref.current.className)
    setDropDown(false)
    console.log(e)
  }
  return (
    <NavbarMainDiv>
      <NavbarMainDivLeft >scale</NavbarMainDivLeft>
      <NavbarMainDivMiddle ref={ref}>
        <NavMiddleDiv onMouseOver={(e) => handleMouseOver(e)} onMouseOut={handleMouseOut}>Products
         {dropdown && <DropdownDiv >This is product</DropdownDiv>} 
         {/* <DropdownDiv >This is product</DropdownDiv>  */}
        </NavMiddleDiv>
        <NavMiddleDiv>Leaderboards</NavMiddleDiv>
        <NavMiddleDiv>Enterprise</NavMiddleDiv>
        <NavMiddleDiv>Government</NavMiddleDiv>
        <NavMiddleDiv>Customer</NavMiddleDiv>
        <NavMiddleDiv>Resources</NavMiddleDiv>
        
      </NavbarMainDivMiddle>
      <NavbarMainDivRight>
        <DemoButton >Book a Demo →</DemoButton>
        <LoginDiv>Log in</LoginDiv>
      </NavbarMainDivRight>
    </NavbarMainDiv>
  );
};

export default Navbar;
