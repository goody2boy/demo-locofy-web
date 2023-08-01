import { FunctionComponent } from "react";
import SectionCard from "../components/SectionCard";
import LocofyPluginSection from "../components/LocofyPluginSection";
import "./Instructions.css";
const Instructions: FunctionComponent = () => {
  return (
    <div className="instructions">
      <b className="try-out-this">Try out this Locofy.ai demo file!</b>
      <div className="we-took-a">
        We took a popular Figma design template and used Locofy.ai to turn it
        into responsive production-ready code. Check out the guide video on how
        we did it!
      </div>
      <SectionCard />
      <div className="to-experience-this">To experience this demo:</div>
      <div className="total-time-5-to-7-minutes-parent">
        <div className="total-time-5">Total time: 5 to 7 minutes</div>
        <img className="group-child" alt="" src="/group-767.svg" />
      </div>
      <LocofyPluginSection />
      <img className="guide-guy-icon" alt="" src="/guide-guy.svg" />
      <div className="group-parent">
        <div className="frame-wrapper">
          <div className="video-parent">
            <div className="video">
              <img className="group-icon4" alt="" src="/group3.svg" />
              <div className="video-child" />
            </div>
            <a
              className="watch-video-figma"
              href="https://youtu.be/weKL9uQEVrY"
              target="_blank"
            >
              Watch video: Figma design to Live Dashboard
            </a>
          </div>
        </div>
        <div className="group-div">
          <div className="video-parent">
            <img className="frame-icon1" alt="" src="/frame.svg" />
            <a
              className="watch-video-figma"
              href="https://www.figma.com/community/file/1099261172037705865"
              target="_blank"
            >
              Get the original design file by @ARShakir
            </a>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="video-parent">
            <img className="frame-icon1" alt="" src="/frame1.svg" />
            <a
              className="watch-video-figma"
              href="https://www.locofy.ai/preview/7s3JSUfdu9A%2B2snK9hFFSinNv5r5chQcczz3mhqlKf9m289Dtld84Ezkpo8ibRmQE5APWl0mVuji3%2FKnlfuFXNDfFhANhm47oA%3D%3D/Crypto-Dashboard"
              target="_blank"
            >
              View a live responsive prototype of this project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
