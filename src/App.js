import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './screens/landingPage';
import Services from './screens/services';
import OurWork from './screens/ourWork';
import Careers from './screens/careers';
import ContactUs from './screens/contactUs';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route exact path="/" element={<LandingPage/>}>
          </Route>
          <Route exact path="/services" element={<Services/>}>
          </Route>
          <Route exact path="/ourWork" element={<OurWork/>}>
          </Route>
          <Route exact path="/careers" element={<Careers/>}>
          </Route>
          <Route exact path="/contactUs" element={<ContactUs/>}>
          </Route>
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
