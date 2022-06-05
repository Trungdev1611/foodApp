import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Components/Home";
import ProductList from './Components/bestfood/index';
import Notfound from './Components/NotFound/Notfound';

function App() {

  return (
    <div className="">

      <Routes >
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/listfood' element={<Navigate to="/listfood/bestfood" />} />
        <Route path='/listfood/bestfood' element={<ProductList />} />
        <Route path='/listfood/burgur' element={<ProductList />} />
        <Route path='/listfood/breads' element={<ProductList />} />
        <Route path='/listfood/sandwiches' element={<ProductList />} />
        <Route path='/listfood/drinks' element={<ProductList />} />
        <Route path='/listfood/pizzas' element={<ProductList />} />


        <Route path='*' element={<Notfound />} />
      </Routes>

    </div>
  );
}

export default App;
