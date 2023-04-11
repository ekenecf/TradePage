import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 60vh;
background-color: #F6F7FB;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;
`
export const Wrapper = styled.div`
width: 80%;
/* background-color: cadetblue; */
height: 70%;
display: flex;
justify-content: center;
align-items: center;
`
export const Top = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const H1 = styled.div`
color: #000080;
font-size: 25px;
font-weight: 500;
margin: 20px 0;
`
export const Line = styled.div`
width: 100px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;
`
export const Box = styled.a`
margin: 20px;
width: 280px;
height: 150px;
background-color: #ffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 8px;
padding: 20px 0 30px 0;
text-decoration: none;

@media Screen and (max-width: 768px){
    width: 100%;
}
`
export const Img = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`;
export const Text = styled.div`
    width: 70%;
    font-size: 15px;
    line-height: 25px;
    color: silver;
    /* background-color: navajowhite; */
    text-align: center;
`
// export const Container = styled.div``