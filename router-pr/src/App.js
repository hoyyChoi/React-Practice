import logo from './logo.svg';
import './App.css';
import About from './About';
import Homepage from './Homepage';
import {Routes,Route,Navigate} from "react-router-dom"
import Product from './Product';
import ProductDetail from './ProductDetail';
import Login from './Login';
import { useState } from 'react';
import User from './User';

function App() {
  const [auth,setAuth] = useState(true)
  const PrivateRoute = ()=>{
    return auth?<User/>:<Navigate to='/login'/>
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
