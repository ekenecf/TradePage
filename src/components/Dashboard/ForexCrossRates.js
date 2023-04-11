import React from 'react'
import styled from 'styled-components'
import './eze.css'

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items:center;

    h1{
        font-family: 1em sans-serif;
        margin-bottom: 3%;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ForexCrossRatesBos = styled.div`
      @media (max-width: 768px) {
        width: 50%;
        background: #000;
  }
`

const Row = styled.div`
      @media (max-width: 768px) {
        width: 30%;
  }
`


const ForexCrossRates = () => {
  return (
   <MainContainer>
        <Wrapper>
            <h1>Forex Cross Rates</h1>
            <ForexCrossRatesBos>
            <Row>
                <div className="column" style={{overflow: "hidden"}}>
            <div className="tradingview-widget-container" style={{width: "1100px", height: "500px"}}>
		        <iframe title='text' scrolling="no" allowtransparency="true" frameborder="0" className='IframeCssv' src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A1200%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22pipscountfx.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22pipscountfx.com%2Fprofile.php%22%7D"  style={{boxSizing:"border-box", width: "1200px", height:"calc(468px)"}}></iframe>

        </div>
        </div>
        </Row>
            </ForexCrossRatesBos>
        </Wrapper>
   </MainContainer>
  )
}

export default ForexCrossRates
