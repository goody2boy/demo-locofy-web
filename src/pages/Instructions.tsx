import { FunctionComponent } from "react";
import styled from "styled-components";
import SectionCard from "../components/SectionCard";
import LocofyPluginSection from "../components/LocofyPluginSection";

const TryOutThis = styled.b`
  position: absolute;
  top: 439.41px;
  left: 0px;
  font-size: 56.04px;
  line-height: 74.73px;
  color: #484f5e;
`;
const WeTookA = styled.div`
  position: absolute;
  top: 519.42px;
  left: 5.02px;
  line-height: 27.09px;
  display: inline-block;
  width: 736.1px;
`;
const ToExperienceThis = styled.div`
  position: absolute;
  top: 761.87px;
  left: 8.41px;
  line-height: 27.09px;
  font-weight: 600;
  display: inline-block;
  width: 668.56px;
`;
const TotalTime5 = styled.div`
  position: absolute;
  top: 0px;
  left: 36.43px;
  line-height: 27.09px;
  display: inline-block;
  width: 668.56px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 0.15px;
  left: 0px;
  width: 27.09px;
  height: 27.09px;
`;
const TotalTime5To7MinutesParent = styled.div`
  position: absolute;
  top: 968.77px;
  left: 8.41px;
  width: 704.99px;
  height: 28px;
`;
const GuideGuyIcon = styled.img`
  position: absolute;
  top: 266.36px;
  left: calc(50% + 415.07px);
  width: 178.29px;
  height: 162.73px;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 36.72%;
  width: 27.54%;
  top: 31.64%;
  right: 33.59%;
  bottom: 31.64%;
  left: 38.87%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VideoChild = styled.div`
  position: absolute;
  height: 82.15%;
  width: 82.15%;
  top: 9.51%;
  right: 9.28%;
  bottom: 8.33%;
  left: 8.56%;
  border-radius: 5.78px;
  border: 1.4px solid #457eff;
  box-sizing: border-box;
`;
const Video = styled.div`
  position: relative;
  width: 31.14px;
  height: 31.14px;
  overflow: hidden;
  flex-shrink: 0;
`;
const WatchVideoFigma = styled.a`
  position: relative;
  text-decoration: underline;
  line-height: 27.25px;
  font-weight: 700;
  color: inherit;
`;
const VideoParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 9.14px;
`;
const FrameWrapper = styled.div`
  position: relative;
  width: 422.28px;
  height: 31.14px;
`;
const FrameIcon = styled.img`
  position: relative;
  width: 31.13px;
  height: 31.13px;
  overflow: hidden;
  flex-shrink: 0;
`;
const FrameContainer = styled.div`
  position: relative;
  width: 385.28px;
  height: 31.13px;
`;
const GroupDiv = styled.div`
  position: relative;
  width: 433.28px;
  height: 31.13px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 589.23px;
  left: 1.93px;
  width: 433px;
  height: 119.39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12.99px;
  color: #457eff;
`;
const InstructionsRoot = styled.div`
  position: relative;
  width: 100%;
  height: 996.77px;
  text-align: left;
  font-size: 18.68px;
  color: #485269;
  font-family: Roboto;
`;
const Instructions: FunctionComponent = () => {
  return (
    <InstructionsRoot>
      <TryOutThis>Try out this Locofy.ai demo file!</TryOutThis>
      <WeTookA>
        We took a popular Figma design template and used Locofy.ai to turn it
        into responsive production-ready code. Check out the guide video on how
        we did it!
      </WeTookA>
      <SectionCard />
      <ToExperienceThis>To experience this demo:</ToExperienceThis>
      <TotalTime5To7MinutesParent>
        <TotalTime5>Total time: 5 to 7 minutes</TotalTime5>
        <GroupChild alt="" src="/group-767.svg" />
      </TotalTime5To7MinutesParent>
      <LocofyPluginSection />
      <GuideGuyIcon alt="" src="/guide-guy.svg" />
      <GroupParent>
        <FrameWrapper>
          <VideoParent>
            <Video>
              <GroupIcon alt="" src="/group3.svg" />
              <VideoChild />
            </Video>
            <WatchVideoFigma
              href="https://youtu.be/weKL9uQEVrY"
              target="_blank"
            >
              Watch video: Figma design to Live Dashboard
            </WatchVideoFigma>
          </VideoParent>
        </FrameWrapper>
        <FrameContainer>
          <VideoParent>
            <FrameIcon alt="" src="/frame.svg" />
            <WatchVideoFigma
              href="https://www.figma.com/community/file/1099261172037705865"
              target="_blank"
            >
              Get the original design file by @ARShakir
            </WatchVideoFigma>
          </VideoParent>
        </FrameContainer>
        <GroupDiv>
          <VideoParent>
            <FrameIcon alt="" src="/frame1.svg" />
            <WatchVideoFigma
              href="https://www.locofy.ai/preview/7s3JSUfdu9A%2B2snK9hFFSinNv5r5chQcczz3mhqlKf9m289Dtld84Ezkpo8ibRmQE5APWl0mVuji3%2FKnlfuFXNDfFhANhm47oA%3D%3D/Crypto-Dashboard"
              target="_blank"
            >
              View a live responsive prototype of this project
            </WatchVideoFigma>
          </VideoParent>
        </GroupDiv>
      </GroupParent>
    </InstructionsRoot>
  );
};

export default Instructions;
