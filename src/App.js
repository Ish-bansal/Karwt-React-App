import React from 'react';
import NavBar from './compnonents/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from './compnonents/Footer'
import Home from './compnonents/screens/Home'
import Sign from './compnonents/Sign';
import Trackorders from './compnonents/Trackorders';
import Error from './compnonents/screens/404';
import Checkout from './compnonents/screens/Checkout';
import FAQdata from './compnonents/screens/FAQdata';
import Cart from './compnonents/Cart';
import Faq from './compnonents/screens/FAQ';
import MyWishlist from './compnonents/MyWishlist';
import Policy from './compnonents/screens/Policy';
import Blog from './compnonents/screens/homecomponent/Blog';
import NNavBar from './compnonents/screens/NNavbar';
import ProductComparision from './compnonents/ProductComparision';
import Detail from './compnonents/screens/Detail/Detail';
import Category from './compnonents/screens/category/Category';





const Routing = ()=>{

  return(
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>

      <Route  path="/signin" >
        <Sign />
      </Route>
      <Route  path="/trackorder" >
        <Trackorders />
      </Route>
      
      <Route  path="/checkout" >
        <Checkout />
      </Route>

      <Route  path="/detail" >
        <Detail />
      </Route>

      <Route  path="/category" >
        <Category />
      </Route>

      <Route  path="/cart" >
        <Cart />
      </Route>

      <Route path="/faq" >
        <Faq/>
      </Route>

      <Route path="/policy" >
        <Policy/>
      </Route>

      <Route path="/my-wishlist" >
        <MyWishlist/>
      </Route>

      <Route path="/comparision" >
        <ProductComparision/>
      </Route>


      <Route path="/blog" >
        <Blog/>
      </Route>


      <Route  path="*" >
        <Error />
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
