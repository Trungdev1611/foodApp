import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Components/Home";
import ProductList from './Components/bestfood/index';
import Notfound from './Components/NotFound/Notfound';
import Productdetails from './Components/bestfood/Products/ProductDetails/Productdetails';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import { ToastAddcart } from './Components/toast/ToastLogin';

function App() {

  return (
    <div className="">

      <Routes >
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/listfood' element={<Navigate to="/listfood/bestfood?_limit=16" />} />
        <Route path='/listfood/fooditem/*' element={<Productdetails />} />
        <Route path='/listfood/*' element={<ProductList />} >

        </Route>
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={<Register />} />

        {/* <Route path='/listfood/bestfood/*' element={<ProductList />} /> */}
        <Route path='*' element={<Notfound />} />
      </Routes>
      <ToastAddcart />

    </div>
  );
}

export default App;
