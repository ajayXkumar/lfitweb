import React from "react";
import Slider from "./Slider";
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
          }}
        >
          <div style={{ fontSize: 40, fontWeight: "bold", fontFamily: "koHo" }}>
            LFIT FITNESS TRACKER
          </div>
          <div style={{ fontSize: 19, fontWeight: "400", fontFamily: "koHo" }}>
            Our Fitness Tracker App helps you track every workout, monitor
            progress, and stay motivated with personalized insights. No more
            guessing—just results.
          </div>

          <div
            style={{
              display: "flex",
              width: 120,
              backgroundColor: "#e3085c",
              height: 40,
              borderRadius: 6,
              color: "white",
              marginTop: 40,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
            }}
          >
            <a href="/lfit.apk" download="lfit.apk"
            style={{textDecoration:"none",color:"white"}}>
             
         
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
            style={{
              borderColor: "gray",
              borderWidth: "4px",
              borderStyle: "solid",
              marginLeft: 200,
              width: 300,
              borderRadius: 30,
            }}
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
