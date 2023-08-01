import { FunctionComponent } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 7.47px;
  background-color: #fff;
  width: 173.26px;
  height: 146.65px;
`;
const DownloadTheLocofy = styled.div`
  position: absolute;
  top: 90.08px;
  left: 31.06px;
  line-height: 16.84px;
  color: #5e6a86;
  display: inline-block;
  width: 111.14px;
  height: 41.87px;
`;
const B = styled.b`
  position: absolute;
  top: 18.13px;
  left: 35.81px;
  font-size: 46.7px;
  line-height: 46.7px;
  display: inline-block;
  width: 101.64px;
`;
const GetLocofyPlugin = styled.b`
  position: absolute;
  top: 68.51px;
  left: 10.71px;
  font-size: 13.96px;
  line-height: 20.21px;
  text-transform: uppercase;
  display: inline-block;
  width: 151.84px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 173.26px;
  height: 146.65px;
`;
const ClickOnThe = styled.div`
  position: absolute;
  top: 89.86px;
  left: 22.86px;
  line-height: 16.84px;
  color: #5e6a86;
  display: inline-block;
  width: 127.54px;
  height: 41.87px;
`;
const Preview = styled.b`
  position: absolute;
  top: 69.87px;
  left: 21.56px;
  font-size: 13.96px;
  line-height: 20.21px;
  text-transform: uppercase;
  display: inline-block;
  width: 130.15px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 370.58px;
  width: 173.26px;
  height: 146.65px;
`;
const PlayWithThe = styled.div`
  position: absolute;
  top: 90.08px;
  left: 26.31px;
  line-height: 16.84px;
  color: #5e6a86;
  display: inline-block;
  width: 120.64px;
  height: 41.87px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 555.88px;
  width: 173.26px;
  height: 146.65px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 741.17px;
  width: 173.26px;
  height: 146.65px;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 926.46px;
  width: 173.26px;
  height: 146.65px;
`;
const CreateAWeb = styled.div`
  position: absolute;
  top: 90.18px;
  left: 12.29px;
  line-height: 16.84px;
  color: #5e6a86;
  display: inline-block;
  width: 148.23px;
  height: 41.87px;
`;
const CreateProject = styled.b`
  position: absolute;
  top: 68.51px;
  left: 20.17px;
  font-size: 13.96px;
  line-height: 20.21px;
  text-transform: uppercase;
  display: inline-block;
  width: 132.92px;
`;
const RectangleParent2 = styled.div`
  position: absolute;
  top: 0px;
  left: 185.29px;
  width: 173.26px;
  height: 146.65px;
`;
const GroupWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1099.72px;
  height: 146.65px;
`;
const InstructionsInnerRoot = styled.div`
  position: absolute;
  top: 804.53px;
  left: 8.41px;
  width: 1099.72px;
  height: 146.65px;
  text-align: center;
  font-size: 11.55px;
  color: #457eff;
  font-family: Roboto;
`;
const SectionCard: FunctionComponent = () => {
  return (
    <InstructionsInnerRoot>
      <GroupWrapper>
        <GroupWrapper>
          <RectangleParent>
            <GroupChild />
            <DownloadTheLocofy>
              Download the Locofy plugin for Figma
            </DownloadTheLocofy>
            <B>1</B>
            <GetLocofyPlugin>Get Locofy Plugin</GetLocofyPlugin>
          </RectangleParent>
          <RectangleGroup>
            <GroupChild />
            <ClickOnThe>Click on the Dashboard design and Preview</ClickOnThe>
            <B>3</B>
            <Preview> preview</Preview>
          </RectangleGroup>
          <RectangleContainer>
            <GroupChild />
            <PlayWithThe>
              Play with the app using the plugin preview
            </PlayWithThe>
            <B>4</B>
            <Preview>Interact</Preview>
          </RectangleContainer>
          <GroupDiv>
            <GroupChild />
            <PlayWithThe>Click “View Code” to view code to builder</PlayWithThe>
            <B>5</B>
            <Preview>View Code</Preview>
          </GroupDiv>
          <RectangleParent1>
            <GroupChild />
            <PlayWithThe>Deploy to live website or export code</PlayWithThe>
            <B>6</B>
            <Preview>Export Code</Preview>
          </RectangleParent1>
          <RectangleParent2>
            <GroupChild />
            <CreateAWeb>
              Create a Web project (React, HTML, NextJS, Gatsby)
            </CreateAWeb>
            <B>2</B>
            <CreateProject>Create project</CreateProject>
          </RectangleParent2>
        </GroupWrapper>
      </GroupWrapper>
    </InstructionsInnerRoot>
  );
};

export default SectionCard;
