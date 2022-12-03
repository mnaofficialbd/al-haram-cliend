import './App.css';
import Navber from './Components/Shared/Navber';
import SubNavber from './Components/Home/SubNavber';
import Home from './Pages/Home';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Umrah from './Pages/Umrah';
import Hajj from './Pages/Hajj';
import Land from './Pages/Land';
import PackageDetails from './Pages/PackageDetails';
import HajjDetails from './Pages/HajjDetails';
import LandDetails from './Pages/LandDetails';
import Flights from './Pages/Flights';
import Hotel from './Pages/Hotel';
import FlightBooking from './Pages/FlightBooking';
import HotelDetails from './Pages/HotelDetails';
import Bus from './Pages/Bus';

function App() {
  return (
    <>
      <Navber />
      <SubNavber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/hajj" element={<Hajj />} />
        <Route path="/land" element={<Land />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flightbooking" element={<FlightBooking />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/bus" element={<Bus />} />
        {/* <Route path="/umrah/packageDetails/:id" element={<PackageDetails />} /> */}
        <Route path="/umrah/packageDetails" element={<PackageDetails />} />
        <Route path="/hajj/hajjDetails" element={<HajjDetails />} />
        <Route path="/land/landDetails" element={<LandDetails />} />
        <Route path="/hotel/hotelDetails" element={<HotelDetails />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
