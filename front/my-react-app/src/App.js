import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//router traido desde el  react-router-dom(no es el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
//import Cart from './components/cart/Cart';
/*import { LoginPage } from './components/Admin/Login';*/





function App() {
  return (
    <Router>
    <div className="App">

      <Header />
<div className='container container-fluid'>
 <Routes>
  <Route path="/" element= {<Home />}/>
  <Route path= "/Home" element= {<Home />}/>
  <Route path="/product/:id" element={<ProductDetails/>}/>
 <Route path='/admin/dashboard' element ={<Dashboard/>}/>
 
  </Routes> 
 



</div>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
