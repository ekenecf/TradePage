import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Left,
  RightImage,
  Img,
  Wrap,
  H4,
  Line,
  Content,
  ButtonHold,
  Text,
  Icon,
} from "./Component3Style";
import { TfiCup, TfiArrowRight } from "react-icons/tfi";
import contactcard from "./contactcard.svg";
import { NavLink } from "react-router-dom";

const Component3 = () => {
  return (
    <Container>
      <Title>Representatives</Title>
      <Wrapper>
        <Left>
          <Icon>
            <TfiCup />
          </Icon>
          <Wrap>
            <H4>Join our Representative program</H4>
            <Line></Line>
            <Content>
              For you to become a representative of ELITE-GAIN, you need to have
              the ability to promote and support our cryptocurrency trading
              project in your region through various means, like online/offline
              presentations, meetings with clients, a personal blog, etc.
              However, note that we never support SPAM nor any form of illegal
              promotion of our project. If you think this is ‘right up your
              alley’, then send your personal details; full name, phone number,
              username, country, city, email and messenger ID to{" "}
              <a style={{ textDecoration: "none" }} href="/about">
                preeminentteam@gmail.com
              </a>
              , and we will respond within 24 business hours. You don’t need to
              have an active deposit to be a Regional Representative
            </Content>
            <ButtonHold>
              <TfiArrowRight style={{ width: "13px", height: "13px" }} />
              <NavLink
                to={"/siginup"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Text>SIGN UP</Text>
              </NavLink>
            </ButtonHold>
          </Wrap>
        </Left>
        <RightImage>
          <Img src={contactcard} alt="contact-card" />
        </RightImage>
      </Wrapper>
    </Container>
  );
};

export default Component3;
