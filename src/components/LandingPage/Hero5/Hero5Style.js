import { BsArrowRight } from "react-icons/bs";
/* import { AiOutlineArrowRight } from "react-icons/ai"; */
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from '../../../asset/bgnew.png'

export const Container = styled.div`
width: 100%;
height: 70vh;
background-image: url(${bg});
/* background: linear-gradient(20deg,#1035ac,#000080); */
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
background-position: center;

@media Screen and (max-width: 768px){
    /* background: none; */
    height: 80vh;
    margin-top: 10px;
}
@media Screen and (max-width: 425px){
    background: none;
    height: 100vh;
    /* padding-bottom: 80px; */
    /* margin-top: 10px; */
}
`;
export const Wrapper = styled.div`
width: 70%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 50px 0;

@media Screen and (max-width: 768px){
    padding: 0px;
    width: 90%;
}
@media Screen and (max-width: 425px){
    background: linear-gradient(20deg,#1035ac,#000080);
    padding: 0px;
    height: 80vh;
    width: 100%;
    justify-content: center;
    /* text-align: center; */
    align-items: center;
    margin-top: 150px;
}

@media Screen and (max-width: 320px){
    margin-top: 10px;
}
/* background-color: yellow; */
`;
export const LeftDiv = styled.div`
width: 35%;
@media Screen and (max-width: 768px){
    width: 90%;
    height: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    /* background-color: green; */
}
@media Screen and (max-width: 425px){
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* background-color: red; */
`;
export const RightDiv = styled.div`
/* background-color: red; */
width: 50%;
margin-bottom: 300px;
height: 100%;

@media Screen and (max-width: 768px){
    margin-top: 10px;
};

@media Screen and (max-width: 425px){
    display: none;
}
`;
export const BitcoinLink = styled.a`
color: #fff;
font-weight: 300;
text-decoration: none;
cursor: pointer;
`;
export const H1 = styled.div`
color: #ffff;
font-size: 25px;
font-weight: 400;
margin: 20px 0;

`;
export const Content = styled.div`
color: #F6F7FB;
font-size: 13px;
font-weight: 200;
margin: 10px 0 10px 0;
width: 100%;
line-height: 20px;

@media Screen and (max-width: 768px){
    font-size: 16px;
    width: 100%;
    line-height: 28px;
    color: silver;
    font-weight: 100;
    margin: 18px 0 10px 0;
    /* background-color: purple; */
}


@media Screen and (max-width: 425px){
    width: 98%;
    font-size: 12px;
    font-weight: 400;
    /* background-color: mediumspringgreen; */
}
`;
export const Content1 = styled.div`
color: #F6F7FB;
font-size: 15px;
font-weight: 300;
margin: 10px 0 10px 0;

/* width: 425px; */

@media Screen and (max-width: 768px){
    width: 100%;
    color: silver;
    font-size: 13px;
    
    /* background-color: red; */
}
@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    /* background-color: red; */
}
`;
export const Line = styled.div`
width: 50px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;
`;
export const ButtonHold = styled.div`
/* background-color: #7856d5; */
width: 160px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: width ease 1s;
border-radius: 20px;
border: 1px solid white;
margin-top: 30px;
text-decoration: none;
:hover{
/* width: 155px; */
cursor : pointer;
}
`;
export const ReadMore = styled(Link)`
font-size: 15px;
color: white;
transition: margin-right ease 1s;
cursor: pointer;
text-decoration: none;

:hover{
    margin-right: 5px;
}
`;
export const Arrow2 = styled(BsArrowRight)`
color: #fff;
font-size: 15px;
height: auto;
display:flex;
justify-content: center;
align-items: center;
transition: margin-left ease 1s;
margin-top: 2px;
margin-left: 3px;
:hover{
margin-left:5px;
cursor : pointer;
}
`;