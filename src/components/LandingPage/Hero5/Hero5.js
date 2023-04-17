import React from 'react'
import {
  Container,
  Wrapper,
  LeftDiv,
  RightDiv,
  BitcoinLink,
  H1,
  Content1,
  Content,
  ButtonHold,
  ReadMore,
  Arrow2,
  Line,
} from './Hero5Style'

const Hero5 = () => {
  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  
  return (
    <Container>
      <Wrapper>
        <LeftDiv>
          <H1>We are Online!</H1>
          <Line></Line>
          <Content1>{day}-{month}-{year} {" "} {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</Content1>
          <Content>
            If you’re searching for a dependable online cryptocurrency and
            financial trading company that provides you with a safe online
            platform and a profitable income on a daily basis from any part of
            the world, then you’re in the right place.
          </Content>
          <ButtonHold>
            <ReadMore to="/about">Read More</ReadMore>
            <Arrow2></Arrow2>
          </ButtonHold>
        </LeftDiv>
        <RightDiv>
          <BitcoinLink href="https://www.facebook.com/bitcoin">
            Bitcoin
          </BitcoinLink>
        </RightDiv>
      </Wrapper>
    </Container>
  )
}

export default Hero5
