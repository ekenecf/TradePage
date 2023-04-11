import React from "react";
import {
  Container,
  LeftDiv,
  H4,
  H1,
  Content,
  Line,
  ButtonHold,
  KnowMore,
  Arrow,
  RightDiv,
  Wrapper,
  Img,
  Content1,
} from "./Hero2style";
import bg2 from "../../../asset/bg44.svg";
import { NavLink } from "react-router-dom";

const Hero2Page = () => {
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <H4>MANAGING YOUR MARKET PORTFOLIO</H4>
          <H1>Passion relates to performance</H1>
          <Content1>
            Groundbreaking financial services within the Financial industry.
          </Content1>
          <Line></Line>
          <Content>
            We first use our traders experience and knowledge to establish a
            link between the price of in cryptocurrency coins and the financial
            market. Using the econometrics and statistical methods, we look at
            the precision and, with the help of data mining, we enhance the
            predictive parts for the next step.
          </Content>
          <ButtonHold>
            <KnowMore>
              {" "}
              <NavLink
                to={"/about"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Know More
              </NavLink>
            </KnowMore>
            <Arrow>-</Arrow>
          </ButtonHold>
        </LeftDiv>
        <RightDiv>
          <Img src={bg2} alt="bg" />
        </RightDiv>
      </Wrapper>
    </Container>
  );
};

export default Hero2Page;
