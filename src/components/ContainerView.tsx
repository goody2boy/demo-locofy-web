import { FunctionComponent } from "react";
import NioWalletContainer from "./NioWalletContainer";
import "./ContainerView.css";
const ContainerView: FunctionComponent = () => {
  return (
    <div className="overview">
      <div className="overview1">Overview</div>
      <div className="bitcoin-card">
        <div className="frame-parent10">
          <img className="frame-child12" alt="" src="/frame-2221.svg" />
          <div className="available-balance-in">Available balance in USD</div>
          <div className="div12">134,510.15</div>
          <div className="frame-parent11">
            <div className="transactions-parent">
              <div className="available-balance-in">Transactions</div>
              <div className="div13">34,405</div>
            </div>
            <div className="wallets-parent">
              <div className="available-balance-in">Wallets</div>
              <div className="div13">23</div>
            </div>
          </div>
          <div className="available-balance-in">
            Last activity at 21 May, 2021
          </div>
        </div>
        <img className="bitcoin-card-child" alt="" src="/frame-2221.svg" />
      </div>
      <div className="wallet-section">
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
      </div>
    </div>
  );
};

export default ContainerView;
