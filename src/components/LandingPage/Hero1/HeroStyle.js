import styled from "styled-components";
import bc from "../../../asset/bc.jpg"
import pic from '../../../asset/pic.png'
/* import {AiFillInfoCircle} from 'react-icons/ai' */

export const Holder = styled.div`
     background-image: url(${bc});
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     width: 100%;
     height:75vh;
     top: 0;
    left: 0;
    opacity: .9;
    display: block;
    position: absolute;

    @media Screen and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
    }
    /* @media Screen and (max-width: 820px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
    } */
    @media Screen and (max-width: 428px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
    }
    /* content: ''; */
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
/* background-color: indigo; */
background: linear-gradient(20deg,#1035ac,#000080);
.//background-color: linear-gradient(#5f72bd,#5F5CB2, #800080); /
opacity: 85%;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    height: auto;
}

@media Screen and (max-width: 428px){
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    height: auto;
}


/* #5C64B5 #6052AA */
`;

export const Container = styled.div`
    width: 75%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 40px; */
    margin-top: 100px;
    /* background-color: red; */
    @media Screen and (max-width: 768px){
        width: 90%;
        margin-top: 40px;
    }
    
    @media Screen and (max-width: 425px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        margin-top:20px;
        /* background-color: yellow; */
    }
    @media Screen and (max-width: 320px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        margin-top:80px;
        /* background-color: yellow; */
    }
`;

export const LeftDiv = styled.div`
    width: 50%;
    height: auto;
    /* background-color: pink; */
    /* line-height: 30px; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media Screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 50px;
        /* align-items: center; */
        /* text-align: center; */
    }
    @media Screen and (max-width: 820px){
        width: 100%;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    @media Screen and (max-width: 428px){
        width:90%;
        margin-top: 100px;
        margin-bottom: 50px;
        align-items: center;
    }
`;
export const H1 = styled.div`
font-size: 30px;
color: white;
margin-bottom: 15px;
font-weight: 500;
/* background-color: green; */
width: 500px;

@media Screen and (max-width: 768px){
    width: 100%;
    font-size: 23px;
    font-weight: 400;
}
@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 26px;
    text-align: center;
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
color: silver;
font-size: 18px;
font-weight: 300;
/* background-color: red; */

@media Screen and (max-width: 768px){
    /* text-align: center; */
    font-size: 15px;
    width: 90%;
    line-height: 25px;
}
@media Screen and (max-width: 425px){
    text-align: center;
    font-size: 16px;
}
`;
export const ButtonHold = styled.div`
width: 70%;
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 30px;
/* background-color: orange; */
/* color: white; */

@media Screen and (max-width: 768px){
    width: 100%;
}


`;
export const Getstarted = styled.div`
width: 145px;
height: 40px;
border: 1px solid #E0E0E0;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: white;
cursor: pointer;
font-size: 15px;

@media Screen and (max-width: 320px){
    width: 130px;
}

`;
export const Openaccount = styled.div`
width: 180px;
height: 45px;
font-size: 15px;
background-color: #54D8A3;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: white;
cursor: pointer;

@media Screen and (max-width: 768px){
    width: 140px;
}
`;

export const RightDiv = styled.div`
/* background-color: red; */
width: 50%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    width: 95%;
    /* margin-bottom: 50px; */
    /* background-color: red; */
}
/* @media Screen and (max-width: 820px){
    width: 100%;
    margin-bottom: 50px;
} */
`;

export const Box = styled.div`
    width: 75%;
    background-color: #1035ac;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17px 0px;
    border-radius: 5px;
    opacity: 80%;

    @media Screen and (max-width: 768px){
        width: 100%;

}
`;

export const TopDiv = styled.div`
width: 90%;
color: silver;
/* background-image: url(${pic}); */
background: linear-gradient(135deg, #000080, #1035ac);
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
border-radius: 5px;
`;
export const H11 = styled.div`
font-size:55px;
color: white;
font-weight: 500;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
/* background-color: green; */
`;
export const Daily = styled.div`
color: whitesmoke;
width: 100px;
height: 40px;
font-size: 15px;
/* background-color: red; */
line-height: 15px;
font-weight: 263;
margin-left: 10px;
display: flex;
flex-direction: column;

/* text-align: center; */
`;
export const BottomDiv = styled.div`
width: 90%;
/* background-color: aliceblue; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px 0 0 0;
`;
export const Top = styled.div`
width: 85%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
/* background-color: red; */
`;
export const Bottom = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
/* background-color: red; */
`;
export const Arrow = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
color: white;
background-color: blue;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-align: center;

`;
export const Texts = styled.div`
color: white;
font-size: 11px;
/* background-color: green; */
line-height: 15px;
font-weight: 263;
margin-left: 10px;
display: flex;
flex-direction: column;
`;
