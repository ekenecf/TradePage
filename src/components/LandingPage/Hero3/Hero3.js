import React from "react";
import {
  Container,
  Wrapper,
  LeftDiv,
  RightDiv,
  Arrow,
  Div2,
  Top,
  MidText,
  BottomText,
  Box1,
  Box2,
  Div,
  BLink,
  Icon,
  Left,
  Right,
  H4,
  H1,
  Content,
  Content1,
  Line,
  ButtonHold,
  BecomePartner,
  Arrow2,
  Hold,
} from "./Hero3Style";
import ArrowPic from "../../../asset/arrow.svg";

const Hero3 = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          {/* <Img></Img> */}
          <Div2>
            <Top>
              <Box1>
                <Div>4%</Div>
              </Box1>
              <Arrow src={ArrowPic} alt="arrow" />
              <Box2>
                <Div>8%</Div>
              </Box2>
            </Top>
            <MidText>
              <Left>STANDARD COMMISSION</Left>
              <Right>REPRESENTATIVE COMMISSION</Right>
            </MidText>
            <BottomText>
              <Icon>i</Icon>
              <BLink to="/affiliate">How to become a representative?</BLink>
            </BottomText>
          </Div2>
        </LeftDiv>
        <RightDiv>
          <Hold>
            <H4>AFFILIATE PROGRAM</H4>
            <H1>Earn Extra</H1>
            <Content1>
              Refer other people to our cryptocurrency and financial trading platform
            </Content1>
            <Line></Line>
            <Content>
              Share your referral link, which is made available in your account,
              with friends, and you’ll earn 4% from their active deposit. You
              can even earn 8% when you apply for a Representative status with
              our company.
            </Content>
            <ButtonHold to="/affiliate">
              <BecomePartner>BECOME A PARTNER</BecomePartner>
              <Arrow2></Arrow2>
            </ButtonHold>
          </Hold>
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Hero3;
