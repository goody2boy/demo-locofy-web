import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full flex flex-col py-[50px] px-[67px] box-border items-start justify-start gap-[37px] text-left text-2xl text-text-21 font-tomorrow sm:pl-5 sm:pr-5 sm:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[26px] md:w-full">
        <div className="self-stretch relative uppercase font-medium">
          Search
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <input
            className="[border:none] font-tomorrow text-xs bg-white flex-1 flex flex-row py-4 px-[15px] items-start justify-start"
            type="text"
            placeholder="Enter Search Term"
          />
          <button
            className="cursor-pointer [border:none] py-3 px-[11px] bg-pallet-3-primary flex flex-row items-center justify-center hover:bg-midnightblue"
            onClick={onButtonClick}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/search2.svg"
            />
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-base text-black2">
        <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="rounded-lg bg-deeppink flex flex-row p-0.5 items-center justify-center">
              <img
                className="relative rounded-lg w-[53px] h-[53px] object-cover"
                alt=""
                src="/image-291@2x.png"
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
                src="/vector4.svg"
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
            <div className="relative tracking-[0.02em] font-medium">- $58</div>
            <div className="relative text-sm tracking-[0.02em] font-poppins text-grey-mid">
              04:13 PM
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row py-2.5 px-4 items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-[57px] h-[57px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-darkslateblue" />
              <img
                className="absolute h-[81.08%] w-[42.11%] top-[18.92%] right-[22.81%] bottom-[0%] left-[35.09%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-43.svg"
              />
            </div>
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
                src="/image-201@2x.png"
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
            <div className="relative w-[56.07px] h-[57.38px]">
              <div className="absolute top-[0px] left-[0px] rounded-lg [background:linear-gradient(180deg,_#0075cd,_#002b67)] flex flex-col py-[19px] px-[13px] items-center justify-center">
                <img
                  className="relative w-[30.07px] h-[19.38px]"
                  alt=""
                  src="/group-501.svg"
                />
              </div>
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
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-tomorrow text-black-200 text-left inline-block"
        onClick={onBackClick}
      >
        ← Back
      </button>
    </div>
  );
};

export default SearchPage;
