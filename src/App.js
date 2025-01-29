import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import VCentials from "./VCentials/VCentials";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import PersonalWebsite from "./PersonalWebsite/PersonalWebsite";
import SimpleSabermetrics from "./SimpleSabermetrics/SimpleSabermetrics";
import ContactMe from "./ContactMe/ContactMe";
import NavBar from "./NavBar/NavBar";
import CollegeFootballData from "./CollegeFootballData/CollegeFootballData";
import Game from "./Game/Game";


function App() {
  const location = useLocation();


  return (
    <div>
        {location.pathname === '/' && <NavBar/>}
        {location.pathname === '/VCentials' && <NavBar/>}
        {location.pathname === '/PersonalWebsite' && <NavBar/>}
        {location.pathname === '/ContactMe' && <NavBar/>}
        {location.pathname === '/SimpleSabermetrics' && <NavBar/>}
        {location.pathname === '/CollegeFootballData' && <NavBar/>}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/VCentials" element={<VCentials />} />
          <Route path='/LoadingScreen' element={<LoadingScreen />} />
          <Route path='/PersonalWebsite' element={<PersonalWebsite />} />
          <Route path='/SimpleSabermetrics' element={<SimpleSabermetrics />} />
          <Route path='/ContactMe' element={<ContactMe />} />
          <Route path='/CollegeFootballData' element={<CollegeFootballData/>} />
          <Route path="/Game" element={<Game />} />
        </Routes>
    </div>
  );
}

export default App;
