import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./home/Home";
import Register from "./components/Register";
import VerifyOtp from "./components/VerifyOtp";
import Login from "./components/Login";
import useStore from "./store/store";
import HomeAft from "./homeAftLogin/HomeAft";
import ExploreProfiles from "./components/ExploreProfiles";
import { useEffect } from "react";
import Interest from "./components/Interest";
import Matches from "./components/Matches";
import NavbarAft from "./components/NavbarAft";
import CreateProfile from "./components/CreateProfile";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useStore();
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<HomeAft />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyOtp />} />
          <Route path="/createProfile" element={<>
                <NavbarAft />
                <CreateProfile />
              </>} />
          <Route
            path="/profiles"
            element={
              <>
                <NavbarAft />
                <ExploreProfiles />
              </>
            }
          />
          <Route
            path="/interest"
            element={
              <>
                <NavbarAft />
                <Interest />
              </>
            }
          />
          <Route
            path="/matches"
            element={
              <>
                <NavbarAft />
                <Matches />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
