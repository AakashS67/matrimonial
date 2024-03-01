import "./App.css";
import Home from "./Pages/home";
import Help from "./Pages/Help";
import { Route, Routes } from "react-router";
import ProfileDetails from "./Pages/ProfileDetails";
import CareerDetails from "./Pages/CareerDetails";
import LifestyleAndFamily from "./Pages/LifestyleAndFamily";
import DesiredPartnerProfile from "./Pages/DesiredPartnerProfile";
import UploadPhotos from "./Pages/UploadPhotos";
import AstrologyServices from "./Pages/AstrologyServices";
import Upgrade from "./Pages/Upgrade";
import ReferAndEarn from "./Pages/ReferAndEarn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SuccessStories from "./Pages/SuccessStories";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import RegistrationHeader from "./Components/Common/RegistrationHeader";
import { useLocation } from "react-router";

function App() {
  const ConditionalHeader = () => {
    const location = useLocation();

    // Array of paths where you want to show the RegistrationHeader
    const headerPaths = ['/registration', '/upload-photo', '/forgotpassword', '/login'];

    // Check if the current path matches any of the specified paths
    const shouldShowHeader = headerPaths.some(path => location.pathname.includes(path));

    return shouldShowHeader ? <RegistrationHeader /> : null;
  };
  return (
    <div className="App min-h-screen no-scrollbar">
      <ConditionalHeader />
      <Routes>
        <Route path="/help" element={<Help />} />
        <Route
          path="/registration"
          element={<ProfileDetails />}
        />
        <Route
          path="/upload-photo"
          element={<UploadPhotos />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/forgotpassword"
          element={<ForgotPassword />}
        />

        {/* <Route
          path="/registration/career-details"
          element={<CareerDetails />}
        />
        <Route
          path="/registration/lifestyle-and-family"
          element={<LifestyleAndFamily />}
        />
        <Route
          path="/registration/desired-partner-profile"
          element={<DesiredPartnerProfile />}
        /> */}
        <Route path="/registration/upload-photos" element={<UploadPhotos />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
        <Route path="/dashboard/matches" element={<Dashboard />} />
        <Route path="/dashboard/activity" element={<Dashboard />} />
        <Route path="/dashboard/search" element={<Dashboard />} />
        <Route path="/dashboard/messenger" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Dashboard />} />
        <Route path="/dashboard/blocked-profiles" element={<Dashboard />} />
        <Route path="/dashboard/notifications" element={<Dashboard />} />
        <Route path="/dashboard/phonebook" element={<Dashboard />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/astrology-services" element={<AstrologyServices />} />
        <Route path="/refer-and-earn" element={<ReferAndEarn />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
