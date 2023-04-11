import React from "react";
import {
  Container,
  Wrapper,
  Wrap,
  H1,
  Line,
  Div,
  Icon,
  Content1,
  Content,
  Circle1,
  Circle2,
  Circle3,
} from "./Component4Style";
import shield from "./shield.svg";
import files from "./files.svg";
import conversation from "./conversation.svg";

const Component4 = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Reasons to choose us</H1>
        <Line></Line>
        <Wrap>
          <Div>
            <Circle1>
              <Circle2>
                <Circle3>
                  <Icon src={shield} alt="icon" />
                </Circle3>
              </Circle2>
            </Circle1>
            <Content1>INSTANT WITHDRAWALS</Content1>
            <Content>
              Our fee-free instant withdrawal interface is accessible 24/7. The
              minimum withdrawal amount is just 0.0005 BTC or it's equivalent in dollars($).
            </Content>
          </Div>
          <Div>
            <Circle1>
              <Circle2>
                <Circle3>
                  <Icon src={files} alt="icon" />
                </Circle3>
              </Circle2>
            </Circle1>
            <Content1>24/7 SUPPORT</Content1>
            <Content>
              Technical support and consultation are available 24 hours a day, 7
              days a week through 3 different channels.
            </Content>
          </Div>
          <Div>
            <Circle1>
              <Circle2>
                <Circle3>
                  <Icon src={conversation} alt="icon" />
                </Circle3>
              </Circle2>
            </Circle1>
            <Content1>DAILY EARNINGS</Content1>
            <Content>
              Once you’ve activated your trading account, you’ll receive
              earnings every day at a fixed rate of 10%.
            </Content>
          </Div>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Component4;
