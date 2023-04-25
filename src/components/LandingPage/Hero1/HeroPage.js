import React from "react";
import {
  Holder,
  Container,
  LeftDiv,
  RightDiv,
  H1,
  Line,
  Content,
  ButtonHold,
  Getstarted,
  Openaccount,
  Wrapper,
  TopDiv,
  BottomDiv,
  H11,
  Daily,
  Box,
  Top,
  Bottom,
  Arrow,
  Texts,
} from "./HeroStyle";
import { NavLink } from "react-router-dom";

const HeroPage = () => {
  return (
    <Holder>
      <Wrapper>
        <Container>
          <LeftDiv>
            <H1>
              Hybrid automated cryptocurrency and Financial markets trading
            </H1>
            <Line></Line>
            <Content>
              Private equity firm Elite-Gain came up with a Balanced Asset
              Basket that allowed it to invest in cryptocurrency, other similar
              blockchain based industries and Financial market. The company’s
              primary activity is focused on cryptocurrency domain, and also
              exchanges and stock markets.
            </Content>
            <ButtonHold>
              <Getstarted>
                <NavLink
                  to={"/about"}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Get Started
                </NavLink>
              </Getstarted>
              <Openaccount>
                <NavLink
                  to={"/siginup"}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Open An Account
                </NavLink>
              </Openaccount>
            </ButtonHold>
          </LeftDiv>
          <RightDiv>
            <Box>
              <TopDiv>
                <H11>5 - 10%</H11>
                <Daily>
                  DAILY <p>FOR 15 DAYS</p>
                </Daily>
              </TopDiv>
              <BottomDiv>
                <Top>
                  <Arrow>i</Arrow>
                  <Texts>
                    Start with as little as 0.018 BTC or $500. Instant
                    Withdrawals.
                  </Texts>
                </Top>
                <Bottom>
                  <Arrow>i</Arrow>
                  <Texts>
                    Principal included. 120% total return. Earn each calendar
                    day.
                  </Texts>
                </Bottom>
              </BottomDiv>
            </Box>
          </RightDiv>
        </Container>
      </Wrapper>
    </Holder>
  );
};

export default HeroPage;
