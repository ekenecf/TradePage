import React, { useState } from "react";
import {
  Container,
  Wrapper,
  H1,
  Content,
  Line,
  Div,
  BackgroundText,
  CircleHold,
  Circle1,
  Circle2,
  Circle3,
  Topic,
  CountHold,
  CountInput,
  ProfitHold,
  CalculatorDiv,
  Left,
  Number,
  Mid,
  Right,
  BottomDiv,
  BottomLeft,
  Top,
  Info,
  Texts,
  Bottom,
  BottomRight,
  Circle4,
  Label,
  FirstWrap,
} from "./Component2Style";
import { TfiInfo, TfiLock } from "react-icons/tfi";

const Component2 = () => {
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setMessage(event.target.value);
  };
  console.log(message);

  return (
    <Container>
      <Wrapper>
        <FirstWrap
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <H1>Calculate your profit</H1>
          <Content>
            Try entering different amounts and you will see how much you'll
            earn.
          </Content>
          <Line></Line>
        </FirstWrap>
        <Div>
          <BackgroundText> Investment Calculator </BackgroundText>
          <CircleHold>
            <Circle1>
              <Circle2>
                <Circle3>
                  <Circle4></Circle4>
                </Circle3>
              </Circle2>
            </Circle1>
          </CircleHold>
          <CalculatorDiv>
            <Topic>ENTER YOUR INVESTMENT AMOUNT</Topic>
            <CountHold>
              <CountInput
                style={{
                  display: "inline-block",
                  outline: "0",
                  border: "2px solid #c2bfef",
                  height: "52px",
                  lineHeight: "100%",
                  padding: " 6px 12px",
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  color: "#3c357e",
                }}
                type="number"
                placeholder="10"
                value={message}
                onChange={(e) => handleInput(e)}
              />
              <Label>$</Label>
            </CountHold>
            <ProfitHold>
              <Left>
                <Content>Hourly Profit</Content>
                <Number>${message ? message * 0.002 : "0.002"} </Number>
              </Left>
              <Mid>
                <Content>Daily Profit</Content>
                <Number>${message ? message * 0.048 : "0.048"} </Number>
              </Mid>
              <Right>
                <Content>Monthly Profit</Content>
                <Number>${message ? message * 1.248 : "1.248"}</Number>
              </Right>
            </ProfitHold>
            <BottomDiv>
              <BottomLeft>
                <Top>
                  <Info>
                    <TfiInfo />
                  </Info>
                  <Texts>You can have as many deposits as you deem fit.</Texts>
                </Top>
                <Bottom>
                  <Info>
                    <TfiLock />
                  </Info>
                  <Texts>Minimum withdrawal amount is 0.00005 BTC or its dollar($) equivalent</Texts>
                </Bottom>
              </BottomLeft>
              <BottomRight to="/signup">Sign Up Now</BottomRight>
            </BottomDiv>
          </CalculatorDiv>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Component2;
