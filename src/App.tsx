// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./index.css"
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#2E3B4E] min-h-screen '>
        <Routes>
          <Route path='/about' element={<About />} />
          {/* <Route path='/work' element={<Work />} />
          <Route path='/resume' element={<Resume />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
