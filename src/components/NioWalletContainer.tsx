import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

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

const Niowallet = styled.div`
  position: relative;
  letter-spacing: 0.04em;
`;
const Div = styled.div<{ propLetterSpacing?: Property.LetterSpacing }>`
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 500;
  letter-spacing: ${(p) => p.propLetterSpacing};
`;
const Nio = styled.div<{ propLetterSpacing1?: Property.LetterSpacing }>`
  position: relative;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: #777e8a;
  letter-spacing: ${(p) => p.propLetterSpacing1};
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  font-size: 17px;
`;
const BitcoinIcon = styled.img<{ propWidth?: Property.Width }>`
  position: relative;
  width: 20px;
  height: 20px;
  width: ${(p) => p.propWidth};
`;
const NioWalletRoot = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 36px 37px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: left;
  font-size: 11px;
  color: #0d1118;
  font-family: Tomorrow;
  @media screen and (max-width: 500px) {
    flex: unset;
    align-self: stretch;
  }
`;
const NioWalletContainer: FunctionComponent<NioWalletContainerType> = ({
  walletBalance,
  walletBalanceNio,
  walletBalanceEth,
  walletTransactionIdNio,
  propLetterSpacing,
  propLetterSpacing1,
  propWidth,
}) => {
  return (
    <NioWalletRoot>
      <Niowallet>{walletBalance}</Niowallet>
      <Parent1>
        <Div propLetterSpacing={propLetterSpacing}>{walletBalanceNio}</Div>
        <Nio propLetterSpacing1={propLetterSpacing1}>{walletBalanceEth}</Nio>
      </Parent1>
      <BitcoinIcon alt="" src={walletTransactionIdNio} propWidth={propWidth} />
    </NioWalletRoot>
  );
};

export default NioWalletContainer;
