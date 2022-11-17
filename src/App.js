import './App.css';
import Navber from './Components/Shared/Navber';
import Home from './Pages/Home';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Umrah from './Pages/Umrah';
import PackageDetails from './Pages/PackageDetails';

function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umrah" element={<Umrah />} />
        {/* <Route path="/umrah/packageDetails/:id" element={<PackageDetails />} /> */}
        <Route path="/umrah/packageDetails" element={<PackageDetails />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
