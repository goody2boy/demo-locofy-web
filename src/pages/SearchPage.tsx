import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FoodpandaContainer from "../components/FoodpandaContainer";

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
      <FoodpandaContainer />
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
