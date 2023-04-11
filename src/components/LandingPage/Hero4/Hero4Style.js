import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 40vh;
background-color: #F6F7FB;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;

@media SCreen and (max-width: 768px){
    height: 40vh;
}
@media Screen and (max-width:425px){
    display: none;
}
@media Screen and (max-width:375px){
    display: none;
}
@media Screen and (max-width:320px){
    display: none;
}
`;

export const Wrapper = styled.div`
width: 70%;
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: 80vh;
    /* line-height: 40px; */
}
@media Screen and (max-width: 425px){
    height: 80vh;
    /* line-height: 40px; */
}
@media Screen and (max-width: 320px){

    /* line-height: 40px; */
}

/* position: relative; */
`;

export const H1 = styled.div`
position: absolute;
font-size: 80px;
color: rgb(239 239 245 / 50%);
text-align: center;
width: 100%;
font-weight: 400;
/* background-color: red; */
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
margin-bottom: 330px;
line-height: 90px;

@media Screen and (max-width: 768px){
    font-size: 70px;
    margin-top: 150px;
    line-height: 70px;
}

@media Screen and (max-width: 425px){
    font-size: 25px;
    margin-bottom: 180px;
    line-height: 30px;
}
@media Screen and (max-width: 320px){
    font-size: 20px;
    margin-bottom: 190px;
    line-height: 30px;
}
`;
export const Div = styled.div`
position: relative;
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
line-height: 45px;

@media Screen and (max-width: 768px){
    /* font-size: 75px; */
    margin-bottom: 30px;
    line-height: 20px;
};
@media Screen and (max-width: 425px){
    margin-bottom: 285px;
};
@media Screen and (max-width: 320px){
    margin-bottom: 279px;
}
/* justify-content: center; */
`;
export const H4 = styled.div`
font-size: 25px;
color: #65379B;

@media Screen and (max-width: 768px){
    font-size: 15px;
    /* margin-top: 250px; */
}
@media Screen and (max-width: 425px){
    font-size: 15px;
    margin-top: 250px;
};
@media Screen and (max-width: 320px){
    font-size: 12px;
    margin-top: 225px;
}
`;
export const Line = styled.div`
width: 80px;
height: 2.5px;
background-color: #54D8A3;
margin-bottom: 15px;
margin-top: 10px;

@media Screen and (max-width: 320px){
    width: 60px
}
`;
