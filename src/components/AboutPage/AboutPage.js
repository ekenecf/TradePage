import React from 'react';
import styled from 'styled-components';
import Container1 from './Component1/Component1'
import Container2 from './Component2/Component2'
import Component3 from './Component3/Component3';
import Component4 from './Component4/Component4';
import Footer from '../LandingPage/Footer/Footer';

const AboutPage = () => {
  return (
    <Container>
      <Container1/>
      <Container2/>
      <Component3/>
      <Component4/>
      <Footer/>
    </Container>
  )
};

export default AboutPage;

const Container = styled.div`
width: 100%;
height: auto;
/* background-color: red; */
`;