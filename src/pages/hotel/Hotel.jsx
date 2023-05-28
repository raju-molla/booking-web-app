import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../componets/footer/Footer";
import Header from "../../componets/header/Header";
import MailList from "../../componets/mailList/MailList";
import Navbar from "../../componets/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumer] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumer(i);
    setOpen(!open);
  };
  const handleMove = (x)=>{
    let newSlidenumber;
    if(x==='l'){
        newSlidenumber = slideNumber===0 ? 5: slideNumber-1; 
    }
    else{
        newSlidenumber = slideNumber===5 ? 0 : slideNumber+1;
    }
    setSlideNumer(newSlidenumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove('l')} />
            <div className="slideWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove('r')} />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book stay over $114 at the property and get a free airport taxi
          </span>
          <div className="hotelImage">
            {photos.map((hotel, i) => (
              <div className="hotelImageWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  className="hotelImg"
                  src={hotel.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, quasi enim assumenda eum pariatur placeat sed
                accusantium sapiente sint eius culpa suscipit. Qui velit minima
                obcaecati esse in fuga labore et cum voluptates vitae hic
                perspiciatis doloremque voluptatibus dicta cumque libero
                incidunt, cupiditate, quaerat optio minus quo sint enim?
                Assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Incidunt delectus itaque ratione non distinctio autem
                recusandae dolores in a impedit?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                recusandae eligendi eum deserunt, ipsa soluta rerum magni, minus
                corporis quisquam quia expedita. Eum, ullam fugiat facere
                debitis molestias doloremque consequuntur.
              </span>
              <h2>
                <b>%985</b> (9 night)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
