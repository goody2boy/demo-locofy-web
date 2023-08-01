import { FunctionComponent, useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import MineShineContainer from "../components/MineShineContainer";
import { useNavigate } from "react-router-dom";
import ContainerView from "../components/ContainerView";

const CryptoDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full flex flex-row items-start justify-start gap-[1px] text-left text-2xl text-text-21 font-tomorrow">
      <MineShineContainer />
      <div className="flex-1 flex flex-col py-11 px-[54px] items-start justify-start gap-[51px] sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-col">
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
          <ContainerView />
          <div className="flex-1 flex flex-row items-start justify-start gap-[38px] md:flex-row md:flex-[unset] md:self-stretch sm:flex-col">
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
        <div className="self-stretch flex flex-row items-start justify-start gap-[31px] text-xl text-black1 md:flex-col">
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
