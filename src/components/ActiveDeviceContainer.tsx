import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type ActiveDeviceContainerType = {
  deviceDimensions?: string;
  productDimensions?: string;
  productName?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const ActiveDeviceContainer: FunctionComponent<ActiveDeviceContainerType> = ({
  deviceDimensions,
  productDimensions,
  productName,
  propWidth,
  propWidth1,
}) => {
  const frameStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const iphone6sPlusStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="relative w-[209.19px] h-[62.82px] text-left text-xs text-st1 font-tomorrow">
      <img
        className="absolute top-[0px] left-[0px] w-16 h-[62.82px]"
        alt=""
        src={deviceDimensions}
      />
      <img
        className="absolute top-[24.8px] left-[206.19px] w-[3px] h-[16.69px]"
        alt=""
        src={productDimensions}
      />
      <div
        className="absolute top-[14.93px] left-[79.64px] w-[89px] h-[35.35px] overflow-hidden"
        style={frameStyle}
      >
        <div
          className="absolute top-[0px] left-[0px] font-medium inline-block w-[89px] h-[13.74px]"
          style={iphone6sPlusStyle}
        >
          {productName}
        </div>
        <div className="absolute top-[21.6px] left-[15px] inline-block w-9 h-[13.74px]">
          Active
        </div>
        <div className="absolute top-[26.47px] left-[0.72px] rounded-[50%] bg-green w-[6.5px] h-[6.38px]" />
      </div>
    </div>
  );
};

export default ActiveDeviceContainer;
