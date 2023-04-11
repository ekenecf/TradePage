import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 95vh;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
background-color: #F6F7FB;
position: relative;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
export const Wrapper = styled.div`
width: 60%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
/* align-items: center; */

@media Screen and (max-width: 768px){
    width: 90%;
    flex-direction: column;

}
`;
export const Title = styled.div`
font-family: 'Montserrat',sans-serif;
font-weight: 300;
/* font-size: 400px; */
color: #958e9e;
position: absolute;
opacity:  20%;
line-height: 82px;
top: -42px;
/* margin-bottom: 140px; */


@media Screen and (max-width: 768px){
    font-size: 50px;
}
@media Screen and (max-width: 3220px){
    font-size: 40px;
}
`;
export const Left = styled.div`
width: 60%;
height: auto;
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px){
    width: 90%;
}

`;
export const RightImage = styled.div`
width: 25%;

@media Screen and (max-width: 768px){
    display: none;
}

`;
export const Img = styled.img`
width: 135px;
height: 135px;
float: left;
top: 0;
margin-bottom: 230px;
`;
export const Icon = styled.div`
border-top-left-radius: 10px;
border-top-right-radius: 0;
border-bottom-left-radius: 0;
border-bottom-right-radius: 10px;
display: inline-block;
width: 42px;
height: 42px;
display: flex;
justify-content: center;
align-items:center;
background-color: #000080;
color: white;
`;
export const Wrap = styled.div`
width: 85%;
height: auto;
display:flex;
flex-direction: column;
/* background-color: red; */
/* align-items: center; */
`;
export const H4 = styled.div`
color: #639;
font-size: 22px;
line-height: 32px;
font-family: 'Montserrat',sans-serif;
font-weight: 400;
`;
export const Line = styled.div`
width: 50px;
height: 3px;
background-color: #54D8A3;
margin: 15px 0;
`;
export const ButtonHold = styled.div`
width: 150px;
height: 40px;
background: linear-gradient(135deg, #1035ac, #000080);
color: #fff!important;
margin: 25px 0;
display: flex;
justify-content:center;
align-items: center;
padding: 4px 18px;
font-size: 10px;
line-height: 24px;
font-weight: 500;
text-transform: uppercase;
border-radius: 24px;
box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
transition: width ease 4s;
:hover{
    width: 80px;
    cursor: pointer;
}
`;
export const Text = styled.div`
font-size: 13px;
margin-left: 5px;
transition: margin-left ease 4s;


:hover{
    margin-left: 13px;
}
`;
export const Content = styled.div`
    font-family: 'Montserrat',sans-serif;
    font-weight: 300;
    font-size: 13px;
    line-height: 24px;
    color: #958e9e;
`;


