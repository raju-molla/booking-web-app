import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {useNavigate} from 'react-router-dom'

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, oparetion) => {
    // console.log(name, oparetion);
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oparetion === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate()

  const handleSearch = () =>{
    navigate('/hotels', {state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airpor Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A little time of discount? It's Genius
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free Mickybooking account
            </p>
            <button className="headerbtn">Sign / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e)=> setDestination(e.target.value)}
                />
              </div>
              <div
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchItem"
              >
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className="headerSearchText">{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adults} adults . ${options.children} children . ${options.room} rooms`}</span>
                {openOptions && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionItemText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          onClick={() => handleOption("adults", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          onClick={() => handleOption("adults", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionItemText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionItemText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <div onClick={handleSearch} className="headerbtn">Search</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
