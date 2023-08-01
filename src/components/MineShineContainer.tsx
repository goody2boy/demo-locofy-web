import { FunctionComponent } from "react";
import ActiveDeviceContainer from "./ActiveDeviceContainer";
import "./MineShineContainer.css";
const MineShineContainer: FunctionComponent = () => {
  return (
    <div className="side-bar">
      <div className="logo-parent">
        <img className="logo-icon" alt="" src="/logo.svg" />
        <div className="mineshine">{`Mine&Shine`}</div>
      </div>
      <div className="frame-parent9">
        <div className="home-1-parent">
          <img className="home-1-icon" alt="" src="/home-1.svg" />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="wallet-2-parent">
          <img className="wallet-2-icon" alt="" src="/wallet-2.svg" />
          <div className="wellet">Wellet</div>
        </div>
        <div className="group-parent1">
          <img className="frame-child11" alt="" src="/group-1.svg" />
          <div className="statistics">Statistics</div>
        </div>
        <div className="vector-parent">
          <img className="vector-icon2" alt="" src="/vector.svg" />
          <div className="transactions">Transactions</div>
        </div>
        <div className="store-parent">
          <img className="store-icon" alt="" src="/store.svg" />
          <div className="exchange">Exchange</div>
        </div>
        <div className="vector-group">
          <img className="vector-icon3" alt="" src="/vector1.svg" />
          <div className="news">News</div>
        </div>
      </div>
      <div className="active-devices">
        <div className="active-device">Active device</div>
        <div className="frame2">
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
        </div>
      </div>
      <img className="side-bar-child" alt="" src="/rectangle-643@2x.png" />
    </div>
  );
};

export default MineShineContainer;
