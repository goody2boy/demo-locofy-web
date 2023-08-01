import { FunctionComponent, useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import MineShineContainer from "../components/MineShineContainer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ContainerView from "../components/ContainerView";

const Search = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
`;
const FrameChild = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  width: 34px;
  height: 34px;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 9px;
  height: 13px;
  margin-top: -13px;
`;
const RectangleParent = styled.div`
  border-radius: 13px;
  border: 2px solid #4f46ba;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  padding: 0px 7px 7px;
  align-items: center;
  justify-content: flex-end;
`;
const FrameItem = styled.img`
  position: relative;
  width: 48px;
  height: 48px;
`;
const ShapeIcon = styled.img`
  position: relative;
  width: 13.5px;
  height: 15px;
  margin-top: -15px;
`;
const RectangleGroup = styled.div`
  border-radius: 13px;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  padding: 0px 7px 7px;
  align-items: center;
  justify-content: flex-end;
`;
const Fill925Icon = styled.img`
  position: relative;
  width: 9.52px;
  height: 10.99px;
  margin-top: -10px;
`;
const ShapeIcon1 = styled.img`
  position: relative;
  width: 11.38px;
  height: 13px;
  margin-top: -13px;
`;
const FrameDiv = styled.div`
  border-radius: 13px;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  padding: 0px 7px 7px;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const FrameChild3 = styled.img`
  position: relative;
  width: 48px;
  height: 48px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Fill79Icon = styled.img`
  position: relative;
  width: 9px;
  height: 16px;
  margin-top: -16px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 5px;
    overflow: hidden;
  }
`;
const WelcomeToDashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
  @media screen and (max-width: 1050px) {
    padding-right: 0px;
    box-sizing: border-box;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const SearchTerm = styled.input`
  border: none;
  font-family: Tomorrow;
  font-size: 12;
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 16px 15px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SearchIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px 11px;
  background-color: #4f46ba;
  width: 46px;
  height: 48px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #171060;
  }
`;
const SearchTermParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const SearchSection = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26px;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
const TopSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  position: absolute;
  top: 26px;
  left: 0px;
  font-weight: 600;
`;
const Btcusd = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 14px;
  color: #6b6570;
`;
const FrameChild5 = styled.img`
  position: absolute;
  top: 31.5px;
  left: 125.5px;
  width: 14.21px;
  height: 14.21px;
`;
const Parent1 = styled.div`
  position: relative;
  width: 139px;
  height: 51px;
`;
const ExchangeRate1 = styled.div`
  align-self: stretch;
  background-color: #e3e0ff;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  align-items: center;
  justify-content: center;
`;
const ExchangeRate2 = styled.div`
  align-self: stretch;
  background-color: #d7f8e8;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  align-items: center;
  justify-content: center;
`;
const ExchangeRate3 = styled.div`
  align-self: stretch;
  background-color: #dae3f7;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  align-items: center;
  justify-content: center;
`;
const FrameChild8 = styled.img`
  position: absolute;
  top: 31.79px;
  left: 125.79px;
  width: 14.21px;
  height: 14.21px;
`;
const ExchangeRate4 = styled.div`
  align-self: stretch;
  background-color: #f0edea;
  display: flex;
  flex-direction: column;
  padding: 23px 30px;
  align-items: center;
  justify-content: center;
`;
const ExchangeRateSection = styled.div`
  width: 199px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Image29Icon = styled.img`
  position: relative;
  border-radius: 8px;
  width: 53px;
  height: 53px;
  object-fit: cover;
`;
const Image29Wrapper = styled.div`
  border-radius: 8px;
  background-color: #d70f64;
  display: flex;
  flex-direction: row;
  padding: 2px;
  align-items: center;
  justify-content: center;
`;
const Foodpanda = styled.div`
  position: relative;
`;
const Meal = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-family: Poppins;
  color: #838690;
`;
const FoodpandaParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Div4 = styled.div`
  position: relative;
  letter-spacing: 0.02em;
  font-weight: 500;
`;
const Parent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  text-align: right;
  color: #f32323;
`;
const FoodPanda = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px 16px;
  align-items: center;
  justify-content: space-between;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
`;
const VectorWrapper = styled.div`
  border-radius: 8px;
  background-color: #ff0000;
  display: flex;
  flex-direction: row;
  padding: 13px;
  align-items: center;
  justify-content: center;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
`;
const FrameIcon = styled.img`
  position: relative;
  border-radius: 8px;
  width: 57px;
  height: 57px;
`;
const Parent4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  text-align: right;
  color: #34c98e;
`;
const Image20Icon = styled.img`
  position: relative;
  border-radius: 8px;
  width: 46px;
  height: 44px;
  object-fit: cover;
`;
const Image20Wrapper = styled.div`
  border-radius: 8px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 6px 5px;
  align-items: center;
  justify-content: center;
`;
const FrameChild9 = styled.img`
  position: relative;
  width: 30.07px;
  height: 19.38px;
`;
const GroupWrapper = styled.div`
  border-radius: 8px;
  background: linear-gradient(180deg, #0075cd, #002b67);
  display: flex;
  flex-direction: column;
  padding: 19px 13px;
  align-items: center;
  justify-content: center;
`;
const CitiBank1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 71.6px;
`;
const Credited = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-family: Poppins;
  color: #838690;
  display: flex;
  align-items: center;
  width: 63.05px;
`;
const FrameParent3 = styled.div`
  width: 145.34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;
const Parent6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 7px;
  text-align: right;
  color: #f32323;
`;
const CompanySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  font-size: 16px;
  color: #1e253a;
  @media screen and (max-width: 600px) {
    flex: unset;
    align-self: stretch;
  }
`;
const CompanyAndExchange = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 38px;
  @media screen and (max-width: 1050px) {
    flex-direction: row;
    flex: unset;
    align-self: stretch;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const MiddleSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 41px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
const Security = styled.div`
  align-self: stretch;
  position: relative;
`;
const Identity = styled.div`
  position: relative;
  font-weight: 500;
`;
const Disable = styled.div`
  position: relative;
  font-size: 12px;
`;
const IdentityParent = styled.div`
  width: 62px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;
const IdentityDisable = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
`;
const IdentityDisable1 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;
const IdentityDisableParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;
const PhoneParent = styled.div`
  width: 51px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;
const PhoneEnable = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px 22px;
  align-items: center;
  justify-content: space-between;
`;
const PhoneEnable1 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px 18px;
  align-items: center;
  justify-content: space-between;
`;
const FrameParent4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 23px;
  font-size: 16px;
  color: #5d4e7b;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const SecuritySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  @media screen and (max-width: 1050px) {
    flex: unset;
    align-self: stretch;
  }
`;
const GroupIcon1 = styled.img`
  position: relative;
  width: 28px;
  height: 28px;
`;
const GroupContainer = styled.div`
  background-color: #ffcc40;
  box-shadow: 5px 10px 30px rgba(255, 204, 64, 0.4);
  display: flex;
  flex-direction: row;
  padding: 18px;
  align-items: center;
  justify-content: center;
`;
const Running = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 500;
  font-family: "DM Sans";
  color: #3ecd7b;
`;
const GpusMiningParent = styled.div`
  width: 87px;
  height: 38.01px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const FrameParent5 = styled.div`
  width: 166.1px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;
const GpuMiningY = styled.div`
  width: 212.32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const GroupFrame = styled.div`
  background-color: #fe8f66;
  box-shadow: 5px 10px 30px rgba(254, 143, 102, 0.4);
  display: flex;
  flex-direction: row;
  padding: 18px;
  align-items: center;
  justify-content: center;
`;
const Frame = styled.div`
  width: 86px;
  height: 38.01px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const FrameParent6 = styled.div`
  width: 165.1px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;
const GpuMiningYParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 31px;
`;
const GroupIcon2 = styled.img`
  position: relative;
  width: 20.28px;
  height: 20px;
`;
const GroupWrapper1 = styled.div`
  background-color: #783efd;
  box-shadow: 5px 10px 30px rgba(111, 50, 255, 0.4);
  display: flex;
  flex-direction: column;
  padding: 22px;
  align-items: center;
  justify-content: center;
`;
const Div9 = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 500;
  font-family: "DM Sans";
  color: #8a8a8c;
`;
const EstDailyUsdParent = styled.div`
  width: 91px;
  height: 38.01px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const EstimateDailyUsd = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
const MiningStatus = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 29px;
  font-size: 14px;
  color: #1c1c1f;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const MiningStatusSection = styled.div`
  width: 416.32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const BottomSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 31px;
  font-size: 20px;
  color: #0d1118;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
const MainPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 44px 54px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 51px;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const CryptoDashboardRoot = styled.div`
  position: relative;
  background-color: #f3f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1px;
  text-align: left;
  font-size: 21px;
  color: #151630;
  font-family: Tomorrow;
`;
const CryptoDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  return (
    <CryptoDashboardRoot>
      <MineShineContainer />
      <MainPanel>
        <TopSection>
          <WelcomeToDashboard>
            <Search>Welcome To Dashboard</Search>
            <FrameParent>
              <RectangleParent>
                <FrameChild />
                <VectorIcon alt="" src="/vector2.svg" />
              </RectangleParent>
              <FrameItem alt="" src="/group-711.svg" />
              <RectangleGroup>
                <FrameChild />
                <ShapeIcon alt="" src="/shape.svg" />
              </RectangleGroup>
              <FrameItem alt="" src="/group-713.svg" />
              <RectangleGroup>
                <FrameChild />
                <Fill925Icon alt="" src="/fill-925.svg" />
              </RectangleGroup>
              <FrameItem alt="" src="/group-715.svg" />
              <FrameDiv>
                <FrameChild />
                <ShapeIcon1 alt="" src="/shape1.svg" />
              </FrameDiv>
              <FrameChild3 alt="" src="/group-717.svg" />
              <FrameDiv>
                <FrameChild />
                <Fill79Icon alt="" src="/fill-79.svg" />
              </FrameDiv>
            </FrameParent>
          </WelcomeToDashboard>
          <SearchSection>
            <Search>Search</Search>
            <SearchTermParent>
              <SearchTerm type="text" placeholder="Enter Search Term" />
              <Button onClick={onButtonClick}>
                <SearchIcon alt="" src="/search.svg" />
              </Button>
            </SearchTermParent>
          </SearchSection>
        </TopSection>
        <MiddleSection>
          <ContainerView />
          <CompanyAndExchange>
            <ExchangeRateSection>
              <ExchangeRate1>
                <Parent1>
                  <Div>$18 928.15</Div>
                  <Btcusd>BTC/USD</Btcusd>
                  <FrameChild5 alt="" src="/vector-1.svg" />
                </Parent1>
              </ExchangeRate1>
              <ExchangeRate2>
                <Parent1>
                  <Div>$591.8874</Div>
                  <Btcusd>ETH/USD</Btcusd>
                  <FrameChild5 alt="" src="/vector-1.svg" />
                </Parent1>
              </ExchangeRate2>
              <ExchangeRate3>
                <Parent1>
                  <Div>$0.61688</Div>
                  <Btcusd>XRP/USD</Btcusd>
                  <FrameChild5 alt="" src="/vector-1.svg" />
                </Parent1>
              </ExchangeRate3>
              <ExchangeRate4>
                <Parent1>
                  <Div>$87.9917</Div>
                  <Btcusd>Litecoin/USD</Btcusd>
                  <FrameChild8 alt="" src="/vector-11.svg" />
                </Parent1>
              </ExchangeRate4>
            </ExchangeRateSection>
            <CompanySection>
              <FoodPanda>
                <FrameGroup>
                  <Image29Wrapper>
                    <Image29Icon alt="" src="/image-29@2x.png" />
                  </Image29Wrapper>
                  <FoodpandaParent>
                    <Foodpanda>Foodpanda</Foodpanda>
                    <Meal>Meal</Meal>
                  </FoodpandaParent>
                </FrameGroup>
                <Parent2>
                  <Div4>- $15.85</Div4>
                  <Meal>10:00 PM</Meal>
                </Parent2>
              </FoodPanda>
              <FoodPanda>
                <FrameContainer>
                  <VectorWrapper>
                    <VectorIcon1 alt="" src="/vector3.svg" />
                  </VectorWrapper>
                  <FoodpandaParent>
                    <Foodpanda>Vodafone</Foodpanda>
                    <Meal>Phone</Meal>
                  </FoodpandaParent>
                </FrameContainer>
                <Parent2>
                  <Div4>- $58</Div4>
                  <Meal>04:13 PM</Meal>
                </Parent2>
              </FoodPanda>
              <FoodPanda>
                <FrameGroup>
                  <FrameIcon alt="" src="/frame-2200.svg" />
                  <FoodpandaParent>
                    <Foodpanda>Facebook</Foodpanda>
                    <Meal>Salary</Meal>
                  </FoodpandaParent>
                </FrameGroup>
                <Parent4>
                  <Div4>+ $7000</Div4>
                  <Meal>11:45 AM</Meal>
                </Parent4>
              </FoodPanda>
              <FoodPanda>
                <FrameContainer>
                  <Image20Wrapper>
                    <Image20Icon alt="" src="/image-20@2x.png" />
                  </Image20Wrapper>
                  <FoodpandaParent>
                    <Foodpanda>Uber Premier</Foodpanda>
                    <Meal>Transport</Meal>
                  </FoodpandaParent>
                </FrameContainer>
                <Parent2>
                  <Div4>- $8.75</Div4>
                  <Meal>8:30 AM</Meal>
                </Parent2>
              </FoodPanda>
              <FoodPanda>
                <FrameParent3>
                  <GroupWrapper>
                    <FrameChild9 alt="" src="/group-50.svg" />
                  </GroupWrapper>
                  <FoodpandaParent>
                    <CitiBank1>{`Citi Bank `}</CitiBank1>
                    <Credited>Credited</Credited>
                  </FoodpandaParent>
                </FrameParent3>
                <Parent6>
                  <Div4>- $2,318.75</Div4>
                  <Meal>8:30 AM</Meal>
                </Parent6>
              </FoodPanda>
            </CompanySection>
          </CompanyAndExchange>
        </MiddleSection>
        <BottomSection>
          <SecuritySection>
            <Security>Security</Security>
            <FrameParent4>
              <IdentityDisableParent>
                <IdentityDisable>
                  <IdentityParent>
                    <Identity>Identity</Identity>
                    <Disable>Disable</Disable>
                  </IdentityParent>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </IdentityDisable>
                <IdentityDisable1>
                  <IdentityParent>
                    <Identity>Identity</Identity>
                    <Disable>Disable</Disable>
                  </IdentityParent>
                  <Switch colorScheme="cryptogreen" />
                </IdentityDisable1>
              </IdentityDisableParent>
              <IdentityDisableParent>
                <PhoneEnable>
                  <PhoneParent>
                    <Identity>Phone</Identity>
                    <Disable>Enable</Disable>
                  </PhoneParent>
                  <Switch colorScheme="cryptogreen" />
                </PhoneEnable>
                <PhoneEnable1>
                  <PhoneParent>
                    <Identity>Phone</Identity>
                    <Disable>Enable</Disable>
                  </PhoneParent>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </PhoneEnable1>
              </IdentityDisableParent>
            </FrameParent4>
          </SecuritySection>
          <MiningStatusSection>
            <Security>Mining Status</Security>
            <MiningStatus>
              <GpuMiningYParent>
                <GpuMiningY>
                  <FrameParent5>
                    <GroupContainer>
                      <GroupIcon1 alt="" src="/group.svg" />
                    </GroupContainer>
                    <GpusMiningParent>
                      <Foodpanda>GPUs mining</Foodpanda>
                      <Running>Running...</Running>
                    </GpusMiningParent>
                  </FrameParent5>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </GpuMiningY>
                <GpuMiningY>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                  <FrameParent6>
                    <GroupFrame>
                      <GroupIcon1 alt="" src="/group-137.svg" />
                    </GroupFrame>
                    <Frame>
                      <Foodpanda>CPUs mining</Foodpanda>
                      <Running>Running...</Running>
                    </Frame>
                  </FrameParent6>
                </GpuMiningY>
              </GpuMiningYParent>
              <GpuMiningYParent>
                <EstimateDailyUsd>
                  <GroupWrapper1>
                    <GroupIcon2 alt="" src="/group1.svg" />
                  </GroupWrapper1>
                  <EstDailyUsdParent>
                    <Foodpanda>Est. daily USD</Foodpanda>
                    <Div9>$25.03</Div9>
                  </EstDailyUsdParent>
                </EstimateDailyUsd>
                <EstimateDailyUsd>
                  <GroupWrapper1>
                    <GroupIcon2 alt="" src="/group2.svg" />
                  </GroupWrapper1>
                  <EstDailyUsdParent>
                    <Foodpanda>Est. daily USD</Foodpanda>
                    <Div9>$25.03</Div9>
                  </EstDailyUsdParent>
                </EstimateDailyUsd>
              </GpuMiningYParent>
            </MiningStatus>
          </MiningStatusSection>
        </BottomSection>
      </MainPanel>
    </CryptoDashboardRoot>
  );
};

export default CryptoDashboard;
