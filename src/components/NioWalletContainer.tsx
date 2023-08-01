import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./NioWalletContainer.css";

type NioWalletContainerType = {
  walletBalance?: string;
  walletBalanceNio?: string;
  walletBalanceEth?: string;
  walletTransactionIdNio?: string;

  /** Style props */
  propLetterSpacing?: Property.LetterSpacing;
  propLetterSpacing1?: Property.LetterSpacing;
  propWidth?: Property.Width;
};

const NioWalletContainer: FunctionComponent<NioWalletContainerType> = ({
  walletBalance,
  walletBalanceNio,
  walletBalanceEth,
  walletTransactionIdNio,
  propLetterSpacing,
  propLetterSpacing1,
  propWidth,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  const nIOStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing1,
    };
  }, [propLetterSpacing1]);

  const bitcoinIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="nio-wallet">
      <div className="niowallet">{walletBalance}</div>
      <div className="parent7">
        <div className="div11" style={divStyle}>
          {walletBalanceNio}
        </div>
        <div className="nio" style={nIOStyle}>
          {walletBalanceEth}
        </div>
      </div>
      <img
        className="bitcoin-icon"
        alt=""
        src={walletTransactionIdNio}
        style={bitcoinIconStyle}
      />
    </div>
  );
};

export default NioWalletContainer;
