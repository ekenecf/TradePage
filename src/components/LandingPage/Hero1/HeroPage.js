import React from 'react'
import {
    Holder,Container,LeftDiv, RightDiv,H1,Line,Content,ButtonHold,
    Getstarted,Openaccount,Wrapper,TopDiv,BottomDiv,H11,Daily,
    Box,Top,Bottom,Arrow,Texts
} from './HeroStyle'
import { NavLink } from 'react-router-dom'


const HeroPage = () => {
  return (
    <Holder>
    <Wrapper>
    <Container>
            <LeftDiv>
                <H1>Hybrid automated cryptocurrency trading</H1>
                <Line></Line>
                <Content>Private equity firm Preeminentcryptotrade.com came up with a Balanced Asset Basket that allowed it to invest in cryptocurrency and other similar blockchain based industries. The company’s primary activity is focused on cryptocurrency domain such as field of exchange and stock markets.</Content>
                <ButtonHold>
                    <Getstarted>
                    <NavLink to={"/about"} style={{color:"#fff", textDecoration:"none"}}>Get Started</NavLink>
                    </Getstarted>
                    <Openaccount>
                    <NavLink to={"/siginup"} style={{color:"#fff", textDecoration:"none"}}>Open An Account</NavLink>
                    </Openaccount>
                </ButtonHold>
            </LeftDiv>
            <RightDiv>
                <Box>
                <TopDiv>
                    <H11>10%</H11>
                    <Daily>DAILY <p>FOR 15 DAYS</p></Daily>
                </TopDiv>
                <BottomDiv>
                    <Top>
                        <Arrow>i</Arrow>
                        <Texts>Start with as little as 0.001 BTC. Instant Withdrawals.</Texts>
                    </Top>
                    <Bottom>
                    <Arrow>i</Arrow>
                        <Texts>Principal included. 150% total return. Earn each calendar day.</Texts>
                    </Bottom>
                </BottomDiv>
                </Box>
            </RightDiv>
        </Container>
    </Wrapper>
    </Holder>
  )
};

export default HeroPage;