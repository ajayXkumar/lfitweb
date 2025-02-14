import React, { useState } from "react";
import "./../css/Home.css";
import Slider from "../componant/Slider";

const Home = () => {
  const [tab, settab] = useState("tracker");

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="heading-container">
          <div className="heading">TRAIN SMARTER. MANAGE BETTER.</div>
          <div
            style={{
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "black",
              width: 90,
              height: 90,
              borderRadius: 90,
              textAlign: "center",
              fontSize: 60,
              fontWeight: 10,
              marginTop: 30,
            }}
          >
            ↓
          </div>
        </div>

        <div className="images-container">
          <div className="image1">
            <img className="fitness" src="/images/fitness.png" alt="phone" />
            <div className="fitnes-text">FITNESS TRACKER</div>
            <div className="download-button">
              <a
                href="/lfit.apk"
                download="lfit.apk"
                style={{
                  textDecoration: "none",
                  color:"white"
                }}
              >
                Download
              </a>
            </div>
          </div>
          <div className="image2">
            <img className="club" src="/images/sfhs.png" alt="phone" />
            <div className="club-text">GYM MANAGER</div>
            <div className="download-button">Download</div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            marginTop: 100,
            marginBottom: -200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="button-tab"
            style={{
              margin: 10,
              borderWidth: tab === "tracker" ? 1 : 0,
              borderRadius: 10,
              borderStyle: tab === "tracker" ? "solid" : "none",
              padding: 6,
              cursor: "pointer",
              width: 100,
              textAlign: "center",
              fontFamily: "koHo",
            }}
            onClick={() => settab("tracker")}
          >
            Tracker
          </div>

          <div
            className="button-tab"
            style={{
              margin: 10,
              borderWidth: tab === "manager" ? 1 : 0,
              borderRadius: 10,
              borderStyle: tab === "manager" ? "solid" : "none",
              padding: 6,
              cursor: "pointer",
              width: 100,
              textAlign: "center",
              fontFamily: "koHo",
            }}
            onClick={() => settab("manager")}
          >
            Manager
          </div>
        </div>
        <Slider />

        <div
          style={{
            width: "90%",
            borderRadius: 30,
            padding: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              alignSelf: "center",
              borderRadius: 30,
              padding: 30,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "20px", marginBottom: "14px" }}>
              Our Mission
            </div>
            <div style={{ textAlign: "justify", fontFamily: "koHo" }}>
              At LFIT, we aim to revolutionize fitness with two powerful
              apps—Gym Tracker and Gym Manager. Gym Tracker helps individuals
              stay on top of their fitness with 800+ exercises and 8,000+ meals,
              allowing users to track both workouts and diet effortlessly. With
              smart insights and progress tracking, it keeps you motivated and
              on track. Gym Manager is designed for gym owners and trainers,
              streamlining memberships, scheduling, and client progress tracking
              to simplify operations and enhance member experience. Our mission
              is to make fitness smarter, structured, and more accessible for
              everyone.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
