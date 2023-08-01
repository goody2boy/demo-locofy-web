import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type ActiveDeviceContainerType = {
  deviceDimensions?: string;
  productDimensions?: string;
  productName?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const IphoneIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 64px;
  height: 62.82px;
`;
const DotsIcon = styled.img`
  position: absolute;
  top: 24.8px;
  left: 206.19px;
  width: 3px;
  height: 16.69px;
`;
const Iphone6sPlus = styled.div<{ propWidth1?: Property.Width }>`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  display: inline-block;
  width: 89px;
  height: 13.74px;
  width: ${(p) => p.propWidth1};
`;
const Active = styled.div`
  position: absolute;
  top: 21.6px;
  left: 15px;
  display: inline-block;
  width: 36px;
  height: 13.74px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 26.47px;
  left: 0.72px;
  border-radius: 50%;
  background-color: #3ecd7b;
  width: 6.5px;
  height: 6.38px;
`;
const Frame = styled.div<{ propWidth?: Property.Width }>`
  position: absolute;
  top: 14.93px;
  left: 79.64px;
  width: 89px;
  height: 35.35px;
  overflow: hidden;
  width: ${(p) => p.propWidth};
`;
const IphoneRoot = styled.div`
  position: relative;
  width: 209.19px;
  height: 62.82px;
  text-align: left;
  font-size: 12px;
  color: #5d4e7b;
  font-family: Tomorrow;
`;
const ActiveDeviceContainer: FunctionComponent<ActiveDeviceContainerType> = ({
  deviceDimensions,
  productDimensions,
  productName,
  propWidth,
  propWidth1,
}) => {
  return (
    <IphoneRoot>
      <IphoneIcon alt="" src={deviceDimensions} />
      <DotsIcon alt="" src={productDimensions} />
      <Frame propWidth={propWidth}>
        <Iphone6sPlus propWidth1={propWidth1}>{productName}</Iphone6sPlus>
        <Active>Active</Active>
        <FrameChild />
      </Frame>
    </IphoneRoot>
  );
};

export default ActiveDeviceContainer;
