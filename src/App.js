import React from 'react'
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Platform from './components/Platform/Platform';
import Service from './components/Service/Service';
import Header from './components/Header/Header';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

 const App = () => {
  return (
    <Router>
        <Navbar/>
        
          <Route>
                <Platform/>
                <Header/>
                <Service/>
                <Home/>

                <Contact/>

                <Footer/>
              </Route>
    </Router>
  )
}
export default App;


