import React from "react";
import {
  Container,
  Wrapper,
  Hold,
  H1,
  Line,
  Content,
  Div,
  Wrap,
  Circle2,
  H5,
} from "./Component1Style";

const Component1 = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <H1>Refer your friends and get commission!</H1>
          <Line></Line>
          <Content>
            The affiliate program was created to reward members, who share our
            financial trading platform with their friends and colleagues.
            When you refer other people to our trading platform, you earn up to
            8% from their direct account funding.
          </Content>
          <Div>
            <Wrap>
              <Circle2>4%</Circle2>
              <H5>Default Commission</H5>
            </Wrap>
            <Wrap>
              <Circle2>8%</Circle2>
              <H5>Representative Commission</H5>
            </Wrap>
          </Div>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Component1;
