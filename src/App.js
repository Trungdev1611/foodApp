import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Components/Home";
import ProductList from './Components/bestfood/index';

function App() {

  return (
    <div className="">

      <Routes >
        <Route path='/' element={<Navigate to="home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bestfood' element={<ProductList />} />
      </Routes>

    </div>
  );
}

export default App;
