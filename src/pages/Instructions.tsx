import { FunctionComponent } from "react";
import SectionCard from "../components/SectionCard";
import LocofyPluginSection from "../components/LocofyPluginSection";

const Instructions: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[996.77px] text-left text-[18.68px] text-studio-darkmode-explainertext-485269 font-roboto">
      <b className="absolute top-[439.41px] left-[0px] text-[56.04px] leading-[74.73px] text-darkslategray-100">
        Try out this Locofy.ai demo file!
      </b>
      <div className="absolute top-[519.42px] left-[5.02px] leading-[27.09px] inline-block w-[736.1px]">
        We took a popular Figma design template and used Locofy.ai to turn it
        into responsive production-ready code. Check out the guide video on how
        we did it!
      </div>
      <SectionCard />
      <div className="absolute top-[761.87px] left-[8.41px] leading-[27.09px] font-semibold inline-block w-[668.56px]">
        To experience this demo:
      </div>
      <div className="absolute top-[968.77px] left-[8.41px] w-[704.99px] h-7">
        <div className="absolute top-[0px] left-[36.43px] leading-[27.09px] inline-block w-[668.56px]">
          Total time: 5 to 7 minutes
        </div>
        <img
          className="absolute top-[0.15px] left-[0px] w-[27.09px] h-[27.09px]"
          alt=""
          src="/group-767.svg"
        />
      </div>
      <LocofyPluginSection />
      <img
        className="absolute top-[266.36px] left-[calc(50%_+_415.07px)] w-[178.29px] h-[162.73px]"
        alt=""
        src="/guide-guy.svg"
      />
      <div className="absolute top-[589.23px] left-[1.93px] w-[433px] h-[119.39px] flex flex-col items-start justify-start gap-[12.99px] text-studio-darkmode-maincta-457eff">
        <div className="relative w-[422.28px] h-[31.14px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[9.14px]">
            <div className="relative w-[31.14px] h-[31.14px] overflow-hidden shrink-0">
              <img
                className="absolute h-[36.72%] w-[27.54%] top-[31.64%] right-[33.59%] bottom-[31.64%] left-[38.87%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group3.svg"
              />
              <div className="absolute h-[82.15%] w-[82.15%] top-[9.51%] right-[9.28%] bottom-[8.33%] left-[8.56%] rounded-[5.78px] box-border border-[1.4px] border-solid border-studio-darkmode-maincta-457eff" />
            </div>
            <a
              className="relative [text-decoration:underline] leading-[27.25px] font-bold text-[inherit]"
              href="https://youtu.be/weKL9uQEVrY"
              target="_blank"
            >
              Watch video: Figma design to Live Dashboard
            </a>
          </div>
        </div>
        <div className="relative w-[385.28px] h-[31.13px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[9.14px]">
            <img
              className="relative w-[31.13px] h-[31.13px] overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
            <a
              className="relative [text-decoration:underline] leading-[27.25px] font-bold text-[inherit]"
              href="https://www.figma.com/community/file/1099261172037705865"
              target="_blank"
            >
              Get the original design file by @ARShakir
            </a>
          </div>
        </div>
        <div className="relative w-[433.28px] h-[31.13px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[9.14px]">
            <img
              className="relative w-[31.13px] h-[31.13px] overflow-hidden shrink-0"
              alt=""
              src="/frame1.svg"
            />
            <a
              className="relative [text-decoration:underline] leading-[27.25px] font-bold text-[inherit]"
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
