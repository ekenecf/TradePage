import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 65vh;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #E8E9EF;
margin-bottom: 5%;

@media Screen and (max-width: 768px){
    height: auto;
}
/* background-color: green; */

`;
export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;
/* background-color: green; */

@media Screen and (max-width: 425px){
    padding-bottom: 20px;
}
`;
export const H1 = styled.div`
color: #1035ac;
font-size: 23px;
font-weight: 510;
margin: 10px 0;
letter-spacing: 1.5px;
`;
export const Line = styled.div`
width: 50px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 35px;
margin-top : 25px;
`;
export const Wrap = styled.div`
width: 70%;
height: auto;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    /* background-color: red; */
}
`;
export const Div = styled.div`
width: 32%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media Screen and (max-width: 768px){
    /* background-color: red; */
    margin: 10px;
    width: 50%;
}

@media Screen and (max-width: 425px){
    width: 100%;
    margin: 10px 0;
}
`;
export const Icon = styled.img`
width: 65%;
margin: 24px auto;
max-width: 128px;
`;
export const Content = styled.div`
font-size: 18px;
color: #958e9e;
margin: 6px 0;
font-weight: 200;
@media Screen and (max-width: 425px){
    font-size: 13px;
    font-weight: 500;
}
@media Screen and (max-width: 375px){
    font-size: 12px;
    font-weight: 500;
}
`;
export const Content1 = styled.div`
color:#54D8A3;
font-weight:  400;
font-size: 13px;

`;
export const Circle1 = styled.div`
width: 115px;
height: 115px;
background-color: #F7F7FA;
/* border: 1px solid silver; */
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;
export const Circle2 = styled.div`
width: 95px;
height: 95px;
background-color: #F3F4F8;
border: 1px solid #E8E9EF;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Circle3 = styled.div`
width: 75px;
height: 75px;
background-color: white;
border: 1px solid #E8E9EF;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

