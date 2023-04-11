import React from 'react';
import {
    Container, Wrapper, LeftDiv, RightDiv,BitcoinLink,
    H1, Content1, Content, ButtonHold, ReadMore, Arrow2, Line
} from './Hero5Style';


const Hero5 = () => {
  return (
    <Container>
        <Wrapper>
            <LeftDiv>
                <H1>We are Online!</H1>
                    <Line></Line>
                    <Content1>Jan-25-2022 05:53:08 PM</Content1>
                    <Content>If you’re searching for a dependable online cryptocurrency trading company that provides you with a safe online platform and a profitable income on a daily basis from any part of the world, then you’re in the right place.</Content>
                    <ButtonHold>
                        <ReadMore to='/about'>Read More</ReadMore>
                        <Arrow2></Arrow2>
                    </ButtonHold>
            </LeftDiv>
            <RightDiv>
                <BitcoinLink href='https://www.facebook.com/bitcoin'>Bitcoin</BitcoinLink>
            </RightDiv>
        </Wrapper>
    </Container>
  )
};

export default Hero5;