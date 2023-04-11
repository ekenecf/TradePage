import React from 'react';
import {
    Container, Wrapper, H4, H1, Line, Content, Wrap, Wrap2, Box, TopDiv, H11, Daily, Top, Arrow, Texts, BottomDiv, Bottom
} from './Component1Style';


const Component1 = () =>{
    return(
        <Container>
            <Wrapper>
                <Wrap>
                    <H4>Hybrid automated cryptocurrency trading</H4>
                    <H1>Managing Your Cryptocurrency Market Portfolio</H1>
                    <Line></Line>
                    <Content>Preeminentcryptotrade.com analysts will use predictions to purchase profitable digital currency at the right time. We come up with customized portfolio services that offer a one percent risk aversion. This has allowed traders to see better return on their total index over time. It also protected them from potential risks with the market.</Content>
                </Wrap>
                <Wrap2>
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
                </Wrap2>
            </Wrapper>
        </Container>
    )
};

export default Component1;