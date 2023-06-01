import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61cuESsBAEL._SX3000_.jpg"
            alt="home"
          />
          <div className="home__row">
          <Product
              id="1001"
              title="Razer BlackWidow V3 Tenkeyless - Mechanical Wired Gaming Keyboard Black"
              price={8370}
              image="https://m.media-amazon.com/images/I/71dp0QvyCXL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="1002"
              title="Think Straight: Change your thoughts, Foroux, Darius"
              price={190}
              image="https://m.media-amazon.com/images/I/41JoC4r8JDL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id='1003'
              title="Apple Watch Ultra [GPS + Cellular 49 mm] smart watch w/Rugged Titanium Case & Orange Alpine Loop"
              price={82999}
              image="https://m.media-amazon.com/images/I/91z5KuonXrL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id='1004'
              title="Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI"
              price={1070}
              image="https://m.media-amazon.com/images/I/61ni3t1ryQL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id='1005'
              title="JD9 High Back Ergonomic Chair Cushion Seat with Advanced Syncro Tilt Mechanism"
              price={8370}
              image="https://m.media-amazon.com/images/I/71qrF6k1iEL._SL1500_.jpg"
              rating={2}
            />
          </div>
          <div className="home__row">
            <Product
              id='1006'
              title="ASUS ROG Strix GT135, Intel® Core™ i9-10900KF Processor 3.7 GHz Gaming Desktop (16GB/1TB HDD + 512GB SSD/6GB, 
              NVIDIA® GeForce® RTX3080 10GB DDR6X with LHR "
              price={249000}
              image="https://dlcdnwebimgs.asus.com/gain/01A13359-893B-441B-B154-8A4ABA5BA9BD/fwebp"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
