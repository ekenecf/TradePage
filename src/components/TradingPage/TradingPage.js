import React from 'react';
import Footer from '../LandingPage/Footer/Footer';
import styled from 'styled-components';
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'

const TradingPage = () =>{

    return(
        <Container>
            <Component1/>
            <Component2/>
            <Footer/>
        </Container>
    )
};

export default TradingPage;

const Container = styled.div`
width: 100%;
/* height: 100vh; */
height: auto;
/* background-color :red; */

`;

