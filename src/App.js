import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./componant/HomePage";
// Import the FitnessApp component
import LoadingScreen from "./componant/loadingScreen";
import FitnessApp from './componant/FitnessApp'
import SplashCursor from "./componant/SplashCursor";
import Home from "./componant/Home";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
  
      <div className="App">
        {loading ? (
          <LoadingScreen onFinish={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Home Page */}
            <Route path="/fitness" element={<FitnessApp />} /> {/* New Fitness Page */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
