import React from 'react';
import Marquee from "react-fast-marquee";
import {
    Container, Wrapper,Top, H1, Line, Box,
    Img, Text
} from './Hero6Style';
import sitelock from '../../../asset/sitelock.png'
import trustwave from '../../../asset/trustwave.png'
import macAfee from '../../../asset/mcafee.png'
import geotrust from '../../../asset/geotrust.png'
import trustguard from '../../../asset/trustguard.png'
import norton from '../../../asset/Norton.png'
import trends from '../../../asset/trends.png'


const Hero6 = () => {
  return (
    <Container>
        <Top>
            <H1>Authentic, Safe & Secure</H1>
            <Line></Line>
        </Top>
        <Wrapper>
        <Marquee style={{width: "100%"}} pauseOnHover={true} speed={50}>
            <Box href='https://secure.sitelock.com/'>
              <Img src={sitelock}/>
              <Text>Comprehensive cloud-based website security solutions.</Text>
            </Box>
            <Box href='https://sealserver.trustwave.com/'>
            <Img src={trustwave}/>
              <Text>Trustwave protects data and reduces security risks</Text>
            </Box>
            <Box href='https://www.mcafeesecure.com/'>
            <Img src={macAfee}/>
              <Text>McAfee solution deliver complete virus protection and internet security.</Text>
            </Box>
            <Box href='https://sealinfo.geotrust.com/'>
            <Img src={geotrust}/>
              <Text>Guarantee online customer security with SSL certificates.</Text>
            </Box>
            <Box href='https://trustsealinfo.websecurity.norton.com/'>
            <Img src={norton}/>
              <Text>Norton™ provides award-winning antivirus and security software.</Text>
            </Box>
            <Box href='http://secure.trust-guard.com/'>
            <Img src={trustguard}/>
              <Text>Trust-Guard qualified business</Text>
            </Box>
            <Box href='http://www.avgthreatlabs.com/'>
            <Img src={trends}/>
              <Text>Trends & Statistics for Malware Detected</Text>
            </Box>
        </Marquee>  
        </Wrapper>
    </Container>
  )
}

export default Hero6;