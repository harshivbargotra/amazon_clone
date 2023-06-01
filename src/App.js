import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NE9CKSGcBBeZbqSHBaS94zJFCzYn1uD2suk6zB3px3y2CV4kXNGFSodIM1CA71Egn6eRtZ98qYmFAer0TvCPD0Y00SgfSYRhl"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("....", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [auth]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
