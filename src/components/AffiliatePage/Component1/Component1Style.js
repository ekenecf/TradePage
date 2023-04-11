import styled from "styled-components";
import bgaff from './bgaff.jpg'

export const Wrapper = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(20deg,#1035ac,#000080);
/* padding-bottom: 72px; */
position: relative;
display: block;
opacity: 95%;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: auto;
    padding-bottom: 40px;
}
`;

export const Container = styled.div`
position: absolute;
display: block;
background-image: url(${bgaff});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
height: 70%;
top: 0;
left: 0;
/* opacity: 95%; */
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: auto;
}
`;

export const Hold = styled.div`
width: 55%;
height: auto;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
text-align: center;
margin-top: 20px;

@media Screen and (max-width: 768px){
    margin-top: 130px;
    width: 80%;
}
@media Screen and (max-width: 375px){
    width: 90%;
}
`;

export const H1 = styled.div`
font-size: 30px;
color: white;
margin-bottom: 15px;
font-weight: 400;
width: 100%;
font-family: 'Montserrat',sans-serif;

@media Screen and (max-width: 768px){
    font-size: 25px;
    opacity: 85%;
    font-weight: 300;
}
@media Screen and (max-width: 375px){
    font-size: 20px;
}
/* opacity: 95%; */
`;
export const Line = styled.div`
width: 50px;
height: 3px;
background-color: #54D8A3;
margin-bottom: 15px;
`;
export const Content = styled.div`
color: white;
font-size: 15px;
opacity: 70%;
font-family: 'Montserrat',sans-serif;
/* width: 100%; */

@media Screen and (max-width: 768px){
    width: 100%;
    font-size: 12px;
    font-weight: 200;
    line-height: 18px;
    letter-spacing: 0.5px;
}
@media Screen and (max-width: 375px){
    width: 80%;
    font-weight: 100;

}
`;
export const Div = styled.div`
/* background-color: yellow; */
width: 70%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
export const Wrap = styled.div`
width: 43%;
/* background-color: green; */
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Montserrat',sans-serif
`;
export const Circle2 = styled.div`
background: linear-gradient(20deg,#1035ac,#000080);
width: 96px;
height: 96px;
border-radius: 100%;
box-shadow: 0 0 0 10px rgb(141 143 254 / 25%), 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
font-weight: 300;
font-size: 32px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;
// export const Icon = styled.img``;
export const H5 = styled.div`
color: white;
font-family: 'Montserrat',sans-serif;
`;

