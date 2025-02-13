import { useEffect, useState } from "react";
import '../css/loadingScreen.css'
const fonts = ["KoHo","Orbitron","Arial", "Courier New"];

export default function LoadingScreen({ onFinish }) {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onFinish(); // Callback to navigate to the main page
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="main-container">
      <div  className="loading-text" style={{ fontFamily: fonts[fontIndex] ,fontWeight:"bold",fontSize:300,height:500,marginTop:"100px"}}>LFIT</div>
    </div>
  );
}
