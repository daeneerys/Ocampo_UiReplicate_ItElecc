import React from "react";
import Countries from "./Countries";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const MoreFoot = () => {
  return (
    <div className="footer_main">
      <div className="footer_section">
        <div className="countries_container">
          <h4 className="country_title">Countries with GrabFood</h4>
          <div className="country_list">
            {countriesData.map((countries) => (
              <Countries countryObj={countries} />
            ))}
          </div>
        </div>
        <div className="socials_container">
          <a href = "/"><FaFacebookSquare style = {{padding: "8px"}}size = {32} /> </a>
          <a href = "/"><FaInstagramSquare style = {{padding: "8px"}} size = {32}/> </a>
          <a href = "/"><FaTwitterSquare style = {{padding: "8px"}} size = {32}/> </a>
        </div>
        <div className="copyright_container">
          <h2>&copy; Grab 2024</h2>
          <h1>Terms of Service • Privacy Policy</h1>
        </div>
        <div className="store_container">
          <a href="/"><img src="assets/logo-appstore.svg" alt="appstore" className="app"></img></a>
          <a href= "/"> <img src="assets/logo-playstore.svg" alt="playstore"></img></a>
        </div>
      </div>
    </div>
  );
};

export default MoreFoot;

const countriesData = [
  {
    country_name: "Indonesia |",
  },
  {
    country_name: "Philippines |",
  },
  {
    country_name: "Thailand | ",
  },
  {
    country_name: "Vietnam | ",
  },
  {
    country_name: "Singapore | ",
  },
  {
    country_name: "Malaysia |",
  },
  {
    country_name: "Myanmar",
  },
];
