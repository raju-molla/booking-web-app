import React from "react";
import "./searchResult.css";
const SearchResult = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/350508665.webp?k=7099f69563d72c5e00996d8cd7df9d39434c92bf39075a99dfa796602f7b1933&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDestance">500m from center</span>
        <span className="siTaxiop">Free airpots taxi</span>
        <span className="siSubtitle">Studio apartment with air condition</span>
        <span className="siFeature">Entire studio . 1 bathroom . 21m full bed</span>
        <span className="siCancleOption">Free cancleation</span>
        <span className="siCancleOptionSub">You can cancle later, so lock in this great price today</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetaialTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Inclues taxes and fees</span>
            <button className="sicheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
