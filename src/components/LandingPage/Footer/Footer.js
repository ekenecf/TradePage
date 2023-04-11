import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import bitcoin from '../../../asset/bitcoin.png'
import { 
    Container, Wrapper, LeftDiv, RightDiv, Img, Logo,
    Dot, Span, Hold
} from './FooterStyle';

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <LeftDiv>
                <Logo>Preeminentcryptotrade</Logo>
                <Dot></Dot>
                {/* <Span to='/news'>News</Span> */}
               {/*  <Dot></Dot> */}
                <Span to='/team'>Terms & Condition</Span>
                {/* <Dot></Dot> */}
                <Span to='/questions'>FAQ</Span>
                <Dot></Dot>
                <Span to='/contact'>Contact</Span>
            </LeftDiv>
            <RightDiv>
                <Hold href='https://www.facebook.com'><AiFillFacebook  style={{cursor: "pointer", width: "25px", height: "25px", borderRadius:"20px"}}/>
                </Hold>
                <Hold href='https://twitter.com'>
                <AiFillTwitterSquare  style={{width: "25px", height: "25px", cursor: "pointer", borderRadius:"20px"}}/>
                </Hold>
                <Img src={bitcoin} alt="bitcoin"/>
            </RightDiv>
        </Wrapper>
    </Container>
  )
}

export default Footer;