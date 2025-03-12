import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import NotFound from './components/404/404.jsx';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <div id="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
