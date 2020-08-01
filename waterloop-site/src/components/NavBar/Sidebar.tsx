import React, { useState } from 'react';
import styled from "styled-components";
import BlackLogoImg from "../../static/img/logos/Icon_Yellow.png";
import WhiteLogoImg from "../../static/img/logos/logo.svg";
import IconYellowImg from "../../static/img/logos/logo.svg";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Flock from "../../pages/Flock";
import Team from "../../pages/Team";
import Sponsors from "../../pages/Sponsors";
import { NavLink } from "react-router-dom";
//import { slide as Menu } from 'react-burger-menu';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0%;
  width: 100%;
  height: 100%;
  background-color: #232635;
`;

const ListContainer = styled.div`
  z-index: 2000;
  padding: 2%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #FFFFFF;
  height: 100vh;
  width: 70vw;
  right:0;
  top:0;
  line-height: 300%;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  &.closed {
    width: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Link = styled(NavLink)`
  color: #010101;
  font-family: "IBM Plex Sans";
  margin: 1rem;
  font-size: 30px;
  font-weight: 600;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

const IconYellow = styled.img`
  margin-top: 20px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

const IconBlack = styled.img`
  height: 25px;
  margin: 1rem;
  display: flex;
`;

//mobile toggle button
const StyledToggle = styled.button`
  display: flex;
  z-index: 3000;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 52px;
  height: 40px;
  margin-top: 20px;
  margin-right: 0px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  outline: none;
  &.open{
    justify-content: center;
  }
`
//lines of the mobile toggle button
const ToggleLine = styled.div`
  width: 30px;
  height: 4px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-right: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  -webkit-transition: transform 0.4s ease-in-out,
                      background-color 0.2s ease-in-out,
                      height 0.2s ease-in-out;
  transition: transform 0.4s ease-in-out,
              background-color 0.2s ease-in-out,
              height 0.2s ease-in-out;
  &.open1{
    height: 3px !important;
    background-color: #010101;
    transform: translate(0%, 9px) rotate(45deg);
  }
  &.open2{
    height: 3px !important;
    transform: translate(200%, 0px);
    background-color: #010101;
  }
  &.open3{
    height: 3px !important;
    background-color: #010101;
    transform: translate(0%, -9px) rotate(-45deg);
  }
  `

enum Page {
  home = "Home",
  flock = "Flock",
  team = "Team",
  sponsors = "Sponsors",
  contact = "Contact"
}

interface Current {
  currpage: Page
}

const Sidebar = (props: any) => {

    const [ toggleOpen, setToggle ] = useState(false)

    return (
      <div>
          <SidebarContainer>
              <IconYellow src={BlackLogoImg}></IconYellow>
                <StyledToggle className={toggleOpen ? "open" : ""} onClick={() => setToggle(!toggleOpen)}>
                  <ToggleLine className={toggleOpen ? "open1" : ""}/>
                  <ToggleLine className={toggleOpen ? "open2" : ""}/>
                  <ToggleLine className={toggleOpen ? "open3" : ""}/>
                </StyledToggle>
              <ListContainer className={toggleOpen ? "" : "closed"}>
                  <div>
                <IconBlack src={WhiteLogoImg}></IconBlack>
                <Link to="/" onClick={() => setToggle(false)}>
                  Home
                </Link>
                </div>
                <div>
                <Link to="/the-flock" onClick={() => setToggle(false)}>
                  Flock
                </Link>
                </div>
                <div>
                <Link to="/team" onClick={() => setToggle(false)}>
                  Team
                </Link>
                </div>
                <div>
                <Link to="/sponsors" onClick={() => setToggle(false)}>
                  Sponsors
                </Link>
                </div>
                <div>
                <Link to="/contact" onClick={() => setToggle(false)}>
                  Contact
                </Link>
                </div>
                </ListContainer>
          </SidebarContainer>
      </div>
    );
  }
export default Sidebar;