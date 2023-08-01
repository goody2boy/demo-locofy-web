import { FunctionComponent, useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import MineShineContainer from "../components/MineShineContainer";
import { useNavigate } from "react-router-dom";
import ContainerView from "../components/ContainerView";
import "./CryptoDashboard.css";
const CryptoDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  return (
    <div className="crypto-dashboard">
      <MineShineContainer />
      <div className="main-panel">
        <div className="top-section">
          <div className="welcome-to-dashboard">
            <div className="search">Welcome To Dashboard</div>
            <div className="frame-parent">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <img className="vector-icon" alt="" src="/vector2.svg" />
              </div>
              <img className="frame-item" alt="" src="/group-711.svg" />
              <div className="rectangle-group">
                <div className="frame-child" />
                <img className="shape-icon" alt="" src="/shape.svg" />
              </div>
              <img className="frame-item" alt="" src="/group-713.svg" />
              <div className="rectangle-group">
                <div className="frame-child" />
                <img className="fill-925-icon" alt="" src="/fill-925.svg" />
              </div>
              <img className="frame-item" alt="" src="/group-715.svg" />
              <div className="frame-div">
                <div className="frame-child" />
                <img className="shape-icon1" alt="" src="/shape1.svg" />
              </div>
              <img className="frame-child3" alt="" src="/group-717.svg" />
              <div className="frame-div">
                <div className="frame-child" />
                <img className="fill-79-icon" alt="" src="/fill-79.svg" />
              </div>
            </div>
          </div>
          <div className="search-section">
            <div className="search">Search</div>
            <div className="search-term-parent">
              <input
                className="search-term"
                type="text"
                placeholder="Enter Search Term"
              />
              <button className="button" onClick={onButtonClick}>
                <img className="search-icon" alt="" src="/search.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="middle-section">
          <ContainerView />
          <div className="company-and-exchange">
            <div className="exchange-rate-section">
              <div className="exchange-rate-1">
                <div className="parent">
                  <div className="div">$18 928.15</div>
                  <div className="btcusd">BTC/USD</div>
                  <img className="frame-child5" alt="" src="/vector-1.svg" />
                </div>
              </div>
              <div className="exchange-rate-2">
                <div className="parent">
                  <div className="div">$591.8874</div>
                  <div className="btcusd">ETH/USD</div>
                  <img className="frame-child5" alt="" src="/vector-1.svg" />
                </div>
              </div>
              <div className="exchange-rate-3">
                <div className="parent">
                  <div className="div">$0.61688</div>
                  <div className="btcusd">XRP/USD</div>
                  <img className="frame-child5" alt="" src="/vector-1.svg" />
                </div>
              </div>
              <div className="exchange-rate-4">
                <div className="parent">
                  <div className="div">$87.9917</div>
                  <div className="btcusd">Litecoin/USD</div>
                  <img className="frame-child8" alt="" src="/vector-11.svg" />
                </div>
              </div>
            </div>
            <div className="company-section">
              <div className="food-panda">
                <div className="frame-group">
                  <div className="image-29-wrapper">
                    <img
                      className="image-29-icon"
                      alt=""
                      src="/image-29@2x.png"
                    />
                  </div>
                  <div className="foodpanda-parent">
                    <div className="foodpanda">Foodpanda</div>
                    <div className="meal">Meal</div>
                  </div>
                </div>
                <div className="parent2">
                  <div className="div4">- $15.85</div>
                  <div className="meal">10:00 PM</div>
                </div>
              </div>
              <div className="food-panda">
                <div className="frame-container">
                  <div className="vector-wrapper">
                    <img className="vector-icon1" alt="" src="/vector3.svg" />
                  </div>
                  <div className="foodpanda-parent">
                    <div className="foodpanda">Vodafone</div>
                    <div className="meal">Phone</div>
                  </div>
                </div>
                <div className="parent2">
                  <div className="div4">- $58</div>
                  <div className="meal">04:13 PM</div>
                </div>
              </div>
              <div className="food-panda">
                <div className="frame-group">
                  <img className="frame-icon" alt="" src="/frame-2200.svg" />
                  <div className="foodpanda-parent">
                    <div className="foodpanda">Facebook</div>
                    <div className="meal">Salary</div>
                  </div>
                </div>
                <div className="parent4">
                  <div className="div4">+ $7000</div>
                  <div className="meal">11:45 AM</div>
                </div>
              </div>
              <div className="food-panda">
                <div className="frame-container">
                  <div className="image-20-wrapper">
                    <img
                      className="image-20-icon"
                      alt=""
                      src="/image-20@2x.png"
                    />
                  </div>
                  <div className="foodpanda-parent">
                    <div className="foodpanda">Uber Premier</div>
                    <div className="meal">Transport</div>
                  </div>
                </div>
                <div className="parent2">
                  <div className="div4">- $8.75</div>
                  <div className="meal">8:30 AM</div>
                </div>
              </div>
              <div className="food-panda">
                <div className="frame-parent3">
                  <div className="group-wrapper">
                    <img className="frame-child9" alt="" src="/group-50.svg" />
                  </div>
                  <div className="foodpanda-parent">
                    <div className="citi-bank1">{`Citi Bank `}</div>
                    <div className="credited">Credited</div>
                  </div>
                </div>
                <div className="parent6">
                  <div className="div4">- $2,318.75</div>
                  <div className="meal">8:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="security-section">
            <div className="security">Security</div>
            <div className="frame-parent4">
              <div className="identity-disable-parent">
                <div className="identity-disable">
                  <div className="identity-parent">
                    <div className="identity">Identity</div>
                    <div className="disable">Disable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
                <div className="identity-disable1">
                  <div className="identity-parent">
                    <div className="identity">Identity</div>
                    <div className="disable">Disable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" />
                </div>
              </div>
              <div className="identity-disable-parent">
                <div className="phone-enable">
                  <div className="phone-parent">
                    <div className="identity">Phone</div>
                    <div className="disable">Enable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" />
                </div>
                <div className="phone-enable1">
                  <div className="phone-parent">
                    <div className="identity">Phone</div>
                    <div className="disable">Enable</div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <div className="mining-status-section">
            <div className="security">Mining Status</div>
            <div className="mining-status">
              <div className="gpu-mining-y-parent">
                <div className="gpu-mining-y">
                  <div className="frame-parent5">
                    <div className="group-container">
                      <img className="group-icon1" alt="" src="/group.svg" />
                    </div>
                    <div className="gpus-mining-parent">
                      <div className="foodpanda">GPUs mining</div>
                      <div className="running">Running...</div>
                    </div>
                  </div>
                  <Switch colorScheme="cryptogreen" defaultChecked />
                </div>
                <div className="gpu-mining-y">
                  <Switch colorScheme="cryptogreen" defaultChecked />
                  <div className="frame-parent6">
                    <div className="group-frame">
                      <img
                        className="group-icon1"
                        alt=""
                        src="/group-137.svg"
                      />
                    </div>
                    <div className="frame">
                      <div className="foodpanda">CPUs mining</div>
                      <div className="running">Running...</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gpu-mining-y-parent">
                <div className="estimate-daily-usd">
                  <div className="group-wrapper1">
                    <img className="group-icon2" alt="" src="/group1.svg" />
                  </div>
                  <div className="est-daily-usd-parent">
                    <div className="foodpanda">Est. daily USD</div>
                    <div className="div9">$25.03</div>
                  </div>
                </div>
                <div className="estimate-daily-usd">
                  <div className="group-wrapper1">
                    <img className="group-icon2" alt="" src="/group2.svg" />
                  </div>
                  <div className="est-daily-usd-parent">
                    <div className="foodpanda">Est. daily USD</div>
                    <div className="div9">$25.03</div>
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
