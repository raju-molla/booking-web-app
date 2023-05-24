import React from "react";
import Featured from "../../componets/featured/Featured";
import Header from "../../componets/header/Header";
import Navbar from "../../componets/navbar/Navbar";
import PropertyList from "../../componets/propertyList/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
