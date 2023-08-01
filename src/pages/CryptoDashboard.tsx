import { FunctionComponent, useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CryptoDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full flex flex-row items-start justify-start gap-[1px] text-left text-lg text-purple font-tomorrow">
      <div className="bg-white flex flex-col py-[53px] px-8 items-start justify-start gap-[93px] lg:hidden">
        <div className="h-[29.45px] flex flex-row items-center justify-start gap-[22px]">
          <img
            className="relative w-[30px] h-[29.7px]"
            alt=""
            src="/logo.svg"
          />
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
              className="relative rounded-[1px] w-[19.72px] h-[15.72px]"
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
            <div className="relative w-[209.19px] h-[62.82px]">
              <img
                className="absolute top-[0px] left-[0px] w-16 h-[62.82px]"
                alt=""
                src="/iphone.svg"
              />
              <img
                className="absolute top-[24.8px] left-[206.19px] w-[3px] h-[16.69px]"
                alt=""
                src="/dots.svg"
              />
              <div className="absolute top-[14.93px] left-[79.64px] w-[89px] h-[35.35px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[89px] h-[13.74px]">
                  Iphone 6s Plus
                </div>
                <div className="absolute top-[21.6px] left-[15px] inline-block w-9 h-[13.74px]">
                  Active
                </div>
                <div className="absolute top-[26.47px] left-[0.72px] rounded-[50%] bg-green w-[6.5px] h-[6.38px]" />
              </div>
            </div>
            <div className="relative w-[209.19px] h-[62.82px]">
              <img
                className="absolute top-[0px] left-[0px] w-16 h-[62.82px]"
                alt=""
                src="/macbook.svg"
              />
              <img
                className="absolute top-[24.3px] left-[206.19px] w-[3px] h-[16.69px]"
                alt=""
                src="/dots1.svg"
              />
              <div className="absolute top-[13.99px] left-[79.64px] w-[84px] h-[35.35px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[84px] h-[13.74px]">
                  Macbook 2017
                </div>
                <div className="absolute top-[21.6px] left-[15px] inline-block w-9 h-[13.74px]">
                  Active
                </div>
                <div className="absolute top-[26.47px] left-[0.72px] rounded-[50%] bg-green w-[6.5px] h-[6.38px]" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[46px] h-[45.15px] object-cover"
          alt=""
          src="/rectangle-643@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col py-11 px-[54px] items-start justify-start gap-[51px] text-xl text-black1 sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-2xl text-text-21 md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:w-full">
            <div className="self-stretch relative uppercase font-medium">
              Welcome To Dashboard
            </div>
            <div className="self-stretch overflow-x-auto flex flex-row items-center justify-between sm:w-full sm:gap-[5px] sm:overflow-hidden">
              <div className="rounded-smi box-border w-12 h-12 flex flex-col pt-0 px-[7px] pb-[7px] items-center justify-end border-[2px] border-solid border-pallet-3-primary">
                <div className="relative rounded-3xs bg-white w-[34px] h-[34px]" />
                <img
                  className="relative w-[9px] h-[13px] mt-[-13px]"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
              <img className="relative w-12 h-12" alt="" src="/group-711.svg" />
              <div className="rounded-smi box-border w-12 h-12 flex flex-col pt-0 px-[7px] pb-[7px] items-center justify-end border-[2px] border-solid border-white">
                <div className="relative rounded-3xs bg-white w-[34px] h-[34px]" />
                <img
                  className="relative w-[13.5px] h-[15px] mt-[-15px]"
                  alt=""
                  src="/shape.svg"
                />
              </div>
              <img className="relative w-12 h-12" alt="" src="/group-713.svg" />
              <div className="rounded-smi box-border w-12 h-12 flex flex-col pt-0 px-[7px] pb-[7px] items-center justify-end border-[2px] border-solid border-white">
                <div className="relative rounded-3xs bg-white w-[34px] h-[34px]" />
                <img
                  className="relative w-[9.52px] h-[10.99px] mt-[-10px]"
                  alt=""
                  src="/fill-925.svg"
                />
              </div>
              <img className="relative w-12 h-12" alt="" src="/group-715.svg" />
              <div className="rounded-smi box-border w-12 h-12 flex flex-col pt-0 px-[7px] pb-[7px] items-center justify-end border-[2px] border-solid border-white mq500small:hidden">
                <div className="relative rounded-3xs bg-white w-[34px] h-[34px]" />
                <img
                  className="relative w-[11.38px] h-[13px] mt-[-13px]"
                  alt=""
                  src="/shape1.svg"
                />
              </div>
              <img
                className="relative w-12 h-12 mq500small:hidden"
                alt=""
                src="/group-717.svg"
              />
              <div className="rounded-smi box-border w-12 h-12 flex flex-col pt-0 px-[7px] pb-[7px] items-center justify-end border-[2px] border-solid border-white mq500small:hidden">
                <div className="relative rounded-3xs bg-white w-[34px] h-[34px]" />
                <img
                  className="relative w-[9px] h-4 mt-[-16px]"
                  alt=""
                  src="/fill-79.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[327px] flex flex-col items-start justify-start gap-[26px] md:w-full">
            <div className="self-stretch relative uppercase font-medium">
              Search
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <input
                className="[border:none] font-tomorrow text-[12] bg-white flex-1 flex flex-row py-4 px-[15px] items-start justify-start"
                type="text"
                placeholder="Enter Search Term"
              />
              <button
                className="cursor-pointer [border:none] py-3 px-[11px] bg-pallet-3-primary w-[46px] h-12 flex flex-row box-border items-center justify-center hover:bg-midnightblue"
                onClick={onButtonClick}
              >
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/search.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[41px] md:flex-col">
          <div className="w-[406px] flex flex-col items-start justify-start gap-[24px] md:w-full">
            <div className="self-stretch relative">Overview</div>
            <div className="self-stretch bg-pallet-3-primary flex flex-row py-[39px] px-10 items-center justify-start relative gap-[10px] text-xs text-white mq500small:pl-5 mq500small:pr-5 mq500small:box-border mq500small:justify-center">
              <div className="flex flex-col items-center justify-center gap-[25px] z-[0]">
                <img
                  className="relative w-[205.25px] h-[306px] hidden mq500small:flex"
                  alt=""
                  src="/frame-2221.svg"
                />
                <div className="relative">Available balance in USD</div>
                <div className="relative text-[30px]">134,510.15</div>
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
              <div className="flex-1 bg-white flex flex-col py-9 px-[37px] items-center justify-center gap-[12px] mq500small:flex-[unset] mq500small:self-stretch">
                <div className="relative tracking-[0.04em]">NioWallet</div>
                <div className="flex flex-row items-start justify-start gap-[5px] text-mid">
                  <div className="relative tracking-[-0.02em] font-medium">
                    4.434953
                  </div>
                  <div className="relative tracking-[-0.02em] font-medium text-text-color">
                    NIO
                  </div>
                </div>
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/bitcoin-icon.svg"
                />
              </div>
              <div className="flex-1 bg-white flex flex-col p-[35px] items-center justify-center gap-[12px] mq500small:flex-[unset] mq500small:self-stretch">
                <div className="relative tracking-[0.04em]">
                  Ethereum Wallet
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-mid">
                  <div className="relative font-medium">0.000298</div>
                  <div className="relative font-medium text-text-color">
                    ETH
                  </div>
                </div>
                <img
                  className="relative w-[12.67px] h-[20.45px]"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[38px] text-2xl text-text-21 md:flex-row md:flex-[unset] md:self-stretch sm:flex-col">
            <div className="w-[199px] flex flex-col items-start justify-start gap-[20px] sm:w-full">
              <div className="self-stretch bg-lavender-100 flex flex-col py-[22px] px-[30px] items-center justify-center">
                <div className="relative w-[139px] h-[51px]">
                  <div className="absolute top-[26px] left-[0px] font-semibold">
                    $18 928.15
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-text-2">
                    BTC/USD
                  </div>
                  <img
                    className="absolute top-[31.5px] left-[125.5px] w-[14.21px] h-[14.21px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-honeydew flex flex-col py-[22px] px-[30px] items-center justify-center">
                <div className="relative w-[139px] h-[51px]">
                  <div className="absolute top-[26px] left-[0px] font-semibold">
                    $591.8874
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-text-2">
                    ETH/USD
                  </div>
                  <img
                    className="absolute top-[31.5px] left-[125.5px] w-[14.21px] h-[14.21px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-lavender-200 flex flex-col py-[22px] px-[30px] items-center justify-center">
                <div className="relative w-[139px] h-[51px]">
                  <div className="absolute top-[26px] left-[0px] font-semibold">
                    $0.61688
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-text-2">
                    XRP/USD
                  </div>
                  <img
                    className="absolute top-[31.5px] left-[125.5px] w-[14.21px] h-[14.21px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-whitesmoke flex flex-col py-[23px] px-[30px] items-center justify-center">
                <div className="relative w-[139px] h-[51px]">
                  <div className="absolute top-[26px] left-[0px] font-semibold">
                    $87.9917
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-sm text-text-2">
                    Litecoin/USD
                  </div>
                  <img
                    className="absolute top-[31.79px] left-[125.79px] w-[14.21px] h-[14.21px]"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px] text-base text-black2 sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="rounded-lg bg-deeppink flex flex-row p-0.5 items-center justify-center">
                    <img
                      className="relative rounded-lg w-[53px] h-[53px] object-cover"
                      alt=""
                      src="/image-29@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative">Foodpanda</div>
                    <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                      Meal
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[5px] text-right text-red">
                  <div className="relative tracking-[0.02em] font-medium">
                    - $15.85
                  </div>
                  <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                    10:00 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[13px]">
                  <div className="rounded-lg bg-red flex flex-row p-[13px] items-center justify-center">
                    <img
                      className="relative w-[30px] h-[30px]"
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative">Vodafone</div>
                    <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                      Phone
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[5px] text-right text-red">
                  <div className="relative tracking-[0.02em] font-medium">
                    - $58
                  </div>
                  <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                    04:13 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative rounded-lg w-[57px] h-[57px]"
                    alt=""
                    src="/frame-2200.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative">Facebook</div>
                    <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                      Salary
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[5px] text-right text-green1">
                  <div className="relative tracking-[0.02em] font-medium">
                    + $7000
                  </div>
                  <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                    11:45 AM
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[13px]">
                  <div className="rounded-lg bg-black-200 flex flex-col py-1.5 px-[5px] items-center justify-center">
                    <img
                      className="relative rounded-lg w-[46px] h-11 object-cover"
                      alt=""
                      src="/image-20@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative">Uber Premier</div>
                    <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                      Transport
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[5px] text-right text-red">
                  <div className="relative tracking-[0.02em] font-medium">
                    - $8.75
                  </div>
                  <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                    8:30 AM
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
                <div className="w-[145.34px] flex flex-row items-center justify-start gap-[18px]">
                  <div className="rounded-lg [background:linear-gradient(180deg,_#0075cd,_#002b67)] flex flex-col py-[19px] px-[13px] items-center justify-center">
                    <img
                      className="relative w-[30.07px] h-[19.38px]"
                      alt=""
                      src="/group-50.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative flex items-center w-[71.6px]">{`Citi Bank `}</div>
                    <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid flex items-center w-[63.05px]">
                      Credited
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[7px] text-right text-red">
                  <div className="relative tracking-[0.02em] font-medium">
                    - $2,318.75
                  </div>
                  <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
                    8:30 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[31px] md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[28px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative">Security</div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-st1 mq500small:flex-col">
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px] mq500small:flex-[unset] mq500small:self-stretch">
                <div className="self-stretch bg-white flex flex-row py-2.5 px-[15px] items-center justify-between">
                  <div className="w-[62px] h-[39px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative font-medium">Identity</div>
                    <div className="relative text-xs">Disable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
                <div className="self-stretch bg-white flex flex-row py-2.5 px-5 items-center justify-between">
                  <div className="w-[62px] h-[39px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative font-medium">Identity</div>
                    <div className="relative text-xs">Disable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px] mq500small:flex-[unset] mq500small:self-stretch">
                <div className="self-stretch bg-white flex flex-row py-2.5 px-[22px] items-center justify-between">
                  <div className="w-[51px] h-[39px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative font-medium">Phone</div>
                    <div className="relative text-xs">Enable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" />
                </div>
                <div className="self-stretch bg-white flex flex-row py-2.5 px-[18px] items-center justify-between">
                  <div className="w-[51px] h-[39px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative font-medium">Phone</div>
                    <div className="relative text-xs">Enable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416.32px] flex flex-col items-start justify-start gap-[19px] sm:w-full">
            <div className="self-stretch relative">Mining Status</div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[29px] text-sm text-black-100 mq500small:flex-col">
              <div className="flex flex-col items-start justify-start gap-[31px]">
                <div className="w-[212.32px] flex flex-row items-center justify-between">
                  <div className="w-[166.1px] h-16 flex flex-row items-center justify-start gap-[15px]">
                    <div className="bg-yellow-02 shadow-[5px_10px_30px_rgba(255,_204,_64,_0.4)] flex flex-row p-[18px] items-center justify-center">
                      <img
                        className="relative w-7 h-7"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className="w-[87px] h-[38.01px] flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative">GPUs mining</div>
                      <div className="relative text-xs font-medium font-dm-sans text-green">
                        Running...
                      </div>
                    </div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
                <div className="w-[212.32px] flex flex-row items-center justify-between">
                  <Switch colorScheme="cryptogreen" defaultChecked />
                  <div className="w-[165.1px] h-16 flex flex-row items-center justify-start gap-[15px]">
                    <div className="bg-nd shadow-[5px_10px_30px_rgba(254,_143,_102,_0.4)] flex flex-row p-[18px] items-center justify-center">
                      <img
                        className="relative w-7 h-7"
                        alt=""
                        src="/group-137.svg"
                      />
                    </div>
                    <div className="w-[86px] h-[38.01px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative">CPUs mining</div>
                      <div className="relative text-xs font-medium font-dm-sans text-green">
                        Running...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                  <div className="bg-st shadow-[5px_10px_30px_rgba(111,_50,_255,_0.4)] flex flex-col p-[22px] items-center justify-center">
                    <img
                      className="relative w-[20.28px] h-5"
                      alt=""
                      src="/group1.svg"
                    />
                  </div>
                  <div className="w-[91px] h-[38.01px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative">Est. daily USD</div>
                    <div className="relative text-xs font-medium font-dm-sans text-text-color-02">
                      $25.03
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                  <div className="bg-st shadow-[5px_10px_30px_rgba(111,_50,_255,_0.4)] flex flex-col p-[22px] items-center justify-center">
                    <img
                      className="relative w-[20.28px] h-5"
                      alt=""
                      src="/group2.svg"
                    />
                  </div>
                  <div className="w-[91px] h-[38.01px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative">Est. daily USD</div>
                    <div className="relative text-xs font-medium font-dm-sans text-text-color-02">
                      $25.03
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;
