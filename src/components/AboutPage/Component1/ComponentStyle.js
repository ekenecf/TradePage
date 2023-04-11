import styled from 'styled-components';
import bgg from './wallpaper.jpg';


export const Container = styled.div`
background-image: url(${bgg});
//background: linear-gradient(20deg,#1035ac,#000080);/
background-size: cover;
background-repeat: no repeat;
background-position: center;
top: 0;
left: 0;
opacity: 9;
display: block;
position: absolute;
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
/* background: transparent; */
@media Screen and (max-width: 768px){
    height: 100vh;
}
@media Screen and (max-width: 425px){
    height: 65vh;
}
@media Screen and (max-width: 320px){
    height: 90vh;
}
`;

export const Wrapper = styled.div`
background: linear-gradient(20deg,#1035ac,#000080);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
opacity: 95%;
`;


export const Wrap = styled.div`
width: 51.5%;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: green; */
align-items: center;
text-align: center;

@media Screen and (max-width: 768px){
    width: 65%;
    margin-top: 60px;
}
@media Screen and (max-width: 425px){
    width: 95%;
    margin-top: 60px;
    padding-bottom: 30px;
}
@media Screen and (max-width: 320px){
    width: 95%;
    margin-top: 0px;
}
`;

export const H1 = styled.div`
font-size: 30px;
color: white;
margin-bottom: 15px;
font-weight: 450;
/* background-color: green; */
width: 100%;

@media Screen and (max-width: 425px){
    font-size: 20px;
}
@media Screen and (max-width: 320px){
    font-size: 22px;
}
`;
export const Line = styled.div`
width: 50px;
height: 3px;
background-color: #54D8A3;
margin-bottom: 15px;
`;
export const Content = styled.div`
color: white;
font-size: 18px;
font-weight: 100;
opacity: 75%;
width: 100%;
/* background-color: orange; */

@media Screen and (max-width: 768px){
    width: 100%;
    font-size: 14.5px;
    opacity: 95%;
    line-height: 25px;
}
@media Screen and (max-width: 425px){
    font-size: 13.4px;
    opacity: 95%;
    line-height: 25px;
}
`;