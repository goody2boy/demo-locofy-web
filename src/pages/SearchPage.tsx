import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FoodpandaContainer from "../components/FoodpandaContainer";

const Search = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
`;
const SearchTerm = styled.input`
  border: none;
  font-family: Tomorrow;
  font-size: 12px;
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 16px 15px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SearchIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px 11px;
  background-color: #4f46ba;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #171060;
  }
`;
const SearchTermParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const SearchSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26px;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
const Back = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  font-size: 20px;
  font-family: Tomorrow;
  color: #000;
  text-align: left;
  display: inline-block;
`;
const SearchPageRoot = styled.div`
  position: relative;
  background-color: #f3f5fa;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 67px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 37px;
  text-align: left;
  font-size: 21px;
  color: #151630;
  font-family: Tomorrow;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const SearchPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SearchPageRoot>
      <SearchSection>
        <Search>Search</Search>
        <SearchTermParent>
          <SearchTerm type="text" placeholder="Enter Search Term" />
          <Button onClick={onButtonClick}>
            <SearchIcon alt="" src="/search2.svg" />
          </Button>
        </SearchTermParent>
      </SearchSection>
      <FoodpandaContainer />
      <Back onClick={onBackClick}>← Back</Back>
    </SearchPageRoot>
  );
};

export default SearchPage;
