import GoodsList from "./container/GoodsList";
import CartList from "./container/CartList";
import Cart from "./components/Cart";
import './App.css';


function App() {
  return (
    <div className="container">
      {/* вывод данных из хранилища */}
      <div>
        <GoodsList/>
        <CartList />
      </div>
    </div>
  );
}

export default App;
