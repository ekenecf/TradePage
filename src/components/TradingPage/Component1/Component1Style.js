import styled from 'styled-components';
import btbg from './btbg.jpg';
import pic from '../../../asset/pic.png'


export const Container = styled.div`
position: absolute;
display: block;
background-image: url(${btbg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
height: max-content;
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
export const Wrapper = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(20deg,#1035ac,#000080);
/* padding-bottom: 72px; */
position: relative;
display: block;
opacity: 75%;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;

@media Screen and (max-width: 768px){
    height: 100%;
    padding-bottom: 20px;

}
`;
export const Wrap = styled.div`
width :45%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 200px;

@media Screen and (max-width: 768px){
    width: 70%;
}
@media Screen and (max-width: 425px){
    width: 90%;
}
`;
export const H4 = styled.div`
color: white;
font-size: 17px;
/* font-family: 'Montserrat',sans-serif; */
opacity: 80%;

`;
export const Line = styled.div`
width: 50px;
height: 3px;
background-color: #54D8A3;
margin-bottom: 15px;
`;
export const H1 = styled.div`
color: white;
font-size: 25px;
margin: 15px 0;
`;
export const Content = styled.div`
color: white;
font-size: 16px;
opacity: 70%;
line-height: 25px;
/* font-family: 'Montserrat',sans-serif; */

@media Screen and (max-width: 768px){
    width: 93.3%;
    font-size: 16.99px;
}
@media Screen and (max-width: 425px){
    width: 100%;
    font-size: 14px;
}
`;
export const Wrap2 = styled.div`
width :50%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;

@media Screen and (max-width: 768px){
    width: 60%;
    padding-bottom: 70px; 
}
@media Screen and (max-width: 425px){
    width: 90%;
}
@media Screen and (max-width: 375px){
    width: 90%;
}
@media Screen and (max-width: 320px){
    width: 90%;
}
`;

export const Box = styled.div`
    width: 50%;
    /* background: linear-gradient(45deg, #7B52D3, #6073E0); */
    background-color: #3E3274;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 0px 40px 0;
    border-radius: 5px;
    opacity: 95%;
    margin-bottom: 4%;

    @media Screen and (max-width: 768px){
        width: 100%;

}
`;

export const TopDiv = styled.div`
width: 94%;
color: silver;
/* background-image: url(${pic}); */
background: linear-gradient(45deg, #7B52D3, #6073E0);
/* background-color: linear-gradient(135deg, #7659D6, #646FDF); */
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
/* font-family: 'Aldrich', sans-serif; */

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
margin-bottom: 10px;
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
background-color: #9686FF;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-align: center;

`;
export const Texts = styled.div`
color: #E1BEE7;
font-size: 11px;
/* background-color: green; */
line-height: 15px;
font-weight: 263;
margin-left: 10px;
display: flex;
flex-direction: column;
`;

