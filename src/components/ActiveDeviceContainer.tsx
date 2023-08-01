import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ActiveDeviceContainer.css";

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
    <div className="iphone">
      <img className="iphone-icon" alt="" src={deviceDimensions} />
      <img className="dots-icon" alt="" src={productDimensions} />
      <div className="frame1" style={frameStyle}>
        <div className="iphone-6s-plus" style={iphone6sPlusStyle}>
          {productName}
        </div>
        <div className="active">Active</div>
        <div className="ellipse-div" />
      </div>
    </div>
  );
};

export default ActiveDeviceContainer;
