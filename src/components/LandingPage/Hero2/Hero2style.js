import styled from "styled-components";
import {AiOutlineArrowRight} from 'react-icons/ai'



export const Container = styled.div`
/* background-color: red; */
margin-top: 250px;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 820px){
    width: 100%;
    /* background-color: orange; */
}
@media Screen and (max-width: 768px){
    width: 100%;
    margin-top: 100px;
    /* background-color: orange; */
}
@media Screen and (max-width: 425px){
    width: 100%;
    /* background-color: orange; */
}
`;
export const Wrapper = styled.div`
width: 75%;
/* background-color: orange; */
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 400px;

@media Screen and (max-width: 768px){
    width: 90%;
    /* flex-direction: column; */
    /* justify-content: center; */
    margin-top: 300px;
    /* flex-wrap: wrap; */
}
@media Screen and (max-width: 820px){
    width: 90%;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
}
@media Screen and (max-width: 425px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 500px;
    /* flex-wrap: wrap; */
}
@media Screen and (max-width: 320px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 550px;
    text-align: center
    /* flex-wrap: wrap; */
}

`;
export const LeftDiv = styled.div`
 width: 50%;
height: auto;
/* background-color: orangered; */
/* line-height: 30px; */
display: flex;
flex-direction: column;
justify-content: center;

@media Screen and (max-width: 768px){
    width: 90%;
    margin-top: 240px;
    /* align-items: center; */
    /* text-align:center; */
}
@media Screen and (max-width: 820px){
    width: 70%;
    /* margin-top: 200px; */
}
@media Screen and (max-width: 428px){
    width: 90%;
    align-items: center;
    /* margin-top: 200px; */
}
`;
export const H4= styled.div`
 color:#54D8A3;
 font-weight:  500;

 @media Screen and (max-width: 768px){
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 10px;
 }
 @media Screen and (max-width: 425px){
    font-size: 13px;
 }
`;
export const H1 = styled.div`
color: #1035ac;
font-size: 25px;
font-weight: 500;
margin: 20px 0;

@media Screen and (max-width: 425px){
    font-size: 22px;
}
@media Screen and (max-width: 320px){
    font-size: 20px;
}
`;
export const Content1 = styled.div`
color: grey;
font-size: 17px;
font-weight: 300;
margin: 10px 0 10px 0;
width: 425px;


@media Screen and (max-width: 768px){
    width: 90%;
    font-size: 15px;
    font-weight: 400;
    margin: 0 0 15px 0;
    /* background-color: red; */
};
@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    margin: 0 0 15px 0;
    /* background-color: red; */
    text-align: center;
};


`;
export const Content = styled.div`
color: grey;
font-size: 17px;
font-weight: 300;
margin: 10px 0 10px 0;
width: 500px;

@media Screen and (max-width: 768px){
    width: 100%;
    font-size: 18px;
    /* background-color: red; */
}
@media Screen and (max-width: 820px){
    width: 95%;
    /* background-color: red; */
}

@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    text-align:center;
    /* background-color: red; */
}

`;
export const Line = styled.div`
width: 50px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;

@media Screen and (max-width: 425px){
    margin-top: 10px;
    width: 80px;
}
`;
export const ButtonHold = styled.div`
background-color: #1035ac;
width: 150px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
transition: width ease 1s;
border-radius: 20px;
margin-top: 30px;
:hover{
/* width: 155px; */
cursor : pointer;
}
`;
export const KnowMore = styled.div`
/* background-color: yellow; */
font-size: 15px;
color: white;
transition: margin-right ease 1s;

:hover{
    margin-right: 5px;
}
`;
export const Arrow = styled(AiOutlineArrowRight)`
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
export const RightDiv = styled.div`
/* background-color: yellow; */
width: 50%;
height: auto;
/* height: 100%; */
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;


@media Screen and (max-width: 768px){
    width: 90%;
    margin-left: 0;
    margin-top: 50px;
    /* margin-bottom: 30px; */
}
@media Screen and (max-width: 820px){
    width: 70%;
    margin-left: 0;
    margin-top: 70px;
    /* margin-bottom: 30px; */
}
@media Screen and (max-width: 428px){
    width: 90%;
    margin-left: 0;
    margin-top: 70px;
    /* margin-bottom: 30px; */
}

`;

export const Img = styled.img`
width: 100%;

@media Screen and (max-width: 768px){
    width: 100%
}

/* height: 300px; */
`

