import { FunctionComponent } from "react";
import ActiveDeviceContainer from "./ActiveDeviceContainer";

const MineShineContainer: FunctionComponent = () => {
  return (
    <div className="bg-white flex flex-col py-[53px] px-8 items-start justify-start gap-[93px] text-left text-lg text-purple font-tomorrow lg:hidden">
      <div className="h-[29.45px] flex flex-row items-center justify-start gap-[22px]">
        <img className="relative w-[30px] h-[29.7px]" alt="" src="/logo.svg" />
        <div className="relative inline-block w-[106px] h-[21.78px] shrink-0">{`Mine&Shine`}</div>
      </div>
      <div className="w-[152.1px] h-[322.04px] flex flex-col py-0 pr-0 pl-[1.3173880577087402px] box-border items-start justify-start gap-[37px] text-lightslategray">
        <div className="w-[134.78px] h-[21.59px] flex flex-row items-start justify-start gap-[22px] text-purple">
          <img
            className="relative w-[17.64px] h-[16.69px]"
            alt=""
            src="/home-1.svg"
          />
          <div className="relative inline-block w-[95px] h-[21.59px] shrink-0">
            Dashboard
          </div>
        </div>
        <div className="w-[93.1px] h-[21.59px] flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative w-[20.27px] h-[16.69px]"
            alt=""
            src="/wallet-2.svg"
          />
          <div className="relative inline-block w-[52px] h-[21.59px] shrink-0">
            Wellet
          </div>
        </div>
        <div className="w-[120.32px] h-[21.59px] flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative w-[19.99px] h-[16.85px]"
            alt=""
            src="/group-1.svg"
          />
          <div className="relative inline-block w-20 h-[21.59px] shrink-0">
            Statistics
          </div>
        </div>
        <div className="w-[151.82px] h-[21.59px] flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative w-[19.72px] h-[19.63px]"
            alt=""
            src="/vector.svg"
          />
          <div className="relative inline-block w-[111px] h-[21.59px] shrink-0">
            Transactions
          </div>
        </div>
        <div className="w-[126.54px] h-[21.59px] flex flex-row items-center justify-start gap-[21px]">
          <img
            className="relative w-[19.16px] h-[16.69px]"
            alt=""
            src="/store.svg"
          />
          <div className="relative inline-block w-[86px] h-[21.59px] shrink-0">
            Exchange
          </div>
        </div>
        <div className="w-[89.82px] h-[21.59px] flex flex-row py-0 pr-[0.09995269775390625px] pl-[4.76837158203125e-7px] box-border items-center justify-start gap-[21px]">
          <img
            className="relative rounded-12xs w-[19.72px] h-[15.72px]"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative inline-block w-[49px] h-[21.59px] shrink-0">
            News
          </div>
        </div>
      </div>
      <div className="self-stretch h-[198.58px] flex flex-col items-start justify-start gap-[26px] text-base text-black1">
        <div className="relative inline-block w-[102px] h-[18.65px] shrink-0">
          Active device
        </div>
        <div className="w-[209.19px] h-[153.63px] overflow-hidden shrink-0 flex flex-col pt-0 px-0 pb-[0.988922119140625px] box-border items-center justify-start gap-[27px] text-xs text-st1">
          <ActiveDeviceContainer
            deviceDimensions="/iphone.svg"
            productDimensions="/dots.svg"
            productName="Iphone 6s Plus"
          />
          <ActiveDeviceContainer
            deviceDimensions="/macbook.svg"
            productDimensions="/dots1.svg"
            productName="Macbook 2017"
            propWidth="84px"
            propWidth1="84px"
          />
        </div>
      </div>
      <img
        className="relative w-[46px] h-[45.15px] object-cover"
        alt=""
        src="/rectangle-643@2x.png"
      />
    </div>
  );
};

export default MineShineContainer;
