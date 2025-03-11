import Footer from './components/footer/Footer.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <div id="main">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
