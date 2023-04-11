import React from 'react';
import styled from 'styled-components'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import Footer from '../LandingPage/Footer/Footer';


const AffiliatePage = () =>{

    return(
        <Container>
            <Component1/>
            <Component2/>
            <Component3/>
            <Footer/>
        </Container>
    )
};

export default AffiliatePage;

const Container = styled.div`
width: 100%;
height: auto;
/* background-color: red; */
`;