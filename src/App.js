import './App.css';
import Navber from './Components/Shared/Navber';
import Home from './Pages/Home';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
