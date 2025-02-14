import React, { useState, useEffect } from "react";
import "../css/Homepage.css";
import Slider from "../componant/Slider";
import { motion } from "framer-motion";
import FlippingCard from "../componant/FlippingCard";
import PixelCard from "./PixalCard";
import SplashCursor from "./SplashCursor";
import CircularGallery from "./Gallery";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 1.5); // Adjust speed by changing multiplier
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      img: "/images/phone.png",
      text: "Feature 1: This is the health tracker that helps you stay fit and active.",
    },
    {
      img: "/images/phone.png",
      text: "Feature 2: Get real-time analytics on your progress with our intuitive dashboard.",
    },
    {
      img: "/images/phone.png",
      text: "Feature 3: Stay connected with health experts through our integrated chat system.",
    },
    {
      img: "/images/phone.png",
      text: "Feature 4: AI-powered recommendations tailored to your personal health goals.",
    },
    {
      img: "/images/phone.png",
      text: "Feature 5: Secure data storage ensuring your health records are safe and private.",
    },
    {
      img: "/images/phone.png",
      text: "Feature 5: Secure data storage ensuring your health records are safe and private.",
    },
  ];

  return (
    <div className="home-container">
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div
        style={{
          fontSize: "20vw",
          fontFamily: "KoHo",
          fontWeight: "bold",
          color: "white",
          marginTop: 100,
          alignSelf: "center",
          width: "100vw",
          textAlign: "center",
        }}
      >
        LFIT
      </div>
      <div
        style={{
          fontSize: "2vw",
          fontFamily: "KoHo",
          fontWeight: "500",
          color: "white",
          marginTop: "0.5vh",
          width: "100vw",
          textAlign: "center",
        }}
      >
        Power Up Your Fitness. Level Up Your Gym.
      </div>

      <div
        style={{
          fontSize: "1vw",
          fontFamily: "KoHo",
          color: "white",
          width: 600,
          alignSelf: "center",
          justifySelf: "center",
          width: "100vw",
          textAlign: "center",
          marginTop: "1vh",
        }}
      >
        Whether you're training hard or managing a gym, we’ve got the perfect
        app for you!
      </div>

      <div className="middle-container">
        <div
          className="image-container"
          // style={{
          //   transform: `translateY(${-scrollY}px)`,
          //   transition: "transform 0.1s ease-out",
          // }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50vw",
            }}
          >
            <img
              style={{
                borderColor: "gray",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              className="image-style"
              src="/images/home.jpg"
              alt="phone"
            />
            <div
              style={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#e3085c",
                borderRadius: 6,
                color: "white",
                marginTop: 40,
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
              }}
            >
              <Link
                to="/fitness"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn more
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50vw",
            }}
          >
            <img
              style={{
                borderColor: "gray",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              className="image-style"
              src="/images/home.jpg"
              alt="phone"
            />

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
              Learn more
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            width: "50vw",
            color: "white",
            alignSelf: "center",
            textAlign: "center",
            fontFamily: "koHo",
          }}
        >
          About
        </div>
        <div
          style={{
            marginTop: "30px",
            height: "300px",
            width: "50vw",
            color: "white",
            alignSelf: "center",
            textAlign: "justify",
            fontFamily: "koHo",
            
          }}
        >
          At lfit, we believe fitness should be simple, powerful, and accessible
          to everyone. Whether you're an individual pushing your limits in the
          gym or a gym owner managing your business, our apps are designed to
          make your journey easier.
        </div>
      </div>

      {/* <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src="images/image.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="images/front.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="images/workout.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src="images/radar.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src="images/wokout.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src="images/front.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src="images/image.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src="images/wokout.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src="images/front.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src="images/radar.png" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
