import Bestfood from './Components/bestfood/Bestfood';
import Category from './Components/category/category';
import Counter from './Components/counter/Counter';
import Delivery from './Components/delivery/Delivery';
import Footer from './Components/footer/Footer';
import Header from './Components/Home/Header/Header';
import Intro from './Components/Intro/Intro';
import Order from './Components/Order/Order';
import Products from './Components/products/Products';
import { Review } from './Components/reviews/Review';
function App() {
  return (
    <div className="">
      <Header />
      <Order />
      <Intro />
      <Bestfood />
      <Category />
      <Delivery />
      <Products />
      <Counter />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
