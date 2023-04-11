import React from "react";
import {
  Container,
  Wrapper,
  Div,
  Div2,
  H1,
  H4,
  Content,
  Icon,
  Wrap,
  Content2,
} from "./Component2Style";
import {
  TfiLayoutSliderAlt,
  TfiComments,
  TfiCup,
  TfiAnnouncement,
} from "react-icons/tfi";
// import { BsMegaphone,BsTrophy, BsFillMegaphoneFill } from 'react-icons/bs';

const Component2 = () => {
  return (
    <Container>
      <Wrapper>
        <Div>
          <H4>START BUILDING YOUR TEAM</H4>
          <H1>Refer other people to our cryptocurrency trading project</H1>
          <Content>
            Share your referral link, which is made available in your account,
            with friends, and you’ll earn 4% from their active deposit. You can
            even earn 8% when you apply for a Representative status with our
            company.
          </Content>
        </Div>
        <Div2>
          <Wrap>
            <Icon>
              <TfiAnnouncement
                style={{ width: "25px", height: "25px", color: "#000080" }}
              />
            </Icon>
            <Content2>
              Dependable online financial trading company that provides you
              with a safe online platform and a profitable income on a daily
              basis.
            </Content2>
          </Wrap>
          <Wrap>
            <Icon>
              <TfiLayoutSliderAlt
                style={{ width: "25px", height: "25px", color: "#000080" }}
              />
            </Icon>
            <Content2>
              Our professionals are widely versed in cryptocurrency and financial portolio
              management techniques and can help you wherever possible
            </Content2>
          </Wrap>
        </Div2>
        <Div>
          <Wrap>
            <Icon>
              <TfiComments
                style={{ width: "25px", height: "25px", color: "#000080" }}
              />
            </Icon>
            <Content2>
              ELITE-GAIN is a financial market company that was
              established in 2022. Our wide range of services are specifically
              designed to assist cryptocurrency, FOREX and stock market holders.
            </Content2>
          </Wrap>
          <Wrap>
            <Icon>
              <TfiCup
                style={{ width: "25px", height: "25px", color: "#000080" }}
              />
            </Icon>
            <Content2>
              Get in touch with us if you need further clarifications on our
              services. We are available 24/7 and will always respond when you
              get in touch with us.
            </Content2>
          </Wrap>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Component2;
