import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import bitcoinWalletImage from "../../asset/bitCoin-wallet.jpg";

const BitcoinWallet = () => {

  const [state, setState] = useState({
    value: "bc1qcxum393n73ywftqnm77kjg7kc0qtav5s9fay5a",
    copied: false,
  });
  return (
    <WalletContainer>
      <WalletImage>
        <img src={bitcoinWalletImage} alt="bitcoin" />
      </WalletImage>
      <WalletDetails>
        <h2>Deposit Bitcoin To This Wallet Address</h2>
        <p>
          Scan the QR code or click on 'copy text' to copy the address below
          into your wallet to deposit Bitcoin into your account
        </p>
        <InputButton>
          <input value={state.value} />
          <CopyToClipboard
            text={state.value}
            onCopy={() => setState({ copied: true })}
          >
            <button>{state.copied ? "Copied" : "Copy text"}</button>
          </CopyToClipboard>
        </InputButton>
      </WalletDetails>
    </WalletContainer>
  );
};

export default BitcoinWallet;

const WalletContainer = styled.section`
  background: #cccccc;
  height: 55vh;
  margin: 4% 13% 0 13%;
  padding-top: 5%;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: max-content;
    margin: 3% 5% 0 5%;

  }
`;

const WalletImage = styled.div`
  padding: 0 0 0 2%;
  width: 45%;
  img {
    width: 90%;
  }
  @media (max-width: 768px) {
   width: 100%;
   display: flex;
   padding: 0;
   justify-content: center;
   img {
    width: 65%;
  }
  }
`;

const WalletDetails = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #2568a0;
    margin: 0;
    font-size: 30px;
    margin-bottom: 10%;
  }

  p {
    margin: 0 0 4% 0;
    text-align: start;
    font-size: 17px;
    color: #2568a0;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
      margin-inline: 3%;
      margin-top: 4%;
    }

    p {
      margin: 0 0 4% 2%;
    }

  }
`;

const InputButton = styled.div`
  display: flex;
  gap: 2%;

  button {
    border: none;
    cursor: pointer;
    background: #4caf50;
    width: 30%;
    color: #ffff;
  }
  input {
    width: 50%;
    height: 7vh;
    font-size: 20px;
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 4%;
  }
`;
