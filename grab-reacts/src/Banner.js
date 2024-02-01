import React from "react";

const Banner = () => {
  return (
    <div className="bottom_container">
      <div className="section_container">
        <div className="section_content">
          <div className="banner_layout">
            <div className="banner_row">
              <div className="restaurant_container">
                <img
                  src="assets/bottom-food-options.svg"
                  alt="bottom-food"
                ></img>
                <h2 className="restaurant_title">Curated Restaurants</h2>
                <p className="restaurant_description">
                  From small bites to big meals, we won't limit your appetite.
                  Go ahead and order all you want.
                </p>
              </div>
              <div className="download_container">
              <img
                className="features"
                src="assets/ilus-cool-features-app.svg"
                alt="bottom-illus"
              ></img>
              <h2 className="download_title">
                More cool features available on the app
              </h2>
              <p className="download_description">
                Download Grab app to use other payment methods and enjoy
                seamless communication with your driver.
              </p>
              <div className="logo_container">
              <a>
                <img src="assets/logo-appstore.svg" alt="appstore"></img>
              </a>
              <a>
                <img src="assets/logo-playstore.svg" alt="playstore"></img>
              </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
