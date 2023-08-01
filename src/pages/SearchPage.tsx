import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FoodpandaContainer from "../components/FoodpandaContainer";
import "./SearchPage.css";
const SearchPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/frame-2186");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="search-page">
      <div className="search-section1">
        <div className="search1">Search</div>
        <div className="search-term-group">
          <input
            className="search-term1"
            type="text"
            placeholder="Enter Search Term"
          />
          <button className="button1" onClick={onButtonClick}>
            <img className="search-icon2" alt="" src="/search2.svg" />
          </button>
        </div>
      </div>
      <FoodpandaContainer />
      <button className="back" onClick={onBackClick}>
        ← Back
      </button>
    </div>
  );
};

export default SearchPage;
