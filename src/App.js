import './App.css';
import Navber from './Components/Shared/Navber';
import Home from './Pages/Home';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Umrah from './Pages/Umrah';

function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="umrah" element={<Umrah />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
