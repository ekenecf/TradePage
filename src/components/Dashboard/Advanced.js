import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 5%;
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
        width: 57%;
        background-color: red;
  }
`

const Advanced = () => {
  return (
    <MainContainer>
    <Wrapper>
        <h1>Advanced Real-Time Chart</h1>
        <ForexCrossRatesBos>
        <Row>
            <div className="column" style={{overflow: "hidden"}}>
    <div className="tradingview-widget-container" style={{width: "1200px", height: "500px"}}>
        <iframe title='text' scrolling="no" allowtransparency="true" frameborder="0" className='IframeCssv' src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e26a1&symbol=NASDAQ%3AAAPL&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=pipscountfx.com&utm_medium=widget_new&utm_campaign=chart&utm_term=NASDAQ%3AAAPL#%7B%22page-uri%22%3A%22pipscountfx.com%2Fprofile.php%22%7D"  style={{boxSizing:"border-box", width: "1200px", height:"calc(468px)"}}></iframe>
    </div>
    </div>
    </Row>
        </ForexCrossRatesBos>
    </Wrapper>
    </MainContainer>
  )
}

export default Advanced
