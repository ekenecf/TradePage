import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
height: 50vh;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 580px;
margin-bottom:5%;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
export const Wrapper = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: green; */
@media Screen and (max-width: 768px){
    width: 90%;
    padding: 50px 0;
    flex-direction: column;
}
`;
export const H4 = styled.div`
color: #e5e2ee;
font-size: 18px;
`;
export const H1 = styled.div`
color: #1035ac;
margin: 20px 0;
font-size: 25px;
font-weight: 500;

`;
export const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin: 30px 0;

`;
export const Div = styled.div`
width: 30%;
height: auto;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
export const Div2 = styled.div`
width: 30%;
height: auto;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    width: 90%;
}
`;
export const Icon = styled.div`
color: #8972A6;
width: 80px;
height: 80px;
`;
export const Content2 = styled.div`
color: #958e9e;
font-size: 14.5px;
width: 85%;
`;
export const Content = styled.div`
color: #958e9e;
font-size: 14.5px;
`;
// export const Container = styled.div``;