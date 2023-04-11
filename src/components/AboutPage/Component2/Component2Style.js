import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import bg from './bg3.svg';

export const Container = styled.div`
width: 100%;
height: auto;
/* background-color: green; */
background-image: url(${bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 500px;
padding: 80px 0;
/* padding: 72px 0; */
    /* perspective: 1000px; */

    @media Screen and (max-width: 425px){
        width: 100%;
        padding: 0;
        top: 420px
    }
`;
export const Wrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: pink; */
margin-top: 50px;

@media Screen and (max-width:425px){
    /* margin-top: 0; */
}
`;
export const White = styled.div`
width: 100%;
height: 200px;
/* position: relative; */
/* background-color: white; */
bottom: 432px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
/* opacity: 0; */
`;
export const TextsHold = styled.div`
width: 70%;
height:  auto;
/* background-color: brown; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
line-height: 25px;
/* font-family: poppins; */
/* position: absolute; */

@media SCreen and (max-width: 768px){
    width: 85%;
}
@media SCreen and (max-width: 425px){
    width: 95%;
}
`;
export const Img = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`;

export const H4 = styled.div`
color: #1035ac;
font-weight:  500;

`;
export const H1 = styled.div`
color: #1035ac;
font-size: 23px;
font-weight: 510;
margin: 10px 0;
letter-spacing: 1.5px;
font-family: 'roboto',sans-serif;

@media Screen and (max-width: 768px){
    font-size: 24px;
    letter-spacing: 0.1px;
}

`;
export const Content1 = styled.div`
color: #958e9e85;
margin-bottom: 20px;
font-weight: 100;
@media Screen and (max-width: 768px){
    color: grey;
    font-weight: 400;

}
`;
export const Line = styled.div`
width: 50px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;

`;
export const Content = styled.div`
font-size: 14.7px;
color: #958e9e;
/* font-family: 'roboto',sans-serif; */
font-family: poppins;
margin: 10px 0;
font-weight: 200;
@media Screen and (max-width: 768px){
    font-size: 11.85px;
    letter-spacing: 0.1px;
    color: grey;
    font-weight: 400;
}
@media Screen and (max-width: 425px){
    font-size: 10.9px;
    color: grey;
    font-weight: 500;
    letter-spacing: 0;
}
@media Screen and (max-width: 375px){
    font-size: 11.3px;
color: #958e9e;
    font-weight: 400;
    letter-spacing: 0;
}
`;
export const ButtonHold = styled(Link)`
text-decoration: none;
color: white;
/* background-color: #7856d5; */
background: linear-gradient(20deg,#1035ac,#000080);
width: 170px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: width ease 1s;
border-radius: 20px;
margin: 35px 0;
:hover{
/* width: 155px; */
cursor : pointer;
}
`;
export const Text = styled.div`
font-size: 15px;
color: white;
transition: margin-right ease 1s;

:hover{
    margin-right: 5px;
}
`;
export const Arrow = styled(AiOutlineArrowRight)`
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