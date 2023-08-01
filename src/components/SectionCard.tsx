import { FunctionComponent } from "react";
import "./SectionCard.css";
const SectionCard: FunctionComponent = () => {
  return (
    <div className="instructions-inner">
      <div className="group-wrapper3">
        <div className="group-wrapper3">
          <div className="rectangle-parent2">
            <div className="group-item" />
            <div className="download-the-locofy">
              Download the Locofy plugin for Figma
            </div>
            <b className="b">1</b>
            <b className="get-locofy-plugin">Get Locofy Plugin</b>
          </div>
          <div className="rectangle-parent3">
            <div className="group-item" />
            <div className="click-on-the">
              Click on the Dashboard design and Preview
            </div>
            <b className="b">3</b>
            <b className="preview"> preview</b>
          </div>
          <div className="rectangle-parent4">
            <div className="group-item" />
            <div className="play-with-the">
              Play with the app using the plugin preview
            </div>
            <b className="b">4</b>
            <b className="preview">Interact</b>
          </div>
          <div className="rectangle-parent5">
            <div className="group-item" />
            <div className="play-with-the">
              Click “View Code” to view code to builder
            </div>
            <b className="b">5</b>
            <b className="preview">View Code</b>
          </div>
          <div className="rectangle-parent6">
            <div className="group-item" />
            <div className="play-with-the">
              Deploy to live website or export code
            </div>
            <b className="b">6</b>
            <b className="preview">Export Code</b>
          </div>
          <div className="rectangle-parent7">
            <div className="group-item" />
            <div className="create-a-web">
              Create a Web project (React, HTML, NextJS, Gatsby)
            </div>
            <b className="b">2</b>
            <b className="create-project">Create project</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
