import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';
import Home from "./Components/Home";

import { ToastAddcart } from './Components/toast/ToastLogin';
import ScrollTop from './Components/scrollTop/ScrollTop';

const ProductList = React.lazy(() => import('./Components/bestfood/index'))
const Notfound = React.lazy(() => import('./Components/NotFound/Notfound'))
const Productdetails = React.lazy(() => import('./Components/bestfood/Products/ProductDetails/Productdetails'))
const Login = React.lazy(() => import('./Components/login/Login'))
const Register = React.lazy(() => import('./Components/login/Register'))
const Checkout = React.lazy(() => import('./Components/checkout/Checkout'))

function App() {

  return (
    <div className="">

      <Routes >
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/listfood' element={<Navigate to="/listfood/bestfood?_limit=16" />} />
        <Route path='/listfood/fooditem/*' element={<React.Suspense fallback='' ><Productdetails /></React.Suspense>} />
        <Route path='/listfood/*' element={<React.Suspense fallback='' ><ProductList /></React.Suspense>} >

        </Route>
        <Route path='/login' element={<React.Suspense fallback='' >< Login /></React.Suspense>} />
        <Route path='/register' element={<React.Suspense fallback='' ><Register /></React.Suspense>} />
        <Route path='/checkout' element={<React.Suspense fallback='' ><Checkout /></React.Suspense>} />

        <Route path='*' element={<React.Suspense fallback='' ><Notfound /></React.Suspense>} />
      </Routes>
      <ToastAddcart />
      < ScrollTop />

    </div>
  );
}

export default App;
