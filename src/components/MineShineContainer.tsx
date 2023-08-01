import { FunctionComponent } from "react";
import styled from "styled-components";
import ActiveDeviceContainer from "./ActiveDeviceContainer";

const LogoIcon = styled.img`
  position: relative;
  width: 30px;
  height: 29.7px;
`;
const Mineshine = styled.div`
  position: relative;
  display: inline-block;
  width: 106px;
  height: 21.78px;
  flex-shrink: 0;
`;
const LogoParent = styled.div`
  height: 29.45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
`;
const Home1Icon = styled.img`
  position: relative;
  width: 17.64px;
  height: 16.69px;
`;
const Dashboard = styled.div`
  position: relative;
  display: inline-block;
  width: 95px;
  height: 21.59px;
  flex-shrink: 0;
`;
const Home1Parent = styled.div`
  width: 134.78px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  color: #4e36fc;
`;
const Wallet2Icon = styled.img`
  position: relative;
  width: 20.27px;
  height: 16.69px;
`;
const Wellet = styled.div`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 21.59px;
  flex-shrink: 0;
`;
const Wallet2Parent = styled.div`
  width: 93.1px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const FrameChild = styled.img`
  position: relative;
  width: 19.99px;
  height: 16.85px;
`;
const Statistics = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 21.59px;
  flex-shrink: 0;
`;
const GroupParent = styled.div`
  width: 120.32px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 19.72px;
  height: 19.63px;
`;
const Transactions = styled.div`
  position: relative;
  display: inline-block;
  width: 111px;
  height: 21.59px;
  flex-shrink: 0;
`;
const VectorParent = styled.div`
  width: 151.82px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const StoreIcon = styled.img`
  position: relative;
  width: 19.16px;
  height: 16.69px;
`;
const Exchange = styled.div`
  position: relative;
  display: inline-block;
  width: 86px;
  height: 21.59px;
  flex-shrink: 0;
`;
const StoreParent = styled.div`
  width: 126.54px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 21px;
`;
const VectorIcon1 = styled.img`
  position: relative;
  border-radius: 1px;
  width: 19.72px;
  height: 15.72px;
`;
const News = styled.div`
  position: relative;
  display: inline-block;
  width: 49px;
  height: 21.59px;
  flex-shrink: 0;
`;
const VectorGroup = styled.div`
  width: 89.82px;
  height: 21.59px;
  display: flex;
  flex-direction: row;
  padding: 0px 0.09995269775390625px 0px 4.76837158203125e-7px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 21px;
`;
const FrameParent = styled.div`
  width: 152.1px;
  height: 322.04px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 1.3173880577087402px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 37px;
  color: #8a8b9f;
`;
const ActiveDevice = styled.div`
  position: relative;
  display: inline-block;
  width: 102px;
  height: 18.65px;
  flex-shrink: 0;
`;
const Frame = styled.div`
  width: 209.19px;
  height: 153.63px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0.988922119140625px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 27px;
  font-size: 12px;
  color: #5d4e7b;
`;
const ActiveDevices = styled.div`
  align-self: stretch;
  height: 198.58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26px;
  font-size: 16px;
  color: #0d1118;
`;
const SideBarChild = styled.img`
  position: relative;
  width: 46px;
  height: 45.15px;
  object-fit: cover;
`;
const SideBarRoot = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 53px 32px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 93px;
  text-align: left;
  font-size: 18px;
  color: #4e36fc;
  font-family: Tomorrow;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
const MineShineContainer: FunctionComponent = () => {
  return (
    <SideBarRoot>
      <LogoParent>
        <LogoIcon alt="" src="/logo.svg" />
        <Mineshine>{`Mine&Shine`}</Mineshine>
      </LogoParent>
      <FrameParent>
        <Home1Parent>
          <Home1Icon alt="" src="/home-1.svg" />
          <Dashboard>Dashboard</Dashboard>
        </Home1Parent>
        <Wallet2Parent>
          <Wallet2Icon alt="" src="/wallet-2.svg" />
          <Wellet>Wellet</Wellet>
        </Wallet2Parent>
        <GroupParent>
          <FrameChild alt="" src="/group-1.svg" />
          <Statistics>Statistics</Statistics>
        </GroupParent>
        <VectorParent>
          <VectorIcon alt="" src="/vector.svg" />
          <Transactions>Transactions</Transactions>
        </VectorParent>
        <StoreParent>
          <StoreIcon alt="" src="/store.svg" />
          <Exchange>Exchange</Exchange>
        </StoreParent>
        <VectorGroup>
          <VectorIcon1 alt="" src="/vector1.svg" />
          <News>News</News>
        </VectorGroup>
      </FrameParent>
      <ActiveDevices>
        <ActiveDevice>Active device</ActiveDevice>
        <Frame>
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
        </Frame>
      </ActiveDevices>
      <SideBarChild alt="" src="/rectangle-643@2x.png" />
    </SideBarRoot>
  );
};

export default MineShineContainer;
