import styled from 'styled-components'
import certificate from "../../asset/certificate.png"

function About() {
  return (
    <AboutContainer>
      <Detail>
        <h2>About The Company</h2>
        <p>
          Welcome to ELITE-GAIN Inc. We are an organization that emphasis on
          Forex market and Cryptographic money parts. We will probably
          accomplish the most astounding profit from the movement for the
          outside cash trade (Forex) and Digital money trade markets. On the off
          chance that you might want to enter the universe of online Forex
          exchanging and Digital currency exchanging with present day Cloud
          Mining stage then you are on your correct way. Ventures with
          ELITE-GAIN - Power Of Experience are moderate and safe.
        </p>{' '}
        <br />
        <p>
           ELITE-GAIN has been doing business since 2015 and accomplished
          brilliant outcomes. The experience and aptitudes of our brokers and
          budgetary specialists is the way to the achievement of the speculation
          finance. All through our professions, every one of us has drilled
          venture administration at the most abnormal amounts and constructed a
          strong notoriety for fabulous aptitudes and considerable experience.
          Our exceptionally energetic representatives and experienced
          specialists from the zone of back and related fields including
          exchanging, examination, showcasing, PC innovation, law and
          administration are prepared to give proficient administrations.
        </p>
      </Detail>
      <Certificate> 
        <img src={certificate} alt="certificate"/>
      </Certificate>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
`

const Detail = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 35px;
    text-align: center;
    color: #13c4ea;
    font-weight: 700;
  }

  p {
    text-align: justify;
    font-family: Catamaran, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(37, 77, 111);
    @media (max-width: 768px) {
    padding:10px;
  }
  }
`

const Certificate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%
  }

  img {
    @media (max-width: 768px) {
    width: 80%;
  }
  }
`
