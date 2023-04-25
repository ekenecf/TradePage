import React from "react";
import { FiHome } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscMegaphone } from "react-icons/vsc";

import {
  BsQuestionLg,
  BsX,
  BsBarChartLine,
  BsFillPersonFill,
  BsPerson,
} from "react-icons/bs";
import { MdOutlineCloudUpload, MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNav = ({ setNav }) => {
  return (
    <Container>
      <Wrapper>
        <Button
          onClick={() => {
            setNav(false);
          }}
          style={{ border: "none", background: "none", width: 50, height: 50 }}
        >
          <BsX style={{ width: 40, height: 40, color: "grey" }} />
        </Button>
        <MidNav>
          <Span
            to="/"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <FiHome style={{ color: "#bdbcd1" }} /> Home
          </Span>
          <Span
            to="/about"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <MdOutlineLibraryBooks style={{ color: "#bdbcd1" }} /> About Us
          </Span>
          <Span
            to="/trading"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <BsBarChartLine style={{ color: "#bdbcd1" }} /> Trading{" "}
          </Span>
          <Span
            to="/affiliate"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <VscMegaphone style={{ color: "#bdbcd1" }} /> Affiliate Program{" "}
          </Span>
          <Span
            to="/get_started"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <MdOutlineCloudUpload style={{ color: "#bdbcd1" }} />
            Get Started
          </Span>
          <Span
            to="/questions"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <BsQuestionLg style={{ color: "#bdbcd1" }} />
            FAQ
          </Span>
          <Span
            to="/contact"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <IoPersonCircleSharp style={{ color: "#bdbcd1" }} />
            Contact Us
          </Span>
          <Span2
            to="/signup"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <BsFillPersonFill style={{ color: "#bdbcd1" }} />
            Create Account
          </Span2>
          <Span3
            to="/login"
            onClick={() => {
              setNav(false);
            }}
          >
            {" "}
            <BsPerson style={{ color: "#bdbcd1" }} />
            Sign In
          </Span3>
        </MidNav>
      </Wrapper>
    </Container>
  );
};

export default SideNav;

const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  background: linear-gradient(#fffff9, #c6ddf2);
  padding: 5px o;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 20px 100px 20px 5px;

  /* margin: 20px 10px 20px 35px; */
  cursor: pointer;

  :hover {
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px) {
    margin: 15px 0 15px 25px;
  }
`;

const Container = styled.div`
  width: 60%;
  position: fixed;
  min-height: 49px;
  left: 145px;
  z-index: 990;
  overflow-x: hidden;
  top: 150px;
  /* height: auto; */
  height: 70vh;
  background-color: white;
  /* opacity: 80%; */
  padding-top: 10px;
  /* border: 2px solid #623C9C; */
  border-radius: 8px;
  transition: all 0.3s linear;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: height ease 3s;

  @media Screen and (max-width: 425px) {
    width: 90%;
    left: 20px;
    /* margin-right: 100px; */
  }
`;
const Wrapper = styled.div`
  width: 100%;
  line-height: 35px;
  /* background-color: orange; */
  /* margin-top: 5px; */
`;

const MidNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 10px; */
  /* height: 00px; */
  /* align-items: center; */
`;

const Span = styled(Link)`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  border-bottom: 1px solid #e8e9ef;
  color: #7f7f8b;
  text-decoration: none;
  /* color: silver; */
  font-size: 18px;
  padding-left: 40px;
  font-weight: 400;
  transition: font-size ease 1s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover {
    cursor: pointer;
    font-size: 20px;
    /* color: red; */
  }
`;
const Span2 = styled(Link)`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  border-bottom: 1px solid #e8e9ef;
  color: #7f7f8b;
  text-decoration: none;
  /* color: silver; */
  font-size: 18px;
  padding-left: 40px;
  font-weight: 400;
  transition: font-size ease 1s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover {
    cursor: pointer;
    font-size: 20px;
    /* color: red; */
  }
`;
const Span3 = styled(Link)`
  width: 100%;
  height: 60px;
  /* background-color: red; */
  border-bottom: 1px solid #e8e9ef;
  color: #7f7f8b;
  text-decoration: none;
  /* color: silver; */
  font-size: 18px;
  padding-left: 40px;
  font-weight: 400;
  transition: font-size ease 1s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover {
    cursor: pointer;
    font-size: 20px;
    /* color: red; */
  }
`;
