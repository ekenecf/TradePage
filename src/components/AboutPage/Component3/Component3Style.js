import { Link } from "react-router-dom";
import styled from "styled-components";
import img from './bg10.svg'
import circle from './circle10.svg'

export const Container = styled.div`
width: 100%;
height: 90vh;
margin-top: 500px;
background-color: #F6F7FB;
background-image: url(${img});
object-fit: cover;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #E8E9EF;
padding-top: 70px;
padding-bottom: 180px;

@media Screen and (max-width: 768px){
    height: auto;
}

@media Screen and (max-width: 425px){
    width: 100%;
    padding: 0 0 20px 0;
    margin-top: 150px;
}
`;

export const Wrapper  = styled.div`
width: 85%;
height: 90vh;
/* padding-top:  100px;  */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    margin-top: 200px;
    width: 100%;
}
@media Screen and (max-width: 425px){
    margin-top: 200px;
    width: 100%;
    height: auto;
}
/* background-color: yellow; */
`;

export const Circle = styled.div`
width: 327px;
height: 327px;
position: absolute;
margin-bottom: 200px;
left: calc(3%);
background: url(${circle});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
opacity: .15;
`;

export const Div1 = styled.div`
width: 80%;
height:  auto;
/* background-color: brown; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
line-height: 25px;

@media Screen and (max-width: 768px){
    width: 90%;
    /* background-color: brown; */
}
@media Screen and (max-width: 425px){
    width: 95%;
    margin-top: 140px;
    /* background-color: brown; */
}

`;

export const H4 = styled.div`
color:#54D8A3;
font-weight:  400;
font-size: 13px;
`;
export const H5 = styled.div`
color:#585593;
font-weight:  400;
font-size: 13px;

`;

export const H1 = styled(Link)`
color: #1035ac;
font-size: 23px;
font-weight: 510;
margin: 10px 0;
letter-spacing: 1.5px;
font-family: 'roboto',sans-serif;
text-decoration: none;

:hover{
    color: black;
    transition: all 350ms;
}

@media Screen and (max-width: 425px){
    font-size: 20px;
    letter-spacing: 0;
}
`;

export const Content = styled.div`
font-size: 18px;
color: #958e9e;
margin: 6px 0;
font-weight: 200;

@media Screen and (max-width: 768px){
    font-size: 15px;
    font-weight:500;
    /* background-color: red; */
}
@media Screen and (max-width: 425px){
    font-size: 13.5px;
    font-weight:500;
    /* background-color: red; */
}

`;
export const Content2 = styled.div`
font-size: 13.5px;
color: #958e9e;
/* font-family: 'roboto',sans-serif; */
/* font-family: poppins; */
margin: 6px 0;
font-weight: 200;

@media Screen and (max-width: 768px){
    font-size: 13px;
    font-weight: 450;
    line-height: 25px;
}
@media Screen and (max-width: 425px){
    font-size: 12px;
    font-weight: 450;
    line-height: 25px;
}

`;

export const Line = styled.div`
width: 50px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;
margin-top : 15px;
`;

export const Div2 = styled.div`
width: 50%;
height: auto;
/* background-color: red; */
display:  flex;
justify-content: space-between;
/* align-items: center; */

@media Screen and (max-width: 768px){
    width: 90%;
}
@media Screen and (max-width: 425px){
    width: 100%;
    flex-direction: column;
    align-items: center;
}
`;

export const Left = styled.div`
width: 35%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    width: 40%;
}
@media Screen and (max-width: 425px){
    width: 90%;
    /* background-color: red; */
}
`;
export const Right = styled.div`
width: 38%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    width: 40%;
}
@media Screen and (max-width: 425px){
    width: 90%;
    /* background-color: red; */
}
`;
export const ButtonHold = styled.div`
text-decoration: none;
color: white;
/* background-color: #7856d5; */
background: linear-gradient(135deg, rgba(141, 143, 254, 1) 0, rgba(156, 126, 255, 1) 100%);
width: 210px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: width ease 1s;
border-radius: 20px;
margin: 15px 0 35px 0;
:hover{
/* width: 155px; */
cursor : pointer;
}
`; 
export const Icon = styled.img`
width: 60%;
margin: 24px auto;
max-width: 128px;
`; 
export const Text = styled.div`
font-size: 13px;
color: white;
transition: margin-left ease 1s;

:hover{
    margin-left: 5px;
}
`;