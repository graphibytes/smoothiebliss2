
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "./pages/landingpage";
import {Services} from "./pages/services";
import { AboutUs } from "./pages/about";
import { TodaysPick } from "./pages/todayspick";
import { OurMenu } from "./pages/ourmenu";
import { Contacts } from "./pages/contacts";
import { NavPane } from "./components/navpane";

const App = () => {
  return (
    <Router>
      <LandingPage/>
      <NavPane/>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<AboutUs/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/todaypick" element={<TodaysPick />} />
          <Route path="/menu" element={<OurMenu />} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
    </Router>
  );
};

export default App;