import { FunctionComponent } from "react";
import styled from "styled-components";
import NioWalletContainer from "./NioWalletContainer";

const Overview1 = styled.div`
  align-self: stretch;
  position: relative;
`;
const FrameChild = styled.img`
  position: relative;
  width: 205.25px;
  height: 306px;
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
const AvailableBalanceIn = styled.div`
  position: relative;
`;
const Div = styled.div`
  position: relative;
  font-size: 30px;
`;
const Div1 = styled.div`
  position: relative;
  font-size: 22px;
`;
const TransactionsParent = styled.div`
  width: 75px;
  height: 52.58px;
  display: flex;
  flex-direction: column;
  padding: 0.5821533203125px 0px 0px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 12px;
`;
const WalletsParent = styled.div`
  width: 42px;
  height: 52.58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const FrameGroup = styled.div`
  width: 159px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  z-index: 0;
`;
const BitcoinCardChild = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 152.79px);
  right: -0.25px;
  width: 205.25px;
  height: 306px;
  z-index: 1;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BitcoinCard = styled.div`
  align-self: stretch;
  background-color: #4f46ba;
  display: flex;
  flex-direction: row;
  padding: 39px 40px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 10px;
  font-size: 12px;
  color: #fff;
  @media screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    justify-content: center;
  }
`;
const WalletSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
  font-size: 11px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const OverviewRoot = styled.div`
  width: 406px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  text-align: left;
  font-size: 20px;
  color: #0d1118;
  font-family: Tomorrow;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
const ContainerView: FunctionComponent = () => {
  return (
    <OverviewRoot>
      <Overview1>Overview</Overview1>
      <BitcoinCard>
        <FrameParent>
          <FrameChild alt="" src="/frame-2221.svg" />
          <AvailableBalanceIn>Available balance in USD</AvailableBalanceIn>
          <Div>134,510.15</Div>
          <FrameGroup>
            <TransactionsParent>
              <AvailableBalanceIn>Transactions</AvailableBalanceIn>
              <Div1>34,405</Div1>
            </TransactionsParent>
            <WalletsParent>
              <AvailableBalanceIn>Wallets</AvailableBalanceIn>
              <Div1>23</Div1>
            </WalletsParent>
          </FrameGroup>
          <AvailableBalanceIn>Last activity at 21 May, 2021</AvailableBalanceIn>
        </FrameParent>
        <BitcoinCardChild alt="" src="/frame-2221.svg" />
      </BitcoinCard>
      <WalletSection>
        <NioWalletContainer
          walletBalance="NioWallet"
          walletBalanceNio="4.434953"
          walletBalanceEth="NIO"
          walletTransactionIdNio="/bitcoin-icon.svg"
        />
        <NioWalletContainer
          walletBalance="Ethereum Wallet"
          walletBalanceNio="0.000298"
          walletBalanceEth="ETH"
          walletTransactionIdNio="/icon.svg"
          propLetterSpacing="unset"
          propLetterSpacing1="unset"
          propWidth="12.67px"
        />
      </WalletSection>
    </OverviewRoot>
  );
};

export default ContainerView;
