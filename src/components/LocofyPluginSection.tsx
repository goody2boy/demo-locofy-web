import { FunctionComponent } from "react";
import "./LocofyPluginSection.css";
const LocofyPluginSection: FunctionComponent = () => {
  return (
    <div className="rectangle-parent8">
      <div className="group-child5" />
      <img className="locofy-logo-1" alt="" src="/locofy-logo-1@2x.png" />
      <img className="group-9-icon" alt="" src="/group9.svg" />
      <img className="group-9-icon1" alt="" src="/group91.svg" />
      <div className="import-react-from-react-imp-wrapper">
        <div className="import-react-from-container">
          <span className="import-react-from-container1">
            <p className="import-react-from-react">
              <span className="import">import</span>
              <span>{` React `}</span>
              <span className="import">from</span>
              <span className="span">{` `}</span>
              <span className="react">"react"</span>
              <span className="span">;</span>
            </p>
            <p className="import-react-from-react">
              <span className="import">import</span>
              <span>{` { AppHeader } `}</span>
              <span className="import">from</span>
              <span className="span">{` `}</span>
              <span className="react">"./app-header"</span>
            </p>
            <p className="import-react-from-react">
              <span className="import">import</span>
              <span>{` { Footer } `}</span>
              <span className="import">from</span>
              <span className="span">{` `}</span>
              <span className="react">"./footer"</span>
            </p>
            <p className="import-home-uicss">
              <span className="import">import</span>
              <span className="span"> '</span>
              <span>./home-ui.css</span>
              <span className="span">'</span>
            </p>
            <p className="import-react-from-react">&nbsp;</p>
            <p className="import-react-from-react">
              <span className="span">{`type `}</span>
              <span className="homeuiprops">HomeUIProps</span>
              <span>{` = {`}</span>
            </p>
            <p className="import-react-from-react">
              <span>{`   header: `}</span>
              <span className="homeuiprops">HeaderProps</span>
              <span className="span">;</span>
            </p>
            <p className="import-react-from-react">{`};`}</p>
            <p className="import-react-from-react">&nbsp;</p>
            <p className="export-const-homeui-reactfun">
              <span className="import">export</span>
              <span className="span">{` const `}</span>
              <span className="homeuiprops">HomeUI</span>
              <span className="span">{`: `}</span>
              <span>React.FunctionComponent</span>
              <span className="span">{`<`}</span>
              <span className="homeuiprops">HomeUIProps</span>
              <span className="span">{`> = React.memo(`}</span>
            </p>
            <p className="header">{`   ({ header }) => {`}</p>
            <p className="header"> return (</p>
            <p className="header">
              <span>{`        <div class=`}</span>
              <span className="react">{`"home-ui-root">`}</span>
            </p>
          </span>
        </div>
      </div>
      <img className="plugin-mockup-icon" alt="" src="/pluginmockup.svg" />
      <div className="frame-wrapper2">
        <div className="group-parent3">
          <div className="get-locofy-plugin-parent">
            <a
              className="get-locofy-plugin1"
              href="https://www.figma.com/community/plugin/1056467900248561542/Locofy---Figma-to-React-code-(BETA)"
              target="_blank"
            >
              Get Locofy plugin
            </a>
            <img className="icon-plugin" alt="" src="/icon--plugin.svg" />
          </div>
          <div className="guides-parent">
            <a
              className="guides"
              href="https://guide.locofy.ai/"
              target="_blank"
            >
              Guides
            </a>
            <img className="books-1-icon" alt="" src="/books-1.svg" />
          </div>
        </div>
      </div>
      <div className="ship-products-5x-container">
        <span>{`Ship products 5X faster - Convert `}</span>
        <b>Figma designs</b>
        <span>{` to `}</span>
        <b>Code</b>
        <span>!</span>
      </div>
      <b className="turn-your-designs">
        Turn your designs into production-ready frontend code
      </b>
    </div>
  );
};

export default LocofyPluginSection;
