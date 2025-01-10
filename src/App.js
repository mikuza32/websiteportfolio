import React from "react";
import { Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import VCentials from "./VCentials/VCentials";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/VCentials' element={<VCentials />} />
        <Route path='/LoadingScreen' element={<LoadingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
