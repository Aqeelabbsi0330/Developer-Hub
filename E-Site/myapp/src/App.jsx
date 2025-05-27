import { useState } from "react";
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";
import Navigation from "./Components/Navigation/Navigation";
import SubFooter from "./Components/Sub Footer/SubFooter";
import Footer from "./Components/Footer/Footer";
import Category from "./Components/Categories/Category";
import Cards from "./Components/Cards/Cards";
import Filter from "./Components/Filter/Filter";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    </>
  );
}

export default App;
