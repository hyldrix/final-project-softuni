import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import NotFound from './components/404/404.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import UpcomingClasses from './components/upcoming-classes/UpcomingClasses.jsx';
import './App.css';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

function App() {

  return (
      <AuthContextProvider>
        <NavBar />
        <div id="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/classes" element={<UpcomingClasses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </AuthContextProvider>
  );
}

export default App;
