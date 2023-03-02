import GoodsList from "./container/GoodsList";
import './App.css';


function App() {
  return (
    <div className="container">
      {/* вывод данных из хранилища */}
      <div>
        <GoodsList/>

      </div>
    </div>
  );
}

export default App;
