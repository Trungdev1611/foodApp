import Bestfood from './Components/bestfood/Bestfood';
import Category from './Components/category/category';
import Delivery from './Components/delivery/Delivery';
import Header from './Components/Home/Header/Header';
import Intro from './Components/Intro/Intro';
import Order from './Components/Order/Order';

function App() {
  return (
    <div className="">
      <Header />
      <Order />
      <Intro />
      <Bestfood />
      <Category />
      <Delivery />
    </div>
  );
}

export default App;
