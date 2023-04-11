import React from "react";
import {
  Container,
  Wrapper,
  TextsHold,
  Img,
  H4,
  H1,
  Content,
  Content1,
  Line,
  ButtonHold,
  Text,
  Arrow,
} from "./Component2Style";
import trendup from "./trendup.svg";
import { NavLink } from "react-router-dom";

const Component2 = () => {
  return (
    <Container>
      <Wrapper>
        <TextsHold>
          <Img src={trendup} alt="/icon" />
          <H4>OUR VISION</H4>
          <H1>Managing Your Financial Market Portfolio</H1>
          <Content1>Algorithmic trading principles</Content1>
          <Line></Line>
          <Content>
            We look at the market’s various levels, especially pertaining to the
            data of the learning machines of transactions information and
            orders. It also looks at smart money arrivals and outsources. This
            leads to lower wait times and a reduction in mistakes, allowing
            people to buy the most lucrative cryptocurrency. With so many
            trading going on and the leverage it has, the cryptocurrency market
            has been quite lucrative. We have come up with programmed dealership
            machines to address the vast array of day-to-day profits.
          </Content>
          <ButtonHold>
            <Text>
              <NavLink
                to={"/siginup"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                START TRADING
              </NavLink>
            </Text>
            <Arrow></Arrow>
          </ButtonHold>
        </TextsHold>
      </Wrapper>
    </Container>
  );
};

export default Component2;
