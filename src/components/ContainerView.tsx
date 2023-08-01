import { FunctionComponent } from "react";
import NioWalletContainer from "./NioWalletContainer";

const ContainerView: FunctionComponent = () => {
  return (
    <div className="w-[406px] flex flex-col items-start justify-start gap-[24px] text-left text-xl text-black1 font-tomorrow md:w-full">
      <div className="self-stretch relative">Overview</div>
      <div className="self-stretch bg-pallet-3-primary flex flex-row py-[39px] px-10 items-center justify-start relative gap-[10px] text-xs text-white mq500small:pl-5 mq500small:pr-5 mq500small:box-border mq500small:justify-center">
        <div className="flex flex-col items-center justify-center gap-[25px] z-[0]">
          <img
            className="relative w-[205.25px] h-[306px] hidden mq500small:flex"
            alt=""
            src="/frame-2221.svg"
          />
          <div className="relative">Available balance in USD</div>
          <div className="relative text-11xl">134,510.15</div>
          <div className="w-[159px] flex flex-row items-center justify-between">
            <div className="w-[75px] h-[52.58px] flex flex-col pt-[0.5821533203125px] px-0 pb-0 box-border items-start justify-end gap-[12px]">
              <div className="relative">Transactions</div>
              <div className="relative text-3xl">34,405</div>
            </div>
            <div className="w-[42px] h-[52.58px] flex flex-col items-start justify-start gap-[12px]">
              <div className="relative">Wallets</div>
              <div className="relative text-3xl">23</div>
            </div>
          </div>
          <div className="relative">Last activity at 21 May, 2021</div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_152.79px)] right-[-0.25px] w-[205.25px] h-[306px] z-[1] mq500small:hidden"
          alt=""
          src="/frame-2221.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[25px] text-2xs mq500small:flex-col">
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
