import React from "react";
import Slider from "./Slider";
import SplashCursor from "./SplashCursor";
import './../css/FitnessApp.css'
const FitnessApp = () => {
  return (
    <div
      style={{
        width: "100vw",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >

      <div
        style={{
          width: "60vw",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "30vw",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop:"10vh"
          }}
        >
              
          <div style={{ fontSize:"4vw", fontWeight: "bold", fontFamily: "koHo" }}>
            LFIT FITNESS TRACKER
          </div>
          <div style={{ fontSize: "1vw", fontWeight: "400", fontFamily: "koHo" }}>
            Our Fitness Tracker App helps you track every workout, monitor
            progress, and stay motivated with personalized insights. No more
            guessing—just results.
          </div>

          <div

          className="button-style"
           
          >
            <a href="/lfit.apk" download="lfit.apk"
            style={{textDecoration:"none",color:"white",fontSize:"1vw"}}>
             
         
            Download
            </a>
          </div>
        </div>
        <div
          style={{
            width: "30vw",
            color: "white",
            justifyContent: "right",
            marginTop: 100,
          }}
        >
          <img
            className="fitness-image"
            src="/images/home.jpg"
            alt="phone"
          />
        </div>
      </div>
      <div style={{ width: "100vw", marginBottom: 200 }}>
        <Slider />
      </div>
   
    </div>
  );
};

export default FitnessApp;
