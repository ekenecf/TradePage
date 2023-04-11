import { AiOutlineArrowRight, AiOutlineInfo } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import p from '../../../asset/bg2.png'

export const Container = styled.div`
margin-top: 85px;
border-top: 1px solid silver;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
}
`;
export const Wrapper = styled.div`
width: 75%;
height: auto;
/* background-color: orange; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
    
    /* flex-direction: column-reverse; */
    /* justify-content: center; */
}

@media Screen and (max-width: 425px){
    flex-direction: column-reverse;
    align-items: center;
}
`;

export const LeftDiv = styled.div`
width:40%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${p});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 330px;
padding-top:40px;
position: relative;
margin-top: 50px;
margin-bottom: 40px;
/* background-color: red; */

@media Screen and (max-width: 768px){
width: 100%;
background-size: contain;
    /* background-color: red; */
}
@media Screen and (max-width: 425px){
    width: 100%;
    height: 260px;
    /* background-color: red; */
}
`;
// export const Img = styled.div`
// width: 55%;
// background-image: url(${p});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// height: 150px;
// padding-top: 175px;
// padding-left: 60px;
// padding-right: 30px;
// position: relative;

// @media Screen and (max-width: 425px){
//     width: 80%;
// }
// `;
export const Div2 = styled.div`
width: 100%;
position: absolute;
z-index: 990;
overflow-x: hidden;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* display: block; */

`;
export const Top = styled.div`
    width: 100%;
    /* background-color: yellow; */
    float: left;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media Screen and (max-width: 425px){
        margin-top: 20px;
    }
`;

export const Box1 = styled.div`
width: 320px;
height: 110px;
box-shadow: 0 2px 24px 0 rgb(31 8 54 / 10%);
border-radius: 7px;
/* border :6px solid rgb(141 143 254); */
display: flex;
justify-content: center;
align-items: center;
color: #000080;
font-family: 'Aldrich', sans-serif;
font-size: 32px;
margin-left: 10px;
background-color: #1035ac;
/* linear-gradient(to left, #5f72bd, #639); */
/* margin: 30px 30px 0 0; */
/* border-image-slice: 1; */
`;
export const Box2 = styled.div`
width: 300px;
height: 112px;
box-shadow: 0 2px 24px 0 rgb(31 8 54 / 10%);
background: linear-gradient(to left, #000080, #1035ac);
border-radius: 7px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 40px;
color: #000080;

`;
export const Div = styled.div`
width: 94%;
height: 90%;
background-color: white;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Aldrich', sans-serif;
font-size: 32px;
font-weight: 500;
`;
export const Arrow = styled.img`
width: 50px;
height: 50px;
margin-left: 30px;
`;
export const MidText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: green; */
width: 90%;


`;
export const BLink = styled(Link)`
text-decoration: none;
color: #958e9e;
`;
export const Icon = styled(AiOutlineInfo)`
color: red;
`;
export const Left = styled.div`
/* background-color: red; */
width: 30%;
text-align: center;
color: #616077;
`;
export const Right = styled.div`
/* background-color: white; */
width: 32%;
text-align: center;
color: #616077;
`;
export const BottomText = styled.div`
width: 54%;
/* background-color: salmon; */
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 50px;
margin-top: 30px;

@media Screen and (max-width: 768px){
width: 70%;
margin-bottom: 35px;
margin-top: 20px;
/* background-color: orangered; */
}
@media Screen and (max-width: 425px){
width: 70%;
margin-bottom: 65px;
margin-top: 10px;
/* background-color: orangered; */
}

`;

export const RightDiv = styled.div`
width: 40%;
height: auto;
/* background-color: red; */
line-height: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
    margin-top: 50px;
    justify-content: flex-end;
    align-items: center;
    /* text-align: center; */
}

@media Screen and (max-width: 425px){
    width: 90%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

`;

export const Hold = styled.div`

@media Screen and (max-width: 768px){
    width: 90%;
    /* background-color: orange; */
    display: block;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
@media Screen and (max-width: 425px){
    width: 90%;
    /* background-color: orange; */
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const H4 = styled.div`
color:#54D8A3;
 font-weight:  500;
`;
export const H1 = styled.div`
color: #000080;
font-size: 25px;
font-weight: 500;
margin: 20px 0;
`;
export const Content = styled.div`
color: grey;
font-size: 17px;
font-weight: 300;
margin: 10px 0 10px 0;
width: 500px;

@media Screen and (max-width: 768px){
    width: 80%;
    /* background-color: red; */
    font-size: 15px;
}
@media Screen and (max-width: 820px){
    /* width: 80%; */
    /* background-color: red; */
}
@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 11.5px;
    font-weight: 400;
    /* background-color: red; */
    line-height: 30px;
    /* text */
}
`;
export const Content1 = styled.div`
color: grey;
font-size: 17px;
font-weight: 300;
margin: 10px 0 10px 0;
width: 425px;

@media Screen and (max-width: 768px){
    width: 80%;
    font-size: 16px;
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
export const ButtonHold = styled(Link)`
background-color: #000080;
width: 210px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: width ease 1s;
border-radius: 20px;
margin-top: 30px;
text-decoration: none;
:hover{
/* width: 155px; */
cursor : pointer;
}
`;
export const BecomePartner = styled.div`
font-size: 15px;
color: white;
transition: margin-right ease 1s;

:hover{
    margin-right: 5px;
}
`;
export const Arrow2 = styled(AiOutlineArrowRight)`
color: #54D8A3;
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