import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import pic from "../../asset/elite-gain.png";
import logo from "../../asset/elite-gain.png";

import {
  Container,
  Container2,
  Wrapper,
  Wrapper2,
  LogoDiv,
  NavWrap,
  Nav,
  Button,
  Button2,
  Line,
  Img,
  NavRight,
  NavDiv,
  MenuHold,
  Menu,
  Menu2,
  Nav2,
  CreateAccount,
  CreateAccount2,
} from "./HeaderStyle";
import SideNav from "./sideNav";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 66) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);
  });

  return (
    <>
      {header ? (
        <Container2>
          <Wrapper>
            <LogoDiv to="/">
              <Img src={logo} alt="logo" />
            </LogoDiv>
            <NavWrap>
              <Nav2 to="/about">About Us</Nav2>
              <Nav2 to="/trading">Trading</Nav2>
              <Nav2 to="/affiliate">Affiliate</Nav2>
              <Nav2 to="/get_started">Get Started</Nav2>
              <Nav2 to="/questions">FAQ</Nav2>
              <Nav2 to="/contact">Contact</Nav2>
              <Line></Line>
              <NavRight>
                <CreateAccount2 to="/signup">Create Account</CreateAccount2>
                <Button2 style={{ color: "black" }}>
                  <NavLink to="/login">Log In</NavLink>
                </Button2>
              </NavRight>
            </NavWrap>
            <MenuHold
              onClick={() => {
                setNav(true);
              }}
            >
              <Menu />
            </MenuHold>
          </Wrapper>
        </Container2>
      ) : (
        <Container setHeader={setHeader}>
          <Wrapper2>
            <LogoDiv to="/">
              <Img src={pic} alt="logo" />
            </LogoDiv>
            <NavWrap>
              <Nav to="/about">About Us</Nav>
              <Nav to="/trading">Trading</Nav>
              <Nav to="/affiliate">Affiliate</Nav>
              <Nav to="/get_started">Get Started</Nav>
              <Nav to="/questions">FAQ</Nav>
              <Nav to="/contact">Contact</Nav>
              <Line></Line>
              <NavRight>
                <CreateAccount to="/signup">Create Account</CreateAccount>
                <Button>
                  <NavLink to="/login">Log In</NavLink>
                </Button>
              </NavRight>
            </NavWrap>
            <MenuHold
              onClick={() => {
                setNav(true);
              }}
            >
              <Menu2 />
            </MenuHold>
          </Wrapper2>
        </Container>
      )}
      {nav ? (
        <NavDiv>
          {" "}
          <SideNav setNav={setNav} />{" "}
        </NavDiv>
      ) : null}
    </>
  );
};

export default Header;
