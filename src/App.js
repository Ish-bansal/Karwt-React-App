import React from 'react';
import NavBar from './compnonents/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from './compnonents/Footer'
import Home from './compnonents/screens/Home'





const Routing = ()=>{

  return(
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
     
    </Switch>
  )
}

function App() {
 
  return (
    <BrowserRouter>
     <NavBar />
      <Routing />
     <Footer />
      
    </BrowserRouter>
    
  );
}

export default App;
