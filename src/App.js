import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import Menubar from "./Components/Menubar/Menubar";

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
