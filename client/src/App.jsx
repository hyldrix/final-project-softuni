import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import NotFound from './components/404/404.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import UpcomingClasses from './components/upcoming-classes/UpcomingClasses.jsx';
import CreateClasses from './components/create-classes/CreateClasses.jsx';
import './App.css';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import ClassDetailsCard from './components/upcoming-classes/ClassDetailsCard/ClassDetailsCard.jsx';
import EditClasses from './components/edit-classes/EditClasses.jsx';
import ManageClasses from './components/manage-classes/ManageClasses.jsx';
import MyClasses from './components/my-classes/MyClasses.jsx';
import RouteGuard from './components/common/route-guard/RouteGuard.jsx';

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
          <Route exact path="/classes/:classId" element={<ClassDetailsCard />} />

          <Route path="*" element={<NotFound />} />
          <Route element={<RouteGuard />}>
            <Route exact path="/classes/create" element={<CreateClasses />} />
            <Route exact path="/classes/edit/:classId" element={<EditClasses />} />
            <Route exact path="/classes/admin/" element={<ManageClasses />} />
            <Route exact path="/myclasses" element={<MyClasses />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
