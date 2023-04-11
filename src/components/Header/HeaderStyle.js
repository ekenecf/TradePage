import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999990;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media Screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
      cursor: pointer;
    }
  }

  @media Screen and (max-width: 768px) {
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
      cursor: pointer;
      /* transition: all */
    }
  }
  @media Screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
      cursor: pointer;
    }
  }
`;
export const Container2 = styled.div`
  width: 100vw;
  background-color: #1035ac;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999990;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: grey;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media Screen and (max-width: 1280px) {
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
      cursor: pointer;
      /* transition: all */
    }
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover {
      cursor: pointer;
      /* transition: all */
    }
  }
  @media Screen and (max-width: 425px) {
    width: 100%;
    height: 80px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
      cursor: pointer;
      /* transition: all */
    }
  } ;
`;
export const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* margin-top: 10px; */

  @media Screen and (max-width: 768px) {
    width: 90%;
    /* background-color: red; */
    :hover {
      cursor: pointer;
      transition: all;
    }
  }
`;
export const Wrapper2 = styled.div`
  width: 90%;
  height: 60px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* margin-top: 10px; */

  @media Screen and (max-width: 768px) {
    width: 90%;

    :hover {
      cursor: pointer;
      transition: all;
    }
  }

  @media Screen and (max-width: 425px) {
    width: 90%;
    :hover {
      cursor: pointer;
      transition: all;
    }
  }
`;
export const LogoDiv = styled(Link)`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  text-decoration: none;

  @media Screen and (max-width: 768px) {
    width: 100%;
    margin-left: 150px;
    margin-right: 100px;
  }
  @media Screen and (max-width: 425px) {
    width: 80%;
    margin-left: 90px;
  }
`;
export const Img = styled.img`
  width: 150px;
  height: 100%;
  object-fit: cover;
  position: absolute;

  @media Screen and (max-width: 768px) {
    width: 250px;
    height: 90%;
  }
  @media Screen and (max-width: 425px) {
    width: 200px;
    height: 70%;
  }
`;
export const NavWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 50px;
  color: silver;
  font-size: 14px;
  font-weight: 70;

  @media Screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const SignUp = styled.div`
  cursor: pointer;
  color: black;
`;
export const Nav2 = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  @media Screen and (max-width: 768px) {
    display: none;
  }
`;
export const CreateAccount2 = styled(Link)`
  width: 110px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media Screen and (max-width: 768px) {
    width: 150px;
    height: 35px;
    color: black;
    border: 1px solid rgb(99 82 171 / 32%);
    background-color: #eeeeee78;
  }
`;
export const CreateAccount = styled(Link)`
  width: 130px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 6px;
  text-decoration: none;
  color: white;

  @media Screen and (max-width: 768px) {
    width: 150px;
    height: 35px;
    border: 1px solid #e0e0e0;
  }
`;
export const Nav = styled(Link)`
  cursor: pointer;
  color: silver;
  text-decoration: none;
  :hover {
    color: white;
  }

  @media Screen and (max-width: 768px) {
    display: none;
  }
`;
export const Line = styled.span`
  width: 1px;
  height: 40%;
  background-color: silver;

  @media Screen and (max-width: 768px) {
    display: none;
  }
`;
export const Button2 = styled.div`
  width: 110px;
  height: 33px;
  border: 1px solid rgb(99 82 171 / 32%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media Screen and (max-width: 768px) {
    height: 35px;
    background-color: #eeeeee78;
  }
`;
export const Button = styled.div`
  width: 110px;
  height: 33px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media Screen and (max-width: 768px) {
    height: 35px;
  }
`;
export const NavRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media Screen and (max-width: 768px) {
    width: 280px;
    margin-left: 40px;
    margi :hover {
      cursor: pointer;
      transition: all 350ms;
    }
  }
  @media Screen and (max-width: 425px) {
    display: none;
  }
`;

export const NavDiv = styled.div`
  position: fixed;
  min-height: 49px;
  left: 0;
  z-index: 980;
  overflow-x: hidden;
  top: 0;
  height: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;

  @media Screen and (max-width: 1280px) {
  }
`;
export const MenuHold = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;

  @media Screen and (max-width: 768px) {
    float: right;
    margin-right: 90px;
  }
  @media Screen and (max-width: 425px) {
    margin-right: 10px;
  }
`;
export const Menu2 = styled(AiOutlineMenu)`
  width: 30px;
  height: 30px;
  display: none;

  @media Screen and (max-width: 768px) {
    display: block;
    color: white;
    :hover {
      cursor: pointer;
      transition: all 350ms;
    }
  }
`;
export const Menu = styled(AiOutlineMenu)`
  width: 30px;
  height: 30px;
  display: none;

  @media Screen and (max-width: 768px) {
    display: block;
    color: grey;
    :hover {
      cursor: pointer;
      transition: all 350ms;
    }
  }
`;
