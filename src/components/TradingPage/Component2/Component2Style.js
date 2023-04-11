import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
background-color: #F6F7FB;
display: flex;
justify-content: center;
align-items: center;
margin-top: 350px;
padding: 15px 0 200px 0;

@media Screen and (max-width: 768px){
    padding-top: 100px;
}
@media Screen and (max-width: 375px){
    padding-top: 170px;
}
@media Screen and (max-width: 320px){
    padding-top: 230px;
}

`;
export const Wrapper = styled.div`
width: 70%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
/* margin-top: 370px; */
@media Screen and (max-width: 768px){
width: 90%;
}
`;
export const H1 = styled.div`
color: #1035ac;
font-size :25px;
margin-top: 350px;
`;
export const Content = styled.div`
color: #958e9e;
font-size: 16px;
opacity: 70%;
margin: 7px 0 15px 0;

/* line-height: 25px; */
`;
export const Line = styled.div`
width: 50px;
height: 3px;
background-color: #54D8A3;
margin-bottom: 60px;

`;
export const BackgroundText = styled.div`
font-family: 'Montserrat',sans-serif;
font-weight: 300;
font-size: 100px;
color: #1035ac;
position: absolute;
opacity:  20%;
/* line-height: 82px; */
bottom: -300px;

@media Screen and (max-width: 768px){
    bottom: -600px;
    font-size: 80px;
}
@media Screen and (max-width: 375px){
    bottom: -680px;
    font-size: 68px;
}
@media Screen and (max-width: 320px){
    bottom: -720px;
    font-size: 60px;
}
`;
export const Div = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
/* background-color: red; */
margin-top: 100px;

@media Screen and (max-width: 768px){
    margin-top: 30px;
}
`;

export const FirstWrap = styled.div`
@media Screen and (max-width: 320px){
}
`;
export const CircleHold = styled.div`
width: 90%;
height: auto;
`;
export const Circle1 = styled.div`
margin: 400px 0 0 -395px;
width: 790px;
height: 790px;
opacity: .07;
position: absolute;
top: 50%;
left: 50%;
border: 1px solid #7d5ea3;
border-radius: 50%;
background-color: white;
`;
export const Circle2 = styled.div`
    margin: 306px 0 0 -306px;
    width: 612px;
    height: 612px;
    /* opacity: .07; */
    position: absolute;
    bottom: 10%;
    left: 50%;
    border: 1px solid #7d5ea3;
    border-radius: 50%;
    /* background-color: yellow; */
`;
export const Circle3 = styled.div`
margin: -225px 0 0 -225px;
width: 450px;
height: 450px;
position: absolute;
top: 50%;
left: 50%;
border: 1px solid #7d5ea3;
border-radius: 50%;
/* background-color: red; */
`;
export const Circle4 = styled.div`
margin: -143px 0 0 -143px;
width: 286px;
height: 286px;
opacity: .3;
position: absolute;
top: 50%;
left: 50%;
border: 1px solid #7d5ea3;
border-radius: 50%;
/* background-color: red; */
`;
export const CalculatorDiv = styled.div`
width: 75%;
height: auto;
display: block;
background: #fff;
overflow: hidden;
border-radius: 5px;
box-shadow: 0 2px 24px 0 rgb(31 8 54 / 5%);
padding: 0;
position: relative;
/* margin-bottom: 470px; */
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
}
@media Screen and (max-width: 425px){
    width: 95%;
    height: auto
}
`;
export const Topic = styled.div`
background: linear-gradient(20deg,#1035ac,#000080);
display: block;
color: #fff;
line-height: 48px;
font-size: 13px;
font-weight: 400;
width: 100%;
`;
export const CountHold = styled.div`
display: block;
background: #f8f9fd;
min-height: 100px;
padding: 28px 32px;
position: relative;
border-bottom: 1px solid #edecfe;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media Screen and (max-width: 425px){
width: 95%;
}
`;
export const CountInput = styled.input`
display: inline-block;
width: 90%;
outline: 0;
border: 2px solid #c2bfef;
height: 52px;
line-height: 100%;
padding: 6px 12px;
font-size: 24px;
font-family: 'Roboto';
font-weight: 300;
color: #3c357e;
`;
export const Label = styled.div`
    position: absolute;
    top: 30px;
    right: 70px;
    line-height: 34px;
    font-size: 16px;
    background: #fff;
    padding: 6px 12px;
    font-family: 'Roboto';
    font-weight: 400;
    color: #958e9e;
    cursor: default
`;
export const ProfitHold = styled.div`
width: 100%;
    padding-inline-start: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 170px;

    @media Screen and (max-width: 425px){
        flex-direction: column;
        width: 100%;
        padding-inline-start: 0px;
    }
`;
export const Left = styled.div`
border-right: 1px solid #958e9e47;
height:100%;
width: 32.5%;
display: flex;
flex-direction:  column;
align-items: center;
justify-content:center;

@media Screen and (max-width: 425px){
    width: 100%;
    border-bottom: 1px solid #958e9e47;
}
`;
export const Mid = styled.div`
border-right: 1px solid #958e9e47;
height:100%;
width: 32.5%;
display: flex;
flex-direction:  column;
align-items: center;
justify-content:center;

@media Screen and (max-width: 425px){
    width: 100%;
    border-bottom: 1px solid #958e9e47;
}
`;
export const Right = styled.div`
border-right: 1px solid #958e9e;
height:100%;
width: 32.5%;
display: flex;
flex-direction:  column;
align-items: center;
justify-content:center;

@media Screen and (max-width: 425px){
    width: 100%;
}
`;
export const Number = styled.div`
color: #54d8a3;
`;
export const BottomDiv = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 425px){
    flex-direction: column;
    height: auto;
}
`;
export const BottomLeft = styled.div`
display: inline-block;
    background-image: linear-gradient(72deg, #DADAFA, #E9E8FF);
    width: 66.666666%;
    height: 60%;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    @media Screen and (max-width: 425px){
        width: 100%;
        align-items: center;
    }

`;
export const Top = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
@media Screen and (max-width: 768px){
    width: 80%;
}
`;
export const Bottom = styled.div`
width: 76%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Info = styled.div`
display: inline-block;
    /* float: left; */
    height: 20px;
    line-height: 20px;
    width: 20px;
    text-align: center;
    font-size: 10px;
    background: #b4b4e3;
    border-radius: 50%;
    margin: 3px 8px 3px 3px;

    @media Screen and (max-width: 768px){
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const Icon = styled.div``;
export const Texts = styled.div`
color : #3c357e;
`;
export const BottomRight = styled(Link)`
/* display: inline-block; */
    background-color: #1035ac;
    float: right;
    width: 33.333333%;
    line-height: 100px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    /* height: 100%; */
    text-decoration: none;
    cursor: pointer;

    @media Screen and (max-width: 425px){
        width: 100%;
}
`;
